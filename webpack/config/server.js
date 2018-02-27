const paths = require('./paths');

module.exports = {
    contentBase: `${paths._fragments.public}/`,
    watchContentBase: true,
    historyApiFallback: true,
    open: true,
    overlay: true,
    disableHostCheck: true,
};
