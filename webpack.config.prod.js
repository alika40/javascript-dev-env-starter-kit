import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin"

export default {
  mode: "production",
  devtool: "source-map",
  entry: {
    main: path.resolve(__dirname, "src/index"),
    vendor: path.resolve(__dirname, "src/vendor"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].[chunkhash].js", // Creates dynamic file name
  },
  plugins: [
    // Generates an external css file with hash in the middle
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css", // Creates dynamic file name
    }),
    // Creates HTML file that includes reference to bundle.js
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      // The properties you define here are available in the index.html file
      // using htmlWebpackPlugin.option.varName
      trackJSToken: "584a63d8f006492394920e1bd6830aa5"
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
    ],
  },
};
