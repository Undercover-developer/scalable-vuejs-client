const requireModules = require.context('.', false, /\.store\.js$/)
const modules = {};

requireModules.keys().forEach(filename => {
    const moduleName = filename
    .replace(/(\.\/|\.store\.js)/g, '')
    // .replace(/^\w/, c => c.toUpperCase())
    modules[moduleName] = requireModules(filename).default || requireModules(filename)
});

export default modules