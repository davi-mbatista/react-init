const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const config = require('../config');

const configuration = {
    globDirectory: config.PATHS.BUILD,
    globPatterns: ['**/*.{html,js,css,png}'],
    swDest: `${config.PATHS.BUILD}/${config.NAME.serviceWorker}.js`,
};

module.exports = new WorkboxWebpackPlugin(configuration);
