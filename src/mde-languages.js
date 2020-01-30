module.exports = function(hljs) {
    hljs.registerLanguage('atl', require('./atl'));
    hljs.registerLanguage('ocl', require('./ocl'));
    hljs.registerLanguage('xcore', require('./xcore'));
};
