const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
    mode: "development",
    devtool: "source-map", // 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
    // 牺牲了构建速度的 `source-map' 是最详细的。  
    devServer: {
        compress: true, // enable gzip compression
        // historyApiFallback: true,
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: true, // only errors & warns on hot reload
        open: true,
        openPage: "assets/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});