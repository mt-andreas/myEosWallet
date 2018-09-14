# myEosWallet

## Dependencies
This would not have been possible without the work of these two libraries

- [EOSJS](https://github.com/EOSIO/eosjs)
- [RN-NODEIFY](https://github.com/tradle/rn-nodeify)

## New react-native project
In order to install this repository as a base for a new react-native app client do the following:

First, install the project.

```
react-native init app
cd app
npm install
react-native eject
sh hack_to_browser.sh
react-native link
```

You need to do a little tweak now in the library `isomorphic-fetch` file `fetch-npm-browserify.js`

```
vi ./node_modules/isomorphic-fetch/fetch-npm-browserify.js

```
Add a line before the `module.exports` line.

```
var self = this;
```

Now you can try running the project, make sure the good HTTP address is set to your local RPC API Node in `EOS_example.js`.

```
react-native run-ios //or - react-native run-android
```

## Existing react-native project
The following steps describe how to integrate eosjs in an existing react-native project.

Your project needs to be created from `react-native init` and not the `create-react-native-app` cli. It has to be independent from `Expo` and configurable with Xcode and Android Studio. Browserifying doesn't work with react-native Expo projects.

First, install [rn-nodeify](https://github.com/tradle/rn-nodeify)

```
npm install rn-nodeify
```
Then Install eosjs

```
npm i --save eosjs
```
Then make sure `require('crypto')` is present in the file shim.js at the root of the project

You need to do a little tweak now in the library `isomorphic-fetch` file `fetch-npm-browserify.js`

```
vi ./node_modules/isomorphic-fetch/fetch-npm-browserify.js

```
Add a line before the `module.exports` line.

```
var self = this;
```


You then need to activate the browserifying using the rn-nodeify script. It is written in a sh script in the repo.

```
sh hack_to_browser.sh
```
Then

```
react-native link
```

Now you can try running the project, make sure the good HTTP address is set to your local RPC API Node in `EOS_example.js`.

```
react-native run-ios //or - react-native run-android
```
