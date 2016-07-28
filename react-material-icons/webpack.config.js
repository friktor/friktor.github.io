var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'build.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      test: /\.js$/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },

  plugins: [
  ]
};
