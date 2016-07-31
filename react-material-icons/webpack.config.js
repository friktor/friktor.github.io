// Version with warning inner html shapes icon
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/main.js',
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
    }, {
      test: /\.less$/,
      loader: "style!css!less"
    }]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
