var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var ROOT = process.cwd();
var ENTRY = ROOT + '/src/server.js';

module.exports = {
  entry: ENTRY,
  output: {
    path: path.resolve(ROOT, 'dist'),
    filename: 'server.bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __filename: false,
    __dirname: false
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.WatchIgnorePlugin([path.resolve(ROOT, 'dist')])
  ]
};
