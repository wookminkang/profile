const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    indexEntry: "./src/script.js",
  },
  output: {
    filename: "[name].bundle.js", // 파일명
    path: path.resolve(__dirname, "dist"),
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       // use: ["style-loader", "css-loader"],
  //       use: [MiniCssExtractPlugin.loader, "css-loader"],
  //     },
  //   ],
  // },
  // // plugins: [
  // //   new HtmlWebpackPlugin({
  // //     template: "./index.html",
  // //   }),
  // //   new MiniCssExtractPlugin({
  // //     filename: "common.css",
  // //   }),
  // // ],
};
