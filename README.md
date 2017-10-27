Me messing around with webpack.

## Notes

* Originally read [this](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70), which explains the state of JS in 2017
* Then moved to webpack 
    * [Core concepts](https://webpack.js.org/concepts/)
        * Entry - Way to kick off app
        * Output - Place to put bundle
        * Loaders (module/rules) - Figure out modules and transform them for bundle
        * Plugins - Do special stuff
        * Example webpack.config.js:
        ```js
        const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
        const webpack = require('webpack'); //to access built-in plugins
        const path = require('path');

        const config = {
        entry: './path/to/my/entry/file.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'my-first-webpack.bundle.js'
        },
        module: {
            rules: [
            { test: /\.txt$/, use: 'raw-loader' }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new HtmlWebpackPlugin({template: './src/index.html'})
        ]
        };

        module.exports = config;
        ```
* Read this: [Gulp vs. Webpack](https://buddy.works/blog/webpack-vs-gulp)
    * Defines Gulp as task runner and Webpage as bundler
    * They can accomplish the same goal in different ways
    * "Some people fell in love with Webpack, claiming they don't need Gulp anymore. Some people praised the simplicity of Gulp and complained Webpack is overengineered."
* Webpack - [Getting started](https://webpack.js.org/guides/getting-started/)
    * `npm init -y` uses all defaults and automatically pulls in git info and first line of README for description
    