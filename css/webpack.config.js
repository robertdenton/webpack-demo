var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js"
  },
  devServer:{
  	contentBase: path.join(__dirname, "dist/"),
  	compress: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //loader: "style-loader!css-loader"
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: "CSS",
      filename: "index.html",
      template: "./src/index.html"
    }),
    new ExtractTextPlugin("bundle.css", {allChunks: true})
  ]
}
