import path from 'path';
import merge from 'webpack-merge';
import webpack from 'webpack';
import common from './webpack.common.babel.js';

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