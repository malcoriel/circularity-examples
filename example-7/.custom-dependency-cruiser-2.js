const baseConfig = require("../.dependency-cruiser.js");
baseConfig.options.tsPreCompilationDeps = "specify";
baseConfig.forbidden = baseConfig.forbidden.filter(r => r.name !== 'no-circular');
baseConfig.forbidden.push({
    name: 'no-circular-soft',
    severity: 'error',
    comment:
        'This dependency is part of a circular relationship. You might want to revise ' +
        'your solution (i.e. use dependency inversion, make sure the modules have a single responsibility) ',
    from: {},
    to: {
        circular: true,
        preCompilationOnly: false
    }
});
baseConfig.forbidden.push({
    name: 'no-circular-hard',
    severity: 'error',
    comment:
        'This dependency is part of a circular relationship. You might want to revise ' +
        'your solution (i.e. use dependency inversion, make sure the modules have a single responsibility) ',
    from: {},
    to: {
        circular: true,
        path: 'example-7/trueCycleSource.ts',
    }
})
module.exports = baseConfig;
