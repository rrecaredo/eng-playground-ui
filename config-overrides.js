const { createTransformer } = require('typescript-plugin-styled-components');
const path = require('path');

const tsLoaderMatcher = rule => loaderNameMatches(rule, 'ts-loader');
const getTsLoader = rules => getLoader(rules, tsLoaderMatcher);

const loaderNameMatches = function (rule, loader_name) {
    return rule && rule.loader && typeof rule.loader === 'string' &&
        (rule.loader.indexOf(`${path.sep}${loader_name}${path.sep}`) !== -1 ||
            rule.loader.indexOf(`@${loader_name}${path.sep}`) !== -1);
};

const getLoader = function (rules, matcher) {
    let loader = null;

    rules.some(rule => {
        return (loader = matcher(rule)
            ? rule
            : getLoader(rule.use || rule.oneOf || (Array.isArray(rule.loader) && rule.loader) || [], matcher));
    });

    return loader;
};

const rewireStyledComponentsTypescriptPlugin = (config, _env, options) => {

    config.resolve = {
        ...config.resolve,
        alias: {
            'src': path.resolve(__dirname, 'src'),
        },
    };

    const tsLoader = getTsLoader(config.module.rules);

    if (!tsLoader) {
        console.error(
            'Skipping styled components typescript plugin: ts-loader not found.'
        );

        return config;
    }

    const styledComponentsTransformer = createTransformer(options);

    tsLoader.options.getCustomTransformers = () => ({
        before: [styledComponentsTransformer],
    });

    return config;
};

module.exports = rewireStyledComponentsTypescriptPlugin;
