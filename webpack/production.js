const merge = require('webpack-merge');

const common = require('./common.js');
const config = require('./config');
const plugins = require('./plugins');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: config.paths.production,
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    plugins: [
        plugins.DefineEnvironment(config.environment.production),
        plugins.CleanWebpackPlugin,
        plugins.UglifyJSPlugin,
        plugins.PwaManifestPlugin,
        plugins.CopyWebpackPlugin,
        plugins.WorkBoxPlugin,
    ],
});
