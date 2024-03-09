const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client.js",
  output: {
    filename: "[name].js",
    clean: true,
  },
  mode: "development",
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
    historyApiFallback: true,
    hot: true,
    open: true,
    proxy: [
      {
        context: ["^/api"],
        target: "http://localhost:8081/api/",
        secure: false,
      },
    ],
  },
};
