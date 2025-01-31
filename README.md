# The DQM GUI

_Note: This is not the production DQMGUI yet._

This package contains code for a DQMGUI similar to https://cmsweb.cern.ch/dqm/offline/

There are multiple relevant parts:
- The _render service_ in `src/render.cc`, extracted from the classic DQMGUI: https://github.com/rovere/dqmgui
- The _render plugins_ in `plugins/`, traditionally hosted on https://github.com/dmwm/deployment/tree/master/dqmgui/style
- A storage backend.
- A web server.
- A HTML frontend.

## Architecture of the backend

The backend is built using service architecture. This means that there are different services chained relying on each other to provide a result of an API call.

Request starts in one of the endpoint methods declared in `app.py`. Then it goes to `GUIService` which delegates the task to multiple other required services and formulates the response.

For example, a request to render a plot comes in. The GUI would handle it like this:

1. `app.py` delegates the request to `GUIService`
2. `GUIService` tries to retrieve data about the sample from `GUIDataStore` service
3. If data is not found, an import procedure is delegated to the `GUIImportManager` service
4. `GUIImportManager` retrieves missing information about the sample from `GUIDataStore`
5. Then `GUIImportManager` selects the appropriate importer based on the file type and delegates the import procedure to it
6. Specific importer then uses `IOService` to access the file and a specific reader to read its contents (based on the file type)
7. `GUIImportManager` then stores the information about the sample back in the database using `GUIDataStore` service so we don't have to import it again
8. Then `GUIService` delegates the rendering to `GUIRenderer` service which uses a specific reader service to read the ROOT histogram and render it
9. Finally, `GUIRenderer` returns a rendered histogram PNG

If the sample is already imported, steps 3 to 7 would be omitted.

Bellow is a sequence diagram for explaining this procedure

![Render request sequence diagram](data/etc/GUISequence.jpg)

## The render service

The histogram rendering using ROOT and the render plugins is done in a separate process in the classic DQMGUI. This package contians a simplified version of this process. `render.cc` compiles into a standalone program, `render`, that listens on a UNIX socket. A client (e.g. the GUI webserver) can request rendering a histogram there, by sending a request consisting of some metadata (some of which is a relict of the past and not actually used) and an arbitrary number of ROOT objects serialized into a `TBufferFile` buffer: The fisrt is the main object, the remaining ones are reference histograms that will be overlayed in different colors. (Some code for rendering _built-in references_ stored with the main object might remain, but this mode is no longer supported -- in line with CMSSW no longer supporting refrence hisotgrams in the `MonitorElement`.) The response is a PNG-compressed bitmap. All messages use a simple framing format of first sending the length, then the actual data, sometimes nested.

A client that implements this protocol is implemented in `python/rendering.py`.

The render process is single-threaded and does not do any IO apart from the UNIX socket. Many of them can be launched in parallel. They might crash now and then (because ROOT), so some precautions should be taken to restart them if they fail. This is all taken into account by the implementation of the rendering protocol provided in this DQM GUI.

Since the `TBufferFile` data does not contain streamers, but we also don't want to repack all data into the latest format before rendering, the renderer has a mechanism to load streamers. This is done by passing a file name with the request, the renderer will simply open this file once (which reads the streamers as a side effect). This should only be done as needed, since it is quite slow (compared to the actual rendering).

### The render plugins

Render plugins are C++ classes that can modify how histograms are displayed. They are located in the `plugins/` folder. The render plugins are loaded dynamically by the render service (typically on startup, by passing the name of a `.so` with renderplugins to load). We have quite a lot of them, and they are the main reason to keep using this renderer (compared to e.g. switching to JSROOT).

### Compiling this code

The renderer, all render plugins and Cython code can be built by simply running `./scripts/build.sh`. In case of build errors, try cleaning the results of previous builds by running `gmake clean`.

`CMSSW_VERSION` and `SCRAM_ARCH` values that will be used to build and run the code, are located in this file: `scripts/cmssw_info`. Contents of this file can be changed manually to link the DQM GUI to the different CMSSW version.

## The storage backend

The storage backend is based on legacy (`TDirectory`), DQMIO (`TTree`) and protobuf files. The code is in `python/nanoroot/`, `python/reading/` and `python/protobuf`. It keeps a SQLite database of metadata, about _samples_ (run/dataset/lumi), and _ME lists_, which represent the MEs present in a sample. These are stored compressed to make their size manageable. The ME list is built on first access (on demand importing); this makes it feasible to register all ~80000 files that we have on EOS at the moment as samples.

## The web server

The web server is based in `aiohttp`.

Add python packages to a local directory where the code is deployed:
``` bash
python3 -m pip install -r requirements.txt -t .python_packages
```

The server can be started like this:
``` bash
./scripts/dqmgui.sh
```

Please run this in order to see the supported arguments and their meaning:

``` bash
./scripts/dqmgui.sh --help
```

Log file of the web server by default is located here: `data/logs/dqmgui.log`

## File formats

Currently there are three supported file formats:

* Legacy DQM TDirectory based ROOT files (1)
* DQMIO TTree based ROOT files (2)
* Protobuf based format used in Online live mode (3)

There will most probably be a format for online/live data streaming.

Format in the code is expressed as FileFormat enum.

## Importing

All 3 different file formats are being imported on demand. That means that samples are imported whenever they are first requested by the user. That's why a very first access to a sample is a little bit slower than the consecutive requests. The process of importing is described in more detail bellow:

`GUIImportManager` is responsible for importing blobs containing ME information into the database.
There are two types of blobs: `names_blob` and `infos_blob`. `names_blob` is `\n` separated, alphabetically ordered list of normalized full ME paths. All strings are represented as python3 binary strings. `infos_blob` contains a list MEInfo objects in exactly the same order as `infos_blob`. So in order to find out more information about a monitor element, we have to binary search for it in a sorted `names_blob` and access `MEInfo` from `infos_blob` at the same index. `get_rendered_image()` function in `GUIService` does this. Blobs are stored in the database compressed. `GUIBlobCompressor` service is responsible for compressing them for storage and uncompressing them for usage in the program.

