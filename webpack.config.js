var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache : true,
  context: path.resolve(__dirname, "js/"),
  devtool: debug ? "inline-eval-cheap-source-map" : "cheap-module-source-map",
  entry:  "./react/client.jsx",

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "js/react/"),
        loader: 'babel-loader',

        // ignore babelrc, which is used for some package.json scripts.
        query: {
          presets: ['react', 'es2015'], //, 'stage-0'
          plugins: ['react-html-attrs', 'transform-class-properties','transform-decorators-legacy'], 
        }
      }
    ]
  },
  output: {
    path: __dirname + "/js/compiled/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
