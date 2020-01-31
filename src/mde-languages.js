var hljsDefineOCL = require('./ocl')
var hljsDefineATL = require('./atl')
var hljsDefineXcore = require('./xcore')

hljs.registerLanguage('ocl', hljsDefineOCL);
hljs.registerLanguage('atl', hljsDefineATL);
hljs.registerLanguage('xcore', hljsDefineXcore);