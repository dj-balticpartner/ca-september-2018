var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')

var extractPlugin = new ExtractTextPlugin({
    filename: 'style.css'
});

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              use: {
                loader: "babel-loader",
                options: { presets: ["es2015"] }
              }
            },
            {
              test: /\.scss$/,
              use: [
                {
                  loader: "style-loader" // creates style nodes from JS strings
                },
                {
                  loader: "css-loader" // translates CSS into CommonJS
                },
                {
                  loader: "sass-loader" // compiles Sass to CSS
                }
              ]
            }
          ]

    }
}