const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = require('../config');

const clean = [config.PATHS._FRAGMENTS.BUILD];
const options = {
    root: path.resolve(config.PATHS.ROOT),
};

module.exports = new CleanWebpackPlugin(clean, options);
