const webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',

    entry: [
        './src/main.ts'
    ],

    output: {
        filename: 'app.js',
        path: path.resolve('dist')
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: ['src', 'node_modules'],
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('src') },
            { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"], include: path.resolve('src') },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: 'src/index.html'
            }
        ),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
            path.resolve(__dirname, './src')
        )


    ]
}