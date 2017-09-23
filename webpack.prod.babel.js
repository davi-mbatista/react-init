import path from 'path';
import merge from 'webpack-merge';
import webpack from 'webpack';
import BabelMinifyPlugin from 'babel-minify-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import common from './webpack.common.babel.js';


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
    start_url: "/?homescreen=1",
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
        new webpack.optimize.UglifyJsPlugin(uglifyConfig)
    ]
});
