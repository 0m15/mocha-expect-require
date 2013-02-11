// main.js
// ---------

// the require js configurator
// for a complete guide, please check http://requirejs.org/docs/api.html#config
require.config({
  baseUrl: '/',
  paths: {
    // jquery: '/path/to/jquery/if/needed',
    runner: '/test/runner',
    specs: '/test/specs',
  }
})

// this is the main function that will call the mocha test runner
define(function(require) {

  // run tests
  var runner = require('runner')

})