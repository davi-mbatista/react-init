const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const configuration = {
    TITLE_PREFIX: process.env.NODE_ENV,
};

module.exports = new InterpolateHtmlPlugin(configuration);
