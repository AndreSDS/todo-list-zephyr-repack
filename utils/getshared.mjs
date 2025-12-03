import pkg from '../package.json' with { type: 'json' };

export const getSharedDependencies = (opts = {}) => {
    const { eager = true } = opts;
    const shared = Object.entries(pkg.dependencies)
        .map(([dep, version]) => {
            return [dep, { singleton: true, eager, requiredVersion: version }];
        });
    return Object.fromEntries(shared);
};