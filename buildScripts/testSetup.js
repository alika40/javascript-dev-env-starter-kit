// This file is't transpile, so must use CommonJS and ES6

// Register bable to transpile before our tests run
require('@babel/register')();

// Disabele webpack features that mocha don't understant.
require.extensions['.css'] = function() {};
