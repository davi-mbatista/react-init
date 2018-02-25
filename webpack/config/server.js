const paths = require('./paths');

module.exports = {
    port: 9000,
    contentBase: `${paths._FRAGMENTS.PUBLIC}`,
    watchContentBase: true,
    historyApiFallback: true,
    open: true,
    overlay: true,
};
