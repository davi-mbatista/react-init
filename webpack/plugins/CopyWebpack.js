const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = require('../config');

const copy = [
    {
        context: config.paths.assets,
        from: 'icons/*.*',
        to: './assets',
    },
];
const ignore = {
    ignore: ['*.sketch'],
};

module.exports = new CopyWebpackPlugin(copy, ignore);
