# cypress-fetch-support

Cypress v6 からデフォルトで fetch を監視できるようになった。`experimentalFetchPolyfill` オプションは非推奨になった。`intercept()`を使えばOK。

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
...

$ yarn start
...

$ yarn cy:run
...

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  sample_spec.js                           368ms        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        368ms        1        1        -        -        -  

```
