import path from 'path';
import merge from 'webpack-merge';
import webpack from 'webpack';
import common from './webpack.common.babel.js';

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        open: true,
        overlay: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});