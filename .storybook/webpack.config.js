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
    ],
    resolve: {
      alias: {
        'react': path.join(__dirname, 'node_modules', 'react')
      },
      extensions: ['', '.js']
    },
  }
}