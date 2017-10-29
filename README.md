Me messing around with webpack.

## New plan

Create separate modules getting individual elements of webpack working, then combine to starter kit. Need these elements:

* getting started
* bundle-js
* dev-server
* html-template
* css
* less

Each element is built off the last and was created by reading documentation and going off of their examples. I don't know if everything is best practice or not. I came across a few examples that were outdated and had to debug from error messages.

## Getting started

```
git clone https://github.com/robertdenton/webpack-demo.git
cd {module}
npm install
npm run serve || npm run build
```

## Original notes

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
    * "Note that webpack will not alter any code other than import and export statements. If you are using other [ES2015 features](http://es6-features.org/), make sure to use a [transpiler](https://webpack.js.org/loaders/#transpiling) such as Babel or Bublé via webpack's [loader system](https://webpack.js.org/concepts/loaders/)."
* Webpack - [Asset management](https://webpack.js.org/guides/asset-management/)
* [Beginners guide to webpack 2](https://medium.com/a-beginners-guide-for-webpack-2)
  * Helpful but has bugs in it, read through most for context
* If you edit webpack.config.js you have to re-run `npm run serve`
* [Inline SVG](https://github.com/thegc/html-webpack-inline-svg-plugin) plugin looks helpful
* [SASS loader](https://github.com/webpack-contrib/sass-loader)


































