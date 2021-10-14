const { withExpoAdapter } = require('@expo/electron-adapter');

module.exports = withExpoAdapter({
    projectRoot: __dirname,
    whiteListedModules: ["react-hook-form"]
});