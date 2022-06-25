const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  
  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false,
        },
      },
    ],
  },
  
  optimization: {},
  
  plugins: [new HtmlWebpackPlugin({
    title: 'Mi WebPack App,',
    // filename: 'index.html',
    template:'src/index.html',  // Toma como plantilla nuestro html dentro de src
  })],
}