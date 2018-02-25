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
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    resolve: {
        alias: {
            components: 'components',
        },
    },
    plugins: [HtmlWebpackPlugin],
};
