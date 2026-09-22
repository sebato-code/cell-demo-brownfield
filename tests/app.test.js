const assert = require('assert');
const app = require('../src/app');

assert.strictEqual(typeof app, 'function', 'Express app should be exported');
console.log('✅ Unit test passed!');
