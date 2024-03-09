const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    clean: true,
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional settings, this will reference .babelrc
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    compress: true,
    port: 8080,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:8081",
        secure: false,
      },
    ],
  },
};
