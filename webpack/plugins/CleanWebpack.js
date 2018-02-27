const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = require('../config');

const clean = [config.paths._fragments.build];
const options = {
    root: config.paths.root,
};

module.exports = new CleanWebpackPlugin(clean, options);
