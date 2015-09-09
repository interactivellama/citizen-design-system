var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  devtool: 'eval',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("bundle.css", {
        allChunks: true
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'ui': '/src/ui'
    }
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
      },
      {
        test: /\.(woff|woff2|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },

};
