const path = require('path');
const paths = require('../paths');

module.exports = [
    {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        use: [
            {
                loader: require.resolve('eslint-loader'),
                options: {
                    eslintPath: require.resolve('eslint'),
                    quiet: true,
                },
            },
        ],
        exclude: path.resolve(`${paths.ROOT}/node_modules/`),
        include: paths.SRC,
    },
    {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(`${paths.ROOT}/node_modules/`),
        include: paths.SRC,
        loader: 'babel-loader',
        options: {
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
        },
    },
];
