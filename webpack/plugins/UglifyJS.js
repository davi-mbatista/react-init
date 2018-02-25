const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const configuration = {
    uglifyOptions: {
        ie8: false,
        ecma: 8,
        output: {
            comments: false,
            beautify: false,
        },
        warnings: false,
    },
};

module.exports = new UglifyJsPlugin(configuration);