### Usage of Cython for on-demand-importing

Cython is a compiler that allows us to add explicit type information to Python variables. It then proceeds to compile the annotated Python code to C/C++. Compiled binary is then used during the runtime. More info about Cython can be found here: https://cython.org/

We use this tool to dramatically improve the performance on-demand-importing. Up to now, only Legacy DQM (1) and Protobuf (3) importers were converted to Cython. Converting the importer of DQMIO TTree (2) file format is a natural next step.

Cythonised versions of Python code are available here: `python/nanoroot/*.pyx` and here `python/protobuf/protobuf_parser.pyx`.

In order for changes to Cython files to be visible, we need to rebuild the project: `./scripts/build.sh`

## Adding new file format importer

In order to add new importer you have to do three things:

* Add a class into `python/importing/` folder following this naming convention: `<fileformat>_importer.py`.
  * This class has to have a single static coroutine `get_me_lists(cls, file, dataset, run, lumi):`
  * It returns a list which contains dicts. Keys of the dicts are (run, lumi) tuples and values are lists of tuples (me_path, me_info). Full structure: [(run, lumi):[(me_path, me_info)]]
* Add your new format to a `FileFormat` enum defined in `python/data_types.py`
* Modify `__pick_importer()` function in `GUIImportManager` to return an instance your importer when new file format is selected.


"""
        Returns a list which contains dicts. Keys of the dicts are (run, lumi) 
        tuples and values are lists of tuples (me_path, me_info). Full structure:
        [(run, lumi):[(me_path, me_info)]]
        me_path is normalized and represented as a binary string.
        We can return multiple (run, lumi) pairs because some file formats might 
        contain multiple runs/lumis in ine file.
        me_path, me_info will be saved as separete blobs in the DB.
        """

### Sample importer:

``` python
from data_types import MEInfo
class MyFormatImporter:
  @classmethod
  async def get_me_lists(cls, filename, dataset, run, lumi):
    # Actual reading of a file removed for brevity
    return {
      (run, lumi): [
        (b'/normalized/path/to/ME1', MEInfo(b'Float', value=float(1.23)), 
        (b'/normalized/path/to/ME2', MEInfo(b'TH1D', offset=123)
    ]}
```

## Adding new file format reader

After adding a new importer, a new reader has to be added as well. The process of adding a new reader is basically the same.

`GUIMEReader` is format agnostic service that will select a correct reader based on file format. The format specific service then opens up a ROOT files, reads an ME based on provided `MEInfo` and return one of these types: `ScalarValue`, `EfficiencyFlag`, `QTest`, `bytes`.

In order to add new reader you have to do three things:

* Add a class into `python/reading/` folder following this naming convention: `<fileformat>_reader.py`.
  * This class has to have a single static coroutine `read(cls, filename, me_info):`
  * It has to return one of the types listed above.
* Modify `__pick_reader()` function in `GUIMEReader` to return an instance your reader when new file format is selected.

### Sample reader:

``` python
from data_types import ScalarValue
class MyFormatReader:
    @classmethod
    async def read(cls, filename, me_info):
      # Actual reading of a file removed for brevity
      return ScalarValue(b'', b's', 'Value of the string ME')
```

## Caching

