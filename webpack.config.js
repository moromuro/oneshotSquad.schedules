const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, 'src', 'index.js'),
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },
    allowedHosts: [
      'localhost'
    ],
    port: 3000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};