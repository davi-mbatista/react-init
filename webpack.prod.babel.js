import path from 'path';
import merge from 'webpack-merge';
import webpack from 'webpack';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import common from './webpack.common.babel.js';
import WorkboxPlugin from 'workbox-webpack-plugin';

/**
 * maninfest.json configuration for progressive web app setup. It uses the WebpackPwaManifest that
 * is a HtmlWebpackPlugin enhancement
 */
const manifestConfig = {
    name: 'React App',
    short_name: 'React App',
    description: 'This is a React App',
    background_color: '#000',
    "theme_color": "#000",
    start_url: "/",
    orientation: "portrait",
    display: "standalone",
    inject: true,
    fingerprints: true,
    icons: [
        {
            src: path.resolve('public/assets/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'android')
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


module.exports = merge(common, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new WebpackPwaManifest(manifestConfig),
        new webpack.optimize.UglifyJsPlugin(uglifyConfig),
        new WorkboxPlugin({
            globDirectory: './build/',
            globPatterns: ['**/*.{html,js,css}'],
            swDest: './build/service-worker.js'
        })
    ]
});
