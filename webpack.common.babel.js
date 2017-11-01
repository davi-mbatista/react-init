import path from 'path';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

/**
 * HtmlWebpackPlugin configurations
 */
const HtmlWebpackConfig = {
    inject: true,
    template: path.resolve(__dirname, 'public/index.html')
};

/**
 * CleanWebpack configurations
 */
const CleanWebpackConfig = [
    path.resolve(__dirname, 'build')
];

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['eslint-loader', 'babel-loader']
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
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/')
        }
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new CleanWebpackPlugin(CleanWebpackConfig),
        new HtmlWebpackPlugin(HtmlWebpackConfig)
    ]
};
