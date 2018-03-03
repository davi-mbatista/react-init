const merge = require('webpack-merge');

const common = require('./common.js');
const config = require('./config');
const HotModuleReplacement = require('./plugins/HotModuleReplacement');

module.exports = merge(common, {
    mode: 'development',
    devServer: config.server,
    plugins: [HotModuleReplacement],
});
