const webpack = require('webpack');

module.exports = configuration => {
    return new webpack.DefinePlugin({ 'process.env': { configuration } });
};
