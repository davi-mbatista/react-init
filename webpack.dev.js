'use strict';

const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const FlowWebpackPlugin = require('flow-webpack-plugin');

const common = require('./webpack.common.js');

const devServerConfig = {
    compress: true,
    contentBase: path.resolve(__dirname, '/public'),
    watchContentBase: true,
    historyApiFallback: {
        disableDotRule: true
    },
    open: true,
    overlay: true,
    hot: true
};

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: devServerConfig,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new FlowWebpackPlugin({
            flowPath: require.main.require('flow-bin')
        })
    ]
});
