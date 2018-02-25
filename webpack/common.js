const config = require('./config');

const HtmlWebpackPlugin = require('./plugins/HtmlWebpack');

module.exports = {
    context: config.PATHS.SRC,
    entry: {
        app: './index.js',
    },
    output: {
        path: config.PATHS.BUILD,
        publicPath: '/',
        filename: '[name].bundle.js',
    },
    module: {
        rules: config.rules,
    },
    resolve: {
        alias: {
            components: 'components',
        },
    },
    plugins: [HtmlWebpackPlugin],
};
