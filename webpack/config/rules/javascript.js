module.exports = [
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
];
