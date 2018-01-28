const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

const devServerConfig = {
    historyApiFallback: true,
    open: true,
    overlay: true,
    hot: true
};

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: devServerConfig,
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});