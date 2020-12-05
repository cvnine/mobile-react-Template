const { override, fixBabelImports, overrideDevServer, addPostcssPlugins } = require('customize-cra');

const addProxy = () => (configFunction) => {
    configFunction.proxy = {
        '/api/': {
            target: 'https://interface.test.com/',
            changeOrigin: true,
            // pathRewrite: { '^/v2ex': '/' },
        },
    };

    return configFunction;
}

module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd-mobile',
            style: 'css'
        }),
        addPostcssPlugins([require("postcss-pxtorem")({
            rootValue: 16,
            propList: ['*']
        })]),
    ),
    devServer: overrideDevServer(
        addProxy()
    )
}