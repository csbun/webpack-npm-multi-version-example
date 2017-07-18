const pkgA = require('webpack-npm-multi-version-pkg-a');
const pkgB = require('webpack-npm-multi-version-pkg-b');
const pkgC = require('webpack-npm-multi-version-pkg-c');

console.log('example; require a@^1.0.0 b@^2.0.0 c@^2.0.0');
pkgA();
pkgB();
console.log('==================');
pkgC();
