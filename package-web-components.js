const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/sample-communication-subject/runtime-es2015.js',
    './dist/sample-communication-subject/main-es5.js',
    './dist/sample-communication-subject/polyfills-es2015.js'
    ];

  await fs.ensureDir('elements');

  await concat(files, 'elements/web-component.js');
})();
