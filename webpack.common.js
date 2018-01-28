'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * HtmlWebpackPlugin configurations
 */
const HtmlWebpackConfig = {
    inject: true,
    template: path.resolve(__dirname, 'public/index.html')
};

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/')
        }
    },
    plugins: [
        new HtmlWebpackPlugin(HtmlWebpackConfig)
    ]
};
