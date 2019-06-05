const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src'),
      }, {
        test: /.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpeg|jpg)$/,
        use: 'url-loader?limit=100000'
      }
    ]
  }
};