const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  title: 'REACT TEST',
  inject: 'body',
});
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(s*)css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'url-loader', exclude: /node_modules/ },
    ],
  },
  devServer: {
    port: 9090,
    historyApiFallback: true,
  },
  plugins: [
    HtmlWebpackPluginConfig,
  ],
};

