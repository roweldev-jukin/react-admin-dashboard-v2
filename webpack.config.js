const webpack = require('webpack');
const path = require('path');

const port = 3000;

module.exports = {
  mode: 'development',
  entry: [
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/dev-server',
    './src/index'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/public'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],   
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src'),
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      }, {
        test: /node_modules.*\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },{
        test: /.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpeg|jpg|gif)$/,
        use: 'url-loader?limit=100000'
      }
    ]
  }
};