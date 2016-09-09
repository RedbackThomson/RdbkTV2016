var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './public/src/index'
  ],
  output: {
    path: path.join(__dirname, 'public/static/'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'public/src')
    }, {
      test: /\.sass$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.css$/,
      loaders: ["style", "css"]
    }, {
      test: /\.coffee$/, 
      loader: "coffee-loader"
    }, {
      test: /\.json$/,
      loader: "json"
    }]
  }
};