Caching is done using the `async_alru_cahce` decorator. More info about how to use and bypass the cache using the API [can be found in this section](#Cache-bypass-and-invalidation).

Only functions declared inside `GUIService` class are allowed to use that cache to ensure that results are not cached more than once.

It's estimated that 20MB is the upper bound of the size of cached elements if each (of 8) cached function contained a single element. Therefore, we set the cache capacity to 200 for each function. This means that the upper bound of the entire cache size in such case is about 4GB.

## Rate limiting

The only feature that is rate limited at the moment is an __on demand importing__. If other features need to be rate limited, simply raise `TooManyRequestsException` exception and make sure it bubbles up all the way to the `aiohttp` middleware defined in `app.py`.

## The HTML frontend

The frontend is developed here: https://github.com/cms-DQM/dqmgui_frontend

This package contains compiled code from there, which is served from the web server to get a working GUI.

## API documentation

This is the new version of the DQM GUI API and it is preferred for all services over the legacy API.

Most endpoints of the old API syntax are supported on the best effort basis. This section, however, contains the docuemntation of the new API syntax.

#### Samples endpoint

Returns run/dataset pairs available in the GUI. All arguments are optional. If lumi is not passed, 0 is assumed and only per run plots are returned. Passing -1, returns all per lumi samples and no per run samples.

`http://localhost:8889/api/v1/samples?run=295120&lumi=123&dataset=Run2017A`

```json
{
  "data": [
    {
      "run": 295120,
      "lumi": 123,
      "dataset": "/Cosmics/Run2017A-PromptReco-v1/DQMIO"
    },
    {
      "run": 295120,
      "lumi": 123,
      "dataset": "/StreamExpressCosmics/Run2017A-Express-v1/DQMIO"
    }
  ]
}
```

Supports `notOlderThan` parameter to bypass the cache.

#### ROOT file directory listing endpoint

Run, full dataset and a path has to be provided in the URL.

If `layout` is `null`, ME is not coming from a layout. Otherwise, `layout` contains the name of the layout this ME comes from. 

`lumi` is optional. Passing 0 or not passing it at all returns per result.

`http://localhost:8889/api/v1/archive/316142/StreamExpress/Run2018A-Express-v1/DQMIO/PixelPhase1`
`http://localhost:8889/api/v1/archive/316142:123/StreamExpress/Run2018A-Express-v1/DQMIO/PixelPhase1`

```json
{
  "data": [
    {
      "subdir": "Summary"
    },
    {
      "subdir": "ClusterShape"
    },
    {
      "name": "num_feddigistrend_per_LumiBlock_per_FED",
      "path": "PixelPhase1/num_feddigistrend_per_LumiBlock_per_FED",
      "layout": null
    },
    {
      "name": "deadRocTotal",
      "path": "PixelPhase1/deadRocTotal",
      "layout": null
    },
  ]
}
```

Supports `notOlderThan` parameter to bypass the cache.

#### Layouts endpoint

Returns all layouts with the same name. Used for quick collections.

`http://localhost:8889/api/v1/layouts?name=layout1`

```json
{
  "data": [
    {
      "source": "Hcal/TPTask/EtEmul/TTSubdet/HBHE",
      "destination": "Hcal/Layouts/EtEmul/TP/TTSubdet/HBHE_changed_name"
    }
  ]
}
```

#### Rendering endpoint

Renders a PNG of a histogram.

`http://localhost:8889/api/v1/render/316142:lumi/StreamExpress/Run2018A-Express-v1/DQMIO/PixelPhase1/EventInfo/reportSummaryMap?w=266&h=200&stats=false&norm=false&errors=true`

Supports `notOlderThan` parameter to bypass the cache.

#### Overlay rendering endpoint

Overlays multiple (or one) histograms and renders an overlay to a PNG.

`http://localhost:8889/api/v1/render_overlay?obj=archive/316142/StreamExpress/Run2018A-Express-v1/DQMIO/PixelPhase1/EventInfo/reportSummary&obj=archive/316144/StreamExpress/Run2018A-Express-v1/DQMIO/PixelPhase1/EventInfo/reportSummary&w=266&h=200&stats=false&norm=false&errors=true`

Supports `notOlderThan` parameter to bypass the cache.

Other supported parameters:

| Parameter  | Info  |
|------------|-------|
| w          | Width of the plot: integer |
| h          | Height of the plot: integer |
| stats      | Stat box: `true`/`false` |
| norm       | Normalization: `true`/`false` |
| errors     | Error bars: `true`/`false` |
| drawopts   | ROOT draw options string |
| xtype      | Linear or log scale: `lin`/`log`. Default is `lin` |
| ytype      | Linear or log scale: `lin`/`log`. Default is `lin` |
| ztype      | Linear or log scale: `lin`/`log`. Default is `lin` |
| xmin       | Min x axis value: integer |
| xmax       | Max x axis value: integer |
| ymin       | Min y axis value: integer |
| ymax       | Max y axis value: integer |
| zmin       | Min z axis value: integer |
| zmax       | Max z axis value: integer |
| ref        | Overlay method: `overlay`, `ratiooverlay` or `stacked`. Default is `overlay`. |
| reflabel   | Labels to be used in stat box for overlayed plots. You can provide N-1 number of these parameters where N is the number of overlayed plots. |

#### New file registering endpoint

Registers new samples into the database.

`POST http://localhost:8889/api/v1/register`

HTTP request body:

`[{"dataset": "/a/b/c", "run": "123456", "lumi": "0", "file": "/a/b/c.root", "fileformat": 1}]`

`fileformat` is an integer. Please look at File formats section above for details.

In the DQM Online processing there's no dataset per se, so a placeholder value of `/Global/Online/ALL` is used.

### API endpoints for dealing with per lumisection data:

#### Archive endpoint

Because not all plots are being saved per lumisection (depends on CMSSW configuration) and new per run plots are created in harvesting step, per run and per lumi directory listings of the same dataset will not match. For this reason, archive endpoint supports querying a directory listing of a specific lumisection:

`/api/v1/archive/run:lumi/dataset/me_path`

Lumi 0 indicates per run plots. If lumi is omitted and only run is provided, it's assumed that it's value is 0.

Supports `notOlderThan` parameter to bypass the cache.

#### Samples endpoint

`/api/v1/samples?run=317297&dataset=ZeroBias&lumi=555`

Supports `notOlderThan` parameter to bypass the cache.

#### Render endpoint

`/api/v1/render/run:lumi/dataset/me_path`

Supports `notOlderThan` parameter to bypass the cache.

#### Render overlay endpoint

`/api/v1/render_overlay?obj=archive/run:lumi/dataset/me_path`

Supports `notOlderThan` parameter to bypass the cache.

#### JSRoot render endpoint

`/api/v1/json/run:lumi/dataset/me_path`

Supports `notOlderThan` parameter to bypass the cache.

#### JSRoot overlay render endpoint

`/api/v1/json_overlay?obj=archive/run:lumi/dataset/me_path`

Supports `notOlderThan` parameter to bypass the cache.

#### List of lumisection available in dataset/run combination

`/api/v1/lumis/run/dataset`

### Cache bypass and invalidation

Archive, samples, datasets search, render, json and latest runs API endpoints support `notOlderThan` to bypass the cache. `notOlderThan` is UTC timestamp in seconds and can be provided as a URL argument.
Cached value will be returned only if it was cached after `notOlderThan`. Otherwise, cached value will be invalidated and new value will be fetched.

### Other API endpoints

#### Returns last 100 dataset names matching search keyword

`/api/v1/datasets?search=StreamExpress`

Supports `notOlderThan` parameter to bypass the cache.

#### Returns 100 latest runs

`/api/v1/latest_runs`

Run numbers are returned in a descending order.

`Search` parameter is supported:

`/api/v1/latest_runs?search=123`

When `search` parameter is provided, at most 100 latest runs will be returned where the search term is a substring of a run number.

Supports `notOlderThan` parameter to bypass the cache.

## Getting DQMIO files

First you have to authenticate to access CMS data:

`voms-proxy-init --rfc --voms cms`

Getting a list of files and lumis:

`dasgoclient -query 'file run lumi dataset=/ZeroBias/Run2018C-12Nov2019_UL2018-v2/DQMIO'`

File needs to be on disk. In order to find out on which site the file resides:

`dasgoclient -query 'site file=/store/data/Run2018C/ZeroBias/DQMIO/12Nov2019_UL2018-v2/110000/E9FB467E-F8DF-4544-869F-F98E462FDF97.root'`

Copy desired file to local storage with a XRD redirector:

`xrdcp "root://cms-xrd-global.cern.ch//store/data/Run2018B/ZeroBias/DQMIO/12Nov2019_UL2018-v2/100000/0971E5EA-DA92-C249-96BD-1CE58A95C339.root" .`


# Running the DQM GUI locally

The following instructions can be used to deploy a local version of the DQM GUI in lxplus:

``` bash
git clone https://github.com/cms-DQM/dqmgui
cd dqmgui/
./scripts/build.sh
cd python
python3 -m pip install -r requirements.txt -t .python_packages
# If xrootd installation fails, it can be installed in a user mode:
#python3 -m pip install xrootd --user
cd ../
./scripts/dqmgui.sh -p 8889
```


# Random things

## Scalar types are stored as such:

INTs are saved as strings in this format: <objectName>i=value</objectName>
FLOATs are saved as strings in this format: <objectName>f=value</objectName>
STRINGs are saved as strings in this format: <objectName>s="value"</objectName>


## Desired UI functionality for per lumi data

We want to have two search fields (dataset and run) and a toggle switch. If toggle is off, we search only for per run data. If toggle is on, another text field appears (for lumi search). If that new text field is left empty, we search only for data that's available per lumi and return all lumis. If that text field is filled, we search for only for data that's available per lumi and filter lumis based on the contents of the field.

# Protocol buffers

This is here just for reference - we only use custom PB deserialization code.

``` bash
cd DQMServices/DQMGUI/python/
cp ../../Core/src/ROOTFilePB.proto protobuf/
protoc -I=protobuf --python_out=protobuf protobuf/ROOTFilePB.proto
```

# HLTD online instalation

First, generate two RPM packages. One will have python dependencies and the other will be the HLTD code:

``` bash
git clone https://gitlab.cern.ch/cms-daq/FFF/hltd.git
cd hltd/scripts/
# Before running the following script add this file to scripts
# directory and the parameter values will be taken from it
# Bellow is the contents of the file.
# VERY IMPORTANT: keep in mind that line 7 of paramcache is
# a placeholder password to the Oracle database. When
# building the package it has to be replaced with an actual
# value that can be found here: fu-c2f11-11-01:/opt/fff/db.jsn
# (the password field)
vim paramcache

# Check output to see where .rpm file was generated
./hltdrpm.sh -b
# Check output to see where .rpm file was generated
./libshltdrpm.sh

# scp both files to P5 machine (playback fu03 used in this example) (assuming you start on lxplus):
# Name of the .rpm file might change!
scp -o ProxyCommand="ssh cmsusr.cern.ch nc fu-c2f11-15-03.cms 22" /tmp/hltd-build-tmp/RPMBUILD/RPMS/x86_64/hltd-python36-2.8.0-0.x86_64.rpm fu-c2f11-15-03.cms:/nfshome0/akirilov/
scp -o ProxyCommand="ssh cmsusr.cern.ch nc fu-c2f11-15-03.cms 22" /tmp/hltd-libs-build-tmp-area/RPMBUILD/RPMS/x86_64/hltd-libs-python36-2.8.0-0.x86_64.rpm fu-c2f11-15-03.cms:/nfshome0/akirilov/

# Go to the P5 machine where files were copied to (playback fu03)...
cd /nfshome0/akirilov/

# For now, get the missing dependencies from a local folder (in the future this shouldn't be required):
sudo yum install /nfshome0/akirilov/hltd_missing_deps/python36-defusedxml-0.5.0-2.el7.noarch.rpm
sudo yum install /nfshome0/akirilov/hltd_missing_deps/python36-dateutil-2.4.2-5.el7.noarch.rpm
# sudo yum install /nfshome0/akirilov/hltd_missing_deps/python3-cx_Oracle-7.1-5.el7.cern.x86_64.rpm
# If it's missing, defusedxml can be installed from here:
# http://linuxsoft.cern.ch/epel/7/x86_64/Packages/p/python36-defusedxml-0.5.0-2.el7.noarch.rpm

# You might need to delete the old hltd python3.4 package if it causes errors:
sudo yum remove hltd-python34.x86_64
# To get a list of installed packages:
# yum list installed | grep hltd

# Install RPM packages from file:
sudo yum install hltd-libs-python36-2.8.0-0.x86_64.rpm
sudo yum install hltd-python36-2.8.0-0.x86_64.rpm

# If HLTD is allready installed, there will be a coinflict.
# In such case remove the existing version first:
sudo yum remove hltd-python34-2.5.8-1.x86_64
```

`paramcache`:
```
python3.6
null
es-cdaq.cms
es-local.cms
cms_rcms
CMS_DAQ2_HW_CONF_R
pwd <<CHANGE THIS>>
latest
/opt/offline
daqlocal
4
4
ERROR
ERROR
cmshltdjsonwriter
```

Upgrading HLTD on the machines:

``` bash
# Previously installed packages:
# hltd-libs-python34.x86_64        2.5.2-0                               @centraldaq
# hltd-python34.x86_64             2.5.8-1                               @centraldaq

sudo systemctl stop hltd
sudo yum -y install hltd_missing_deps/python36-defusedxml-0.5.0-2.el7.noarch.rpm
sudo yum -y install hltd_missing_deps/python36-dateutil-2.4.2-5.el7.noarch.rpm
sudo yum -y remove hltd-python34.x86_64
sudo yum -y install hltd-libs-python36-2.8.0-0.x86_64.rpm
sudo yum -y install hltd-python36-2.8.0-0.x86_64.rpm
sudo systemctl start hltd
# Done
```

Downgrading HLTD in case of problems:

``` bash
sudo systemctl stop hltd
sudo yum -y remove hltd-python36.x86_64
sudo yum -y install hltd-python34.x86_64
sudo systemctl start hltd
# Done
```

# Online DQM GUI instalation

DQM GUI code is deployed to the P5 machines by the P5 sysadmins. More details info to come.

If python dependencies of the DQM GUI change, this file must be updated to reflect the changes: https://github.com/cms-sw/cmsdist/blob/IB/CMSSW_11_3_X/master/dqmgui.tmpl#L10


# DQM GUI setup at P5

`gotoplaybackfu03`

Run usual cmssw_deploy with --no-build option. Then go to the release and build manually with -k (keep going) option.

Intall python dependencies from lxplus. A zipped folder is available here: `/nfshome0/akirilov/python_packages.zip`
``` bash
cd DQMServices/DQMGUI/python/
cp /nfshome0/akirilov/python_packages.zip .
unzip python_packages.zip
rm python_packages.zip
```

## Create required directories

``` bash
sudo -u dqmpro -H bash
mkdir -p /data/dqmgui/files/root/
mkdir -p /data/dqmgui/files/pb/
mkdir -p /data/dqmgui/scripts
mkdir -p /data/dqmgui/state
```

# Integration into the Online system

The DQM GUI works on all 4 P5 GUI machines:

* srv-c2f11-29-01.cms Production GUI used by shifters at P5
* srv-c2f11-29-02.cms Production GUI used by all other users accessing it via CMSWEB
* srv-c2f11-29-03.cms Playback GUI used by the DQM playback system
* srv-c2f11-29-04.cms Production test GUI running on production data

All 3 Production machines are being populated by the production system simultaneously.

Production and playback systems are pretty much the same in terms of DQM GUI integration, so everything bellow applies to both systems unless specified otherwise.

## DQM Online processing

This section is not about the GUI integration but it's a summary of the gerenal DQM processing pipeline.

Some terminology:
* BU - builder unit. A machine that's responsible for providing input files and hosting output files.
* FU - filter unit. A machine that's responsible for running DQM online clients.

HLT/DAQ copies reconstructed data files (DQM streams) to this directory in our BU: `/fff/BU0/ramdisk/`. This directory is also mounted and accessible from DQM FUs. HLTD, running on all 4 of our FUs detects the presence of new stream files and starts our online clients. Each client writes the output files containing histograms to its own machine. The problem that we have to solve is collecting all files belonging to the same run from all 4 FUs, merging them and uploading them to the appropriate DQM GUI.

Software that is responsible for managing and merging the files from multiple FU machines is HLTD. It works on all 4 FUs and a BU. In a FU mode it trasfers all ROOT and PB files to a respective BU and on a BU it merges the files and uploads them to the respective GUI machine(s).

Every CMSSW process (i.e an online client) produces a PB (protobuf) snapshot file every lumisection containing a snapshot of all histograms from all previous lumisections. In the end of the run, every client produces a per run ROOT file containing all histograms of that run. 

## HLTD

HLTD is the software that is responsible for DQM output file transfer, concatenation and merger in all FUs, a respective BU and GUI machines. 

The repository is available here (needs permission from DAQ to access): https://gitlab.cern.ch/cms-daq/fff/hltd

The process that is started by the main HLTD program for every run is called `anelastiocDQM.py`. `anelasticDQM.py` is responsible for all new DQM GUI related tasks. Bellow we will discuss the two modes of this process (FU and BU). There might be multiple `anelasticDQM` processes running simultaniously. This happens when, for example, clients of run N-1 are still saving the output files but processing for run N has already been started.

Some troubleshooting/maintainance commands related to HLTD:

Restart:

`sudo systemctl restart hltd`

Log:

`tail -f /var/log/hltd/hltd.log`

Anelastic DQM log:

`tail -f /var/log/hltd/anelastic.log`

Configuration (it gets updates in postinstall of the RPM package):

`vim /etc/hltd.conf`

Editable code:

`/opt/hltd/python/`

Each time HLTD is restared, code from the directory above is coppied here: 

`/opt/hltd/scratch/python/`

This allows to update the RPM or edit code manually while running.

### HLTD (`anelastiocDQM.py`) in DQM FU mode

In DQM FU mode, HLTD is responsible for transferring PB and ROOT files to the respective BU machine. New files are detected using inotofy. When a new file comes in, it's renamed to contain the name of the machine where it was produced and it's copied over to the BU.

Exit procedure of the `anelasticDQM` process is initiated by the main HLTD program when the first client exits with the error code 0. If there are no clients running or all of them crash, `anelasticDQM` will never be killed and we have to handle this situation ourselves. This is done in the `check_if_run_is_over` function by checking if there are any CMSSW clients processing the ongoig run. If not, we exit from the program.

### HLTD (`anelastiocDQM.py`) in DQM BU mode

In DQM BU mode, HLTD is responsible for concatenating the snapshot PB files, merging the per run ROOT files and uploading both of them to the respective DQM GUI machine(s). 

Files to process are found by observing this directory `/fff/output/DQMOutput/runXXXXXX` every 10 seconds. All found PB files are concatenated, the result is copied over to the GUI machine(s) and registered using the registration endpoint.

The run is over when all FUs finished processing it. This situation is identified by looking at the `activeRuns` field of the heartbeat files of every FU. Heartbeat files are located here (in the BU): `/fff/ramdisk/appliance/boxes/`. Whena run ois over, all ROOT files from the same directory (`/fff/output/DQMOutput/runXXXXXX`) are merged by using `hadd` tool that is brought in by the `fasthadd` package and the result is again copied over and registered in the GUI machine(s).

### GUI machine configuration

DQM GUI is managed by systemd. DQM GUI log is located here: `/data/dqmgui/state/logs/dqmgui.log`

#### systemd related configuration

There are two systemd services running: `dqmgui.service` and `dqmgui-cleanup.service`. `dqmgui.service` launches `scripts/dqmbuibackend.sh` while the cleanup service laucnhes `scripts/dqmgui-cleanup.py`. The later process is responsible for two things:

* Cleaning up PB files of old (non current) runs
* Detecting when `current_playback`/`current_production` symlinks change and restarting both services when that happens.
  * The procedure of restarting both services is explained in a section bellow

The scripts that systemd will run, will navigate to appropriate CMSSW release location (`/dqmdata/dqm_cmssw/current_playback/src/` or `/dqmdata/dqm_cmssw/current_production/src/`), do `cmsenv`, find the required script whether it's in a release or checked out, and run it by adding the arguemnts that were passed to itself.

Systemd configuration is located here: 
``` bash
/usr/lib/systemd/system/dqmgui.service
/usr/lib/systemd/system/dqmgui-cleanup.service
```

Services can be restarted like so: 
``` bash
sudo systemctl restart dqmgui 
sudo systemctl restart dqmgui-cleanup
```

Systemd log can be viewd like so: 
``` bash
sudo journalctl -u dqmgui
sudo journalctl -u dqmgui-cleanup
```

#### How is GUI restarted when CMSSW is updated?

`dqmgui.service` uses `Requires` systemd option: `Requires=dqmgui-cleanup.service`. This means that whenever `dqmgui-cleanup.service` is exited, `dqmgui.service` is also exited and starting `dqmgui.service` also starts `dqmgui-cleanup.service`. Both services are configured to restart automatically. `dqmgui-cleanup.service` periodically checks if it's working directory is the same as `current_playback`/`currnet_production`. When it changes, `dqmgui-cleanup.service` just terminates causing `dqmgui.service` to terminate as well. And both services will be restarted by the systemd from an updated CMSSW release. The relationship is not bidirectional! Killing `dqmgui.service` doesn't kill `dqmgui-cleanup.service`!


# TODO

Backend related task list.

* ~~Live mode code~~
* ~~Provide async stream methods to IOService~~
* ~~Protobuf make parser async~~
* ~~Use bitwise operators for parsing variants in protobuf~~
* ~~Add QTests to protobuf output in CMSSW~~
* ~~Live mode integration~~
  * Protobuf pre importing: the performance issue has been solved by using Cython.
* ~~Cache invalidation in samples~~
* ~~Move efficiency flag to MEInfo~~
  * It's not worth it as it adds a couple of seconds to import time
* Clean up Scalar, EfficiencyFlag and QTest to OO hierarchy
* ~~Speed up linear search over sorted layouts~~
* ~~Flavours?~~
  * No need for flavours anymore. Some features are selectively enabled in the frontend.
* ~~Move common ME methods (like DQMCLASSICReader.parse_string_entry) to a separate location~~
* Check RelVal files are handled correctly
* ~~Make sure exceptions are logged to log file (atm the go to stderr)~~
* ~~Handle crashing import processes (prob. can't restart them, so at least crash the full server and wait for restart)~~
  * ~~Whenever an import process crashes we restart ProcessPoolExecutor and return an error~~
  * We instantiate new process pool on demand to keep things simple and more stable
* ~~Check handling of XRD access failures (atm 500 response on the request, retry on next request -- might be good enough.)~~
  * Given that input files are either in EOS or on a disk in P5, we don't need to use XRD anymore. We still use it for partial reads when rendering but this could be changed by using `mmap` directly.
* ~~Make logging async~~
  * ~~Will probably not increase perf by much, needs measuring~~
* ~~Renderer hangs when negative width/height is passed~~
* ~~Validate samples in registration endpoint~~
* ~~Add timeout when interacting with the renderer~~
* ~~When renderer returns an error code, return an image with 500 status code.~~
* ~~Add QTest result support to the API~~
* Hanging/aborted requests don't get logged?
* Add the alternative of /data/browse to view raw ROOT files if Rucio is not there
  * Might still be useful but files are either on EOS or on a disk at P5 so all files are accessible anyways.
* ~~Fix CMSSW warnings/errors~~
  * No longer applicable since the GUI will be shipped outside of CMSSW
* ~~Make sure to zlib uncompress only strings when importing PB files~~
* Fix the deadlock after this:
  * The root cause of this has already been eliminated but the deadlock might still occur on multiple renderer crashes.
```
2021-01-22 18:18:47,949 - INFO - helpers.logged - 47  IOService.read_block('/afs/cern.ch/work/a/akirilov/newGuiInputData/run338761/run338761_DQMLive_concat_fc937cf9d48e908d322b5390de7cb46f.pb', 122) [OK 13.8ms]
2021-01-22 18:18:47,949 - INFO - helpers.logged - 48  IOService.read_block('/afs/cern.ch/work/a/akirilov/newGuiInputData/run338761/run338761_DQMLive_concat_fc937cf9d48e908d322b5390de7cb46f.pb', 3) [OK 8.1ms]
2021-01-22 18:18:47,952 - INFO - helpers.logged - 46  IOService.read_block('/afs/cern.ch/work/a/akirilov/newGuiInputData/run338761/run338761_DQMLive_concat_fc937cf9d48e908d322b5390de7cb46f.pb', 0) [OK 3.4ms]
2021-01-22 18:18:47,986 - INFO - rendering - render: b'/afs/cern.ch/work/a/akirilov/DQMGUI/dqmgui/python/../bin/render: symbol lookup error: /afs/cern.ch/work/a/akirilov/DQMGUI/dqmgui/python/../lib/libDQMRenderPlugins.so: undefined symbol: _ZN7TStringC1ERKSs\n'
2021-01-22 18:18:48,025 - INFO - helpers.logged - 49  GUIService.__get_filename_fileformat_names_infos('/Global/Online/ALL', 0, 0, 1611335910) [OK 64.1ms]
2021-01-22 18:18:48,026 - ERROR - rendering - Looks like the renderer died.
Traceback (most recent call last):
  File "/afs/cern.ch/work/a/akirilov/DQMGUI/dqmgui/python/rendering.py", line 246, in render
    errorcode, length = struct.unpack("=ii", error_and_length)
struct.error: unpack requires a buffer of 8 bytes
```
* ~~Offline GUI importing twice on the first requests.~~
  * This is solved by extracting `__import_blobs` into a separate cached function.

## URLs that produce errors:

This section contains urls that result in errors. These errors should be fixed.

All known issues were fixed by changing the `CFLAGS` in the Makefile.

# Performance stress test

In order to ensure that the new DQM GUI meets its performance requirements, a thorough stress test was performed by firing many concurrent HTTP requests and measuring the time it takes for the new DQM GUI to respond to them.

## Details about the service under test

* Code that was tested is packaged under a `1.0.12` release: https://github.com/cms-DQM/dqmgui/releases/tag/1.0.12
* Latest commit that is in the test: `71394e9670fc5ff1603c25bbbbdd34b910bcd0a1`
* Service that was being tested: https://cmsweb-testbed.cern.ch/dqm/offline-test-new/
* The DQM GUI was configured to use all `~10TB` of data that was available at the DQM EOS location at the time of testing.
  * Having that said, the performance of the DQM GUI **does not** depend on the amount of the data!!! The performance depends on the number of concurrent requests the GUI has to deal with. And the sole purpose of this stress test is to provide an upper bound of that.
* Machine the service under test is running on: `vocms0731`
* Memory available in the machine: `16GB`
* CPU cores available in the machine: `8`

**Important note:** a production machine where the new DQM GUI will eventually be running has `64GB` of memory and `16` CPU cores!!! This can potentially lead to improved performance.

## Details about the test

A custom stress testing tool was used to perform the test: https://github.com/cms-DQM/dqmgui/blob/master/scripts/stress-test.py

It was used in this configuration on the same machine where the GUI under test is running (`vocms0731`):

```bash
# Go to CMSSW and run cmsenv to get the required packages
/data/srv/newDQMGUI/dqmgui/scripts/stress-test.py -i /afs/cern.ch/user/a/akirilov/public/new-dqmgui-stress-test/urls.txt -r 350
```

This script randomly samples 350 requests from a given text file every second and makes 35 concurrent requests to the DQM GUI every 100 milliseconds. A text file that was used for the test `/afs/cern.ch/user/a/akirilov/public/new-dqmgui-stress-test/urls.txt` contains a little over 6 million valid DQM GUI API URLs, spanning 100 dataset/run combinations. All those dataset/run combinations used in the test can be found here: `/afs/cern.ch/user/a/akirilov/public/new-dqmgui-stress-test/samples.txt`.

## What do we compare against?

Log files containing access times of the old DQM GUI are available since the very first version of the predecessor tool. We used those log files to make a histogram that shows the number of requests the old DQM GUI had to serve per minute.

![Old DQM GUI requests per minute](data/etc/old-gui-perf-plot.png)

Y axis of this plot represents the number of requests and the X axis represents minutes, sorted by the number of requests, in a descending order.

The first (left most) data point is a clear outlier and we discard it from our comparison for the following reasons:

* These >30000 requests per minutes were caused by a bug in an old version of HDQM tool that got into an uncontrolled infinite loop
* HDQM has already been replaced in the meantime and the new version gets the ROOT files straight from EOS - the DQM GUI is no longer used by the HDQM at all
* The new DQM GUI doesn't even support the direct file downloads that those >30000 requests were. This feature is redundant given that all files are available in EOS
* ROOT file downloads are I/O and not CPU bound operations while other requests are mostly CPU bound. Including >30000 I/O bound requests into our test would be completely unfair.

### Target request rate

Given the reasoning above, the most amount of load that the DQM GUI has ever had since the beginning of CMS, is ~15000 requests per minute. 15000 requests per minutes equals to 250 requests per second. 

If we can show that the new DQM GUI can withstand that, we can conclude that performance under concurrent load of an entire collaboration is not an issue for the successor.

## The results

The test described above unveiled that the new DQM GUI running on a significantly weaker hardware was not only bale to match but also to surpass the target request rate by about `30%`!!!

The plot below shows the average number of requests successfully served by the new DQM GUI **per second**:

![New DQM GUI requests per second](data/etc/new-gui-perf-plot.png)

As we can see, the average plateaus at about 320 requests per second. The new GUI can stably serve this number of requests and be perfectly usable at the same time.

## Final remarks

The new DQM GUI response times reported above are measured after the on demand importing has already been performed.

On demand importing slows down a little bit (to about 5 seconds per sample) while the new DQM GUI is being bombarded by many parallel requests. This doesn't have a significant hit on the user experience and is subject to improve when running on a production machine with 2 times the amount of CPU cores.

# A plan for the future

Pretty much all features that we wanted to provide with the new DQM GUI are already present and working. The work, however, is not quite complete yet. There are certain integration related aspects that are time consuming and still need some attention. In this section I provide a list of all such features with descriptions and explanations of why they're required.

## The code

### Cython

First and foremost, we most definitely need to Cythonise the only remaining DQMIO TTree based file importer to speed up the process of importing per lumisection data. More information about Cython can be found above, in this document. 

Part of the `nanoroot` framework has already been Cythonised (to speed up DQM Legacy file importing) and this introduced breaking changes to the code that's responsible for DQMIO importing as well. That's why it's very important to address this issue as soon as possible.

A small caveat: all other Cythonised importers read the entire content of the file to memory and proceed with CPU bound importing routine. DQMIO files, however, contain data from multiple lumisections. This makes reading the entire content of the file to memory unnecessary. I would suggest to perform a (hopefully) quick async pre-importing procedure that determines what sections of the file contain the data that's being imported and proceeding to read only those sections. This may or may not actually work - it needs more careful exploration of the `python/nanoroot/ttree.pyx` code and potentially some experimentation. As a last resort, reading the entire file to memory is a bit wasteful but will surely work.

### P5 Sound alarm

The old DQM GUI has a couple of daemons for managing DQM sound alarms in the control room of the CMS experiment:

* https://github.com/cms-DQM/dqmgui_prod/blob/index128/bin/visDQMSoundAlarmDaemon
* https://github.com/cms-DQM/dqmgui_prod/blob/index128/bin/visDQMSoundAlarmManager

The functionality of those daemons could be easily integrated into the core of the new DQM GUI, without having to run them as separate programs. Running at least one separate process for periodic error checking will still probably be unavoidable.

### Layouts

We still need to port the layouts of the old DQM GUI over. This procedure is conceptually straightforward. The layouts of the old DQM GUI can be found here: https://github.com/dmwm/deployment/tree/master/dqmgui/layouts

An example on how to use the layout mechanism in the new DQM GUI can be found here: `python/layouts/summary_layouts.py`

## Deployment

### Online

We have already successfully integrated the new DQM GUI as part of CMSSW into our P5 machines. However, it is very beneficial to decouple the DQM GUI form CMSSW software suite. To make this happen, we have to find a way get the code that is in the master branch of this very repository over to our P5 machines, including the Python dependencies that are listed here: `python/requirements.txt`. 

A close collaboration with P5 system administrators will ensure the smoothness of this integration process!

Most of the current Online setup can be reused - we only need to change the way the code and python dependencies of the new DQM GUI are delivered to our network restricted P5 machines. A detailed description of the current P5 setup can be found [here](#Integration-into-the-Online-system).

### Offline

Just like before, we host the new DQM GUI services in CMSWEB. The deployment procedure is already agreed upon with the CMSWEB administrator. There might be a long term benefit of migrating the services to run on Kubernetes container orchestration system. CMSWEB has support for this infrastructure. True benefits of containerization has to be explored further and validated before any decision to move to that direction is made. The architecture of the new DQM GUI can relatively easily be adapted to work in horizontally scaled workloads.

## Integration

### EOS storage

All Offline DQM ROOT files has to be stored in EOS in order for the new GUIs to be able to access them. We estimate that **all** DQM Legacy per run ROOT files (since the beginning of CMS) add up to about 100TB. The problem is that we currently have only about 20TB of storage available for us in EOS. I'd suggest to approach the problem in these steps:

* Request 200TB of storage in EOS
* Retrieve all old ROOT files from magnetic tape storage and copy them over to the newly allocated EOS space
* Configure the new DQM GUI to automatically search for ROOT files in the new location: https://github.com/cms-DQM/dqmgui/blob/master/python/importing/importing.py#L24

Having 200TB of storage will ensure that we can fit all previously accumulated DQM data as well as all new files from future data taking, for many years to come.

### Online storage

ROOT files generated in the Online DQM processing are stored here: `/data/dqmgui/files/`. We have 1.3T of storage available for this purpose. We will eventually fill this volume so mounting a little bit bigger disks is crucial for us in order to ensure that we never lose any Online archive data.

### Receiving the data

The problem of propagating DQM Online data to the new DQM GUIs has already been solved by using PB (Protobuf) files and a detailed description of this solution is provided in this document.

We still need to make sure that the DQM Offline data coming from `Reco`, `ReReco`, `RelVal`, `MC Validation` and `Github PR tests` can find its way to the new DQM GUIs. The process of registering new files in the new DQM GUI is conceptually straightforward: ROOT files have to be copied over to EOS, and a `register` HTTP endpoint has to be called to notify the GUIs about the presence of these new files. This procedure is also described in detail in this very document. This issue is time consuming because we (the DQM team) mostly do not control the process of uploading Offline DQM files to the GUIs - it's in the hands of the teams that are responsible for the processing itself. The teams that we need to collaborate with on this issue are the following:

* CMS Computing
  * They handle `Reco` and `ReReco` jobs
  * We have already requested the necessary changes to be made: https://github.com/dmwm/WMCore/issues/10287
* PPD MCM team
  * They are responsible for `RelVal` and `MC validation` jobs
* The DQM team
  * We handle the `PR tests` and the way data is uploaded to the GUI ourselves
  * The code that performs the upload (and needs changing) is located here: https://github.com/cms-sw/cmssw/blob/master/DQMServices/FileIO/scripts/compareDQMOutput.py#L86-L99

#### Temporary solution

While we wait for Computing and MCM to change their tools to support the new file registration procedure, we could add a new daemon here: https://github.com/cms-DQM/dqmgui_prod/tree/index128/bin that will periodically check for newly uploaded ROOT files to the old DQM GUIs and forward them to the new DQM GUIs. This process has to be resilient to ensure stability and prevent file loss because ROOT files are deleted from the old DQM GUI after a while.

## Selecting the CMSSW version to build against

### Online

The build process in the Online is done by us. This means that we have to check what is the current CMSSW version used (`/dqmdata/dqm_cmssw/current_production` or `/dqmdata/dqm_cmssw/current_playback`). Once we know the current version, we can put its name `CMSSW_VERSION` and `SCRAM_ARCH` to this file: https://github.com/cms-DQM/dqmgui/blob/master/scripts/cmssw_info and rebuild. A PR is not needed - we can change to content of the file directly in the P5 machine!

This check needs to be running in a cron job (every 10 seconds?) to ensure that the DQM GUI is always built against the current CMSSW release. A smooth transition to a freshly built DQM GUI also needs to be ensured to avoid any downtime.

### Offline

We can't change the content of files in the CMSWEB managed Offline machines ourselves, so we need to make a PR to change the `CMSSW_VERSION` and `SCRAM_ARCH` in this file: https://github.com/cms-DQM/dqmgui/blob/master/scripts/cmssw_info and ask CMSWEB administrator to redeploy the DQM GUIs. This item is here just for reference - no more effort is needed to get this to work.
