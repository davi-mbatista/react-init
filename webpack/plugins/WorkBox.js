const { GenerateSW } = require('workbox-webpack-plugin');

const config = require('../config');

const configuration = {
    clientsClaim: true,
    skipWaiting: true,
    swDest: `${config.paths.build}/${process.env.NODE_ENV}/${config.filenames.serviceWorker}.js`,
};

module.exports = new GenerateSW(configuration);
