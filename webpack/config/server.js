const paths = require('./paths');
var ip = require('ip');

const host = ip.address() || '0.0.0.0';

module.exports = {
    contentBase: `${paths._fragments.public}/`,
    disableHostCheck: true,
    watchContentBase: true,
    historyApiFallback: true,
    clientLogLevel: 'none',
    quiet: true,
    host: host,
    open: true,
    overlay: true,
};
