const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CleanWebpackPlugin([path.resolve(__dirname, 'build')]),
        new HtmlWebpackPlugin({
            template: require('html-webpack-template'),
            inject: false,
            title: 'React App',
            favicon: path.resolve(__dirname, 'public/favicon.ico'),
            hash: true,
            appMountId: 'root',
            links: [
                {
                    href: path.resolve(__dirname, 'public/favicon-32x32.png'),
                    rel: 'icon',
                    sizes: '32x32',
                    type: 'image/png'
                },
                {
                    href: path.resolve(__dirname, 'public/favicon-16x16.png'),
                    rel: 'icon',
                    sizes: '16x16',
                    type: 'image/png'
                }
            ],
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes'
                },
                {
                    name: 'description',
                    content: 'A React App.'
                },
                {
                    name: 'theme-color',
                    content: '#000'
                },
                {
                    name: 'mobile-web-app-capable',
                    content: 'yes'
                },
                {
                    name: 'application-name',
                    content: 'React App'
                },
                {
                    name: 'apple-mobile-web-app-capable',
                    content: 'yes'
                },
                {
                    name: 'apple-mobile-web-app-status-bar-style',
                    content: 'black-translucent'
                },
                {
                    name: 'apple-mobile-web-app-title',
                    content: 'React App'
                },
                {
                    name: 'msapplication-TileColor',
                    content: '#000'
                },
                {
                    name: 'msapplication-TileImage',
                    content: ''
                },
                {
                    name: 'msapplication-tap-highlight',
                    content: 'yes'
                }
            ],
        })
    ]
};
