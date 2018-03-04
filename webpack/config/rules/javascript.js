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
                    emitWarning: true,
                },
            },
        ],
        exclude: paths.nodeModules,
        include: paths.src,
    },
    {
        test: /\.(js|jsx)$/,
        exclude: paths.nodeModules,
        include: paths.src,
        loader: 'babel-loader',
        options: {
            // This is a feature of `babel-loader` for webpack (not Babel itself).
            // It enables caching results in ./node_modules/.cache/babel-loader/
            // directory for faster rebuilds.
            cacheDirectory: true,
        },
    },
];
