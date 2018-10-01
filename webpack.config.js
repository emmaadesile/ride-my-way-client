const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "style.css",
  chunkFilename: "id.css"
});

module.exports = {
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
              localIdentName: "[name]_[local]_[hash:base64]",
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
  plugins: [htmlPlugin, miniCssExtractPlugin]
};
