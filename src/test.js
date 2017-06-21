const assert = require('assert');
const semverHarmony = require('./main.js');

const semverHarmonyCreator = level => (a, b) => semverHarmony(level, a, b);

const harmoneyMajor = semverHarmonyCreator('major');
const harmoneyMinor = semverHarmonyCreator('minor');
const harmoneyPatch = semverHarmonyCreator('patch');

assert.equal(harmoneyMajor('1.0.0', '1.0.0'), true, 'matching ranges');

assert.equal(harmoneyMinor('^1.0.0', '^1.0.0'), false, 'wide range both sides');
assert.equal(harmoneyMinor('^1.0.0', '~1.0.0'), false, 'wide range left side');
assert.equal(harmoneyMinor('~1.0.0', '^1.0.0'), false, 'wide range right side');
assert.equal(harmoneyMinor('~1.0.0', '~1.0.0'), true, 'matching ranges');

assert.equal(harmoneyPatch('~1.0.0', '~1.0.0'), false, 'wide range both sides');
assert.equal(harmoneyPatch('~1.0.0', '1.0.0'), false, 'wide range left side');
assert.equal(harmoneyPatch('1.0.0', '~1.0.0'), false, 'wide range right side');
assert.equal(harmoneyPatch('1.0.0', '1.0.0'), true, 'matching versions');

assert.throws(semverHarmony, /invalid level/i, 'missing level parameter');
assert.throws(
  () => semverHarmony('x'),
  /invalid level/i,
  'invalid level parameter'
);

assert.throws(harmoneyMajor, /invalid version/i, 'missing version parameters');
assert.throws(
  () => harmoneyMajor('x', '1'),
  /invalid version/i,
  'invalid version parameters'
);
