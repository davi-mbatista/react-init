const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config');

const configuration = {
    inject: true,
    template: config.paths.html,
};

module.exports = new HtmlWebpackPlugin(configuration);
