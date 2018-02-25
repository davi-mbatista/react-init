/**
 * maninfest.json configuration for progressive web app setup. It uses the WebpackPwaManifest that
 * is a HtmlWebpackPlugin enhancement
 */

const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const config = require('../config');

const configuration = {
    name: 'React App',
    short_name: 'React App',
    description: 'This is a React App',
    background_color: '#f5f5f5',
    theme_color: '#616161',
    start_url: '/',
    orientation: 'portrait',
    display: 'standalone',
    inject: true,
    fingerprints: true,
    icons: [
        {
            src: path.resolve(`${config.PATHS.ASSETS}/icons/icon.png`),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'manifest'),
        },
    ],
};

module.exports = new WebpackPwaManifest(configuration);
