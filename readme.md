# semver-level-harmony

[![Greenkeeper badge](https://badges.greenkeeper.io/Siilwyn/semver-level-harmony.svg)](https://greenkeeper.io/)
[![Travis Build Status][travis-icon]][travis]

Compare if two semver version range levels are the same. The world is complex, sometimes dependencies rely on others to have the same version level. For example [Spectron](https://github.com/electron/spectron) expects [Electron](https://github.com/electron/electron) to have the same minor version. Testing if these two modules have the same minor version makes this implicit relation explicit, getting them in harmony.

The module is smart enough to notice a range is too wide to compare on certain levels. For example comparing the minor level on `^1.2.3` is impossible since the installed version can go up to `1.9.9`.

This module is small and simple with the downside being it only supports semver ranges with three defined numbers. This is a range you get when installing a module with npm.

## Usage
`npm install semver-level-harmony --save-dev`

```js
const assert = require('assert');
const semverLevelHarmony = require('semver-level-harmony');
const { electron, spectron } = require('./package.json').devDependencies;

assert.ok(
  semverLevelHarmony('minor', electron, spectron),
  'electron and spectron version minor levels are the same'
);
```

## API
### semverLevelHarmony(level, versionRange, versionRange)

#### level
Type: `string`  
Version semver level: `major`, `minor` or `patch`.

#### versionRange
Type: `string`  
The version semver range.

[travis]: https://travis-ci.org/Siilwyn/semver-level-harmony
[travis-icon]: https://img.shields.io/travis/Siilwyn/semver-level-harmony/master.svg?style=flat-square
