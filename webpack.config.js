var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './public/src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
      'color': path.join(__dirname, 'node_modules', 'color')
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
    }]
  }
};
