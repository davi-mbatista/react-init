const merge = require('webpack-merge');

const common = require('./common.js');
const config = require('./config');
const plugins = require('./plugins');

module.exports = merge(common, {
    mode: 'development',
    devServer: config.server,
    plugins: [
        plugins.DefineEnvironment(config.environment.development),
        plugins.HotModuleReplacement,
    ],
});
