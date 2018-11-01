const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "style.css",
  chunkFilename: "id.css"
});

const env = process.env.NODE_ENV;
const apiHost = env === 'production' ? 'https://emmaadesile-ridemyway.herokuapp.com' : 'http://localhost:3000'
module.exports = {
  entry: {
    filename: "./src/index.js"
  },
  output: {
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              module: true,
              importLoaders: 1,
              localIdentName: "[local]___[hash:base64:5]",
              sourceMap: true,
              minimize: true
            }
          },
          {
            loader: "sass-loader"
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.(jpe?g|svg|png|ico)$/i,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    htmlPlugin,
    miniCssExtractPlugin, 
    new webpack.DefinePlugin({
      __API__: apiHost
    })
  ]
};
