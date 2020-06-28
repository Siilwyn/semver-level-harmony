# semver-level-harmony
[![Travis Build Status][travis-icon]][travis]
[![LGTM Grade][lgtm-icon]][lgtm]
[![npm][npm-icon]][npm]

Compare if two semver version range levels are the same. The world is complex, sometimes dependencies rely on others to have the same version level. For example [Spectron](https://github.com/electron/spectron) expects [Electron](https://github.com/electron/electron) to have the same minor version. Testing if these two modules have the same minor version makes this implicit relation explicit, getting them in harmony.

The module is smart enough to notice a range is too wide to compare on certain levels. For example comparing the minor level on `^1.2.3` is impossible since the installed version can go up to `1.9.9`.

This module is small and simple with the downside being it only supports semver ranges with three defined numbers. This is a range you get by default when installing a module with the npm CLI.

## Usage
`npm install semver-level-harmony --save-dev`

Example testing Spectron and Electron minor version:
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

[travis]: https://travis-ci.com/Siilwyn/semver-level-harmony
[travis-icon]: https://img.shields.io/travis/com/Siilwyn/semver-level-harmony/master.svg?style=flat-square
[lgtm]: https://lgtm.com/projects/g/Siilwyn/semver-level-harmony/
[lgtm-icon]: https://img.shields.io/lgtm/grade/javascript/g/Siilwyn/semver-level-harmony.svg?style=flat-square
[npm]: https://www.npmjs.com/package/semver-level-harmony
[npm-icon]: https://img.shields.io/npm/v/semver-level-harmony.svg?style=flat-square
