const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const common = require('./webpack.common.js');

/**
 * Evirioment change plugin configuration
 */
const envChangeConfig = {
    'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
};

/**
 * maninfest.json configuration for progressive web app setup. It uses the WebpackPwaManifest that
 * is a HtmlWebpackPlugin enhancement
 */
const manifestConfig = {
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
            src: path.resolve('public/assets/icons/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'manifest'),
        },
    ],
};

/**
 * uglify configuration for smaller bundle sizes
 */
const uglifyConfig = {
    uglifyOptions: {
        ie8: false,
        ecma: 8,
        output: {
            comments: false,
            beautify: false,
        },
        warnings: false,
    },
};

/**
 *Items to add in copy configurations
 */
const toCopyAddConfig = [
    {
        context: 'public/assets',
        from: 'icons/*.*',
        to: './assets',
    },
];

/**
 * Items to ignore in copy configurations
 */
const toCopyIgnoreConfig = {
    ignore: ['*.sketch'],
};

/**
 * CleanWebpack configurations
 */
const cleanWebpackConfig = [path.resolve(__dirname, 'build')];

/**
 * Workbox configurations
 */
const workboxConfig = {
    globDirectory: './build/',
    globPatterns: ['**/*.{html,js,css,png}'],
    swDest: './build/service-worker.js',
};

module.exports = merge(common, {
    plugins: [
        new CleanWebpackPlugin(cleanWebpackConfig),
        new UglifyJsPlugin(uglifyConfig),
        new webpack.DefinePlugin(envChangeConfig),
        new WebpackPwaManifest(manifestConfig),
        new CopyWebpackPlugin(toCopyAddConfig, toCopyIgnoreConfig),
        new WorkboxPlugin(workboxConfig),
    ],
});
