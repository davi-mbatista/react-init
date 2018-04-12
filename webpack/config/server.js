const paths = require('./paths');
var ip = require('ip');

module.exports = {
    contentBase: `${paths._fragments.public}/`,
    watchContentBase: true,
    historyApiFallback: true,
    clientLogLevel: 'none',
    open: true,
    overlay: true,
};
