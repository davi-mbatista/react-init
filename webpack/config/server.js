const paths = require('./paths');

module.exports = {
    contentBase: `${paths._fragments.public}/`,
    disableHostCheck: true,
    watchContentBase: true,
    historyApiFallback: true,
    clientLogLevel: 'none',
    quiet: true,
    open: true,
    overlay: true,
};
