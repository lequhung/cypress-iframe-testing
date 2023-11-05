const path = require('path');

module.exports = {
  mode: 'production',
  devServer: {
    port: 3030,
  },
  entry: {
    index: path.resolve('iframe.js')
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    library: "iframe",
    libraryTarget: 'umd',
    umdNamedDefine: true,
    clean: true
  },
  resolve: {
    extensions: ['.js']
  }
};
