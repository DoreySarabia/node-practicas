const util = require('util');

const helloPlaneta = util.deprecate(() => {
    console.log('hello planeta')
}, 'Planeta no ha respondido');

helloPlaneta();