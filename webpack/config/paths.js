const path = require('path');

const _FRAGMENTS = {
    ASSETS: 'assets',
    BUILD: 'build',
    PUBLIC: 'public',
    SRC: 'src',
};

const _DEEP = '../../';

const ASSETS = path.resolve(__dirname, `${_DEEP}${_FRAGMENTS.PUBLIC}/${_FRAGMENTS.ASSETS}`);
const BUILD = path.resolve(__dirname, `${_DEEP}${_FRAGMENTS.BUILD}`);
const PUBLIC = path.resolve(__dirname, `${_DEEP}${_FRAGMENTS.PUBLIC}`);
const ROOT = path.resolve(__dirname, _DEEP);
const SRC = path.resolve(__dirname, `${_DEEP}${_FRAGMENTS.SRC}`);

module.exports = {
    _FRAGMENTS,
    ASSETS,
    BUILD,
    PUBLIC,
    ROOT,
    SRC,
};
