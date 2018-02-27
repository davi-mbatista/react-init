const path = require('path');
const fs = require('fs');

const resolveApp = relativePath => path.resolve(fs.realpathSync(process.cwd()), relativePath);

const _fragments = {
    assets: 'assets',
    build: 'build',
    public: 'public',
    source: 'src',
};

module.exports = {
    _fragments,
    environment: resolveApp('.env'),
    build: resolveApp(`${_fragments.build}`),
    public: resolveApp(`${_fragments.public}`),
    html: resolveApp(`${_fragments.public}/index.html`),
    assets: resolveApp(`${_fragments.public}/${_fragments.assets}/`),
    src: resolveApp(`${_fragments.source}`),
    root: resolveApp(''),
    index: resolveApp(`src/index.js`),
    package: resolveApp('package.json'),
    nodeModules: resolveApp('node_modules'),
};
