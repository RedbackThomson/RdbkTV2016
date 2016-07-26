const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: ["style", "css", "sass"]
      }, {
        test: /\.css$/,
        loaders: ["style", "css"]
      }
    ]
  }
}