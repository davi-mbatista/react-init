const { GenerateSW } = require('workbox-webpack-plugin');

const config = require('../config');

const configuration = {
    clientsClaim: true,
    skipWaiting: true,
    swDest: `${config.filenames.serviceWorker}.js`,
};

module.exports = new GenerateSW(configuration);
