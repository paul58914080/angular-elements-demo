const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/angular-elements-demo/runtime.js',
    './dist/angular-elements-demo/polyfills.js',
    './dist/angular-elements-demo/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/angular-elements-demo.js');
})();
