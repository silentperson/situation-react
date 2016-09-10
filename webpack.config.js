var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'js/compiled');
var APP_DIR = path.resolve(__dirname, 'js/react');

var config = {
  entry: APP_DIR + '/situationapp.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
	  loaders : [{
	  		test: /\.jsx?/,
	  		include : APP_DIR,
	  		loader: 'babel',
	  }]
  }
};

module.exports = config;