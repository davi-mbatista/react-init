import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import common from './webpack.common.babel.js';
import WorkboxPlugin from 'workbox-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

/**
 * Evirioment change plugin configuration
 */
const envChangeConfig = {
    'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }
};

/**
 * maninfest.json configuration for progressive web app setup. It uses the WebpackPwaManifest that
 * is a HtmlWebpackPlugin enhancement
 */
const manifestConfig = {
    name: 'React App',
    short_name: 'React App',
    description: 'This is a React App',
    background_color: '#000',
    theme_color: "#000",
    start_url: "/",
    orientation: "portrait",
    display: "standalone",
    inject: true,
    fingerprints: true,
    icons: [
        {
            src: path.resolve('public/assets/icons/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'manifest')
        },
    ]
};

/**
 * uglify configuration for smaller bundle sizes
 */
const uglifyConfig = {
    compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
    },
    output: {
        comments: false
    }
};

/**
 *Items to add in copy configurations
 */
const toCopyAddConfig = [
    {
        context: 'public/assets',
        from: 'icons/*.*',
        to: './assets'
    }
];

/**
 * Items to ignore in copy configurations
 */
const toCopyIgnoreConfig = {
    ignore: ['*.sketch']
};

/**
 * Workbox configurations
 */
const workboxConfig = {
    globDirectory: './build/',
    globPatterns: ['**/*.{html,js,css,png}'],
    swDest: './build/service-worker.js'
};

module.exports = merge(common, {
    plugins: [
        new webpack.DefinePlugin(envChangeConfig),
        new WebpackPwaManifest(manifestConfig),
        new webpack.optimize.UglifyJsPlugin(uglifyConfig),
        new CopyWebpackPlugin(toCopyAddConfig, toCopyIgnoreConfig),
        new WorkboxPlugin(workboxConfig),
    ]
});
