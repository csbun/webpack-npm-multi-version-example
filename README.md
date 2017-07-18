# webpack-npm-multi-version-example
test webpack with multi version npm packages

dependencies in this example:

```
example
  ├── webpack-npm-multi-version-pkg-a@^1.0.0
  ├── webpack-npm-multi-version-pkg-b@^2.0.0
  └─┬ webpack-npm-multi-version-pkg-c@^2.0.0
    ├── webpack-npm-multi-version-pkg-a@^2.1.0
    └── webpack-npm-multi-version-pkg-b@^2.1.0
```

npm@3 install as:

```
node_modules
  ├── webpack-npm-multi-version-pkg-a@1.2.0
  ├── webpack-npm-multi-version-pkg-b@2.1.0
  └─┬ webpack-npm-multi-version-pkg-c@2.1.2
    └── webpack-npm-multi-version-pkg-a@2.1.0
```

test result:

```js
const pkgA = require('webpack-npm-multi-version-pkg-a');
const pkgB = require('webpack-npm-multi-version-pkg-b');
const pkgC = require('webpack-npm-multi-version-pkg-c');

console.log('example; require a@^1.0.0 b@^2.0.0 c@^2.0.0');
pkgA(); // a@1.2.0
pkgB(); // b@2.1.0
console.log('==================');
pkgC(); // c@2.2.2 with a@2.1.0 and b@2.1.0
```
