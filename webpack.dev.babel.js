import path from 'path';
import merge from 'webpack-merge';
import common from './webpack.common.babel.js';

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'build')
    },
});
