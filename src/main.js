'use strict';

const semver = require('semver');

module.exports = function(level, dependencyA, dependencyB) {
  dependencyA = dependencyA || '';
  dependencyB = dependencyB || '';

  if (!~['major', 'minor', 'patch'].indexOf(level)) {
    throw new TypeError(`Invalid level: ${level}`);
  }

  if (
    !hasStaticLevel(dependencyA, level) ||
    !hasStaticLevel(dependencyB, level)
  ) {
    return false;
  }

  return versionLevelsEqual(dependencyA, dependencyB, level);
};

function versionLevelsEqual(versionA, versionB, level) {
  return [versionA, versionB]
    .map(removeRangeTokens)
    .map(semver[level])
    .reduce((first, second) => first === second);
}

function removeRangeTokens(range) {
  return range.replace(/^\^|^\~|^\=/, '');
}

function hasStaticLevel(range, level) {
  return !semver.satisfies(incrementRange(range, level), range);
}

function incrementRange(range, level) {
  return semver.inc(removeRangeTokens(range), level);
}
