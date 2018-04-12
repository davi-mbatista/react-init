const path = require('path');
const fs = require('fs');

const resolveApp = relativePath => path.resolve(fs.realpathSync(process.cwd()), relativePath);

const _fragments = {
    assets: 'assets',
    build: 'build',
    public: 'public',
    source: 'src',
    production: 'production',
};

module.exports = {
    _fragments,
    build: resolveApp(`${_fragments.build}`),
    production: resolveApp(`${_fragments.build}/${_fragments.production}`),
    public: resolveApp(`${_fragments.public}`),
    html: resolveApp(`${_fragments.public}/index.html`),
    assets: resolveApp(`${_fragments.public}/${_fragments.assets}/`),
    src: resolveApp(`${_fragments.source}`),
    root: resolveApp(''),
    index: resolveApp(`src/index.js`),
    package: resolveApp('package.json'),
    nodeModules: resolveApp('node_modules'),
};
