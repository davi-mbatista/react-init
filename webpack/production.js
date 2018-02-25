const merge = require('webpack-merge');

const common = require('./common.js');
const WorkBoxPlugin = require('./plugins/WorkBox');
const UglifyJSPlugin = require('./plugins/UglifyJS');
const PwaManifestPlugin = require('./plugins/PwaManifest');
const CleanWebpackPlugin = require('./plugins/CleanWebpack');
const CopyWebpackPlugin = require('./plugins/CopyWebpack');

module.exports = merge(common, {
    plugins: [
        CleanWebpackPlugin,
        UglifyJSPlugin,
        PwaManifestPlugin,
        CopyWebpackPlugin,
        WorkBoxPlugin,
    ],
});
