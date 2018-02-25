const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../config');

const configuration = {
    inject: true,
    template: `${config.PATHS.PUBLIC}/index.html`,
};

module.exports = new HtmlWebpackPlugin(configuration);
