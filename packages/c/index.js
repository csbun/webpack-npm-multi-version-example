const version = '2.2.0';
const pkgA = require('webpack-npm-multi-version-pkg-a');
const pkgB = require('webpack-npm-multi-version-pkg-b');

module.exports = function() {
  console.log('pkg-c: ' + version + '; require a@^2.1.0 b@^2.1.0');
  pkgA();
  pkgB();
  console.log('==================');
}
