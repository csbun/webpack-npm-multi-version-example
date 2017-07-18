const version = '1.2.0';
const pkgA = require('webpack-npm-multi-version-pkg-a');
const pkgB = require('webpack-npm-multi-version-pkg-b');

module.exports = function() {
  console.log('pkg-c: ' + version);
  pkgA();
  pkgB();
  console.log('==================');
}
