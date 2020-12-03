# cypress-fetch-support

Cypress v6 から `experimentalNetworkStubbing` オプションをわざわざ設定せずに、fetch を監視できるようになった

## Environment

```
$ sw_vers
ProductName:    Mac OS X
ProductVersion: 10.15.7
BuildVersion:   19H2

$ node --version
v14.7.0

$ yarn --version
1.22.10

$ yarn list --depth=0
cypress@6.0.1
...
```

## Usage

```
$ yarn json-server
$ yarn start
$ yarn cy:open or yarn cy:run
```
