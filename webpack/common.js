const config = require('./config');

const plugins = require('./plugins');

module.exports = {
    context: config.paths.src,
    entry: {
        app: './index.js',
    },
    output: {
        path: config.paths.build,
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
    plugins: [plugins.HtmlWebpack],
};
