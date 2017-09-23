import path from 'path';
import merge from 'webpack-merge';
import common from './webpack.common.babel.js';

const HOST = process.env.HOST || '0.0.0.0';

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        open: true,
        overlay: true,
        host: HOST
    },
});
