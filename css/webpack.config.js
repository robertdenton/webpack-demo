var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/entry.js",
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js"
  },
  devServer:{
  	contentBase: path.join(__dirname, "dist/"),
  	compress: true,
  	open: true
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: "CSS",
      filename: "index.html",
      template: "./src/index.html"
    })
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
}
