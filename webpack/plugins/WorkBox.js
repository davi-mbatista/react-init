const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const config = require('../config');

const configuration = {
    globDirectory: config.paths.build,
    globPatterns: ['**/*.{html,js,css,png}'],
    swDest: `${config.paths.build}/${config.filenames.serviceWorker}.js`,
};

module.exports = new WorkboxWebpackPlugin(configuration);
