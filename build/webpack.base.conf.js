const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: "production", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: "../src/main.js", // string | object | array  // 默认为 ./src
    // 这里应用程序开始执行
    // webpack 开始打包
    output: {
        // webpack 如何输出结果的相关选项
        path: path.resolve(__dirname, "../dist"), // string
        // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
        filename: "bundle.js", // string    // 「入口分块(entry chunk)」的文件名模板
        publicPath: "/assets/", // string    // 输出解析文件的目录，url 相对于 HTML 页面
    },
    module: {
        // 关于模块配置
        rules: [
            // 模块规则（配置 loader、解析器等选项）
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
        // 使用的扩展名
    },
    context: __dirname, // string（绝对路径！）
    // webpack 的主目录
    // entry 和 module.rules.loader 选项
    // 相对于此目录解析
    target: "web", // 枚举  // bundle 应该运行的环境
    // 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)
    stats: "errors-only",  // 精确控制要显示的 bundle 信息
    plugins: [
        new CleanWebpackPlugin(["dist"], { root: path.resolve(__dirname, "../") }),
        new HtmlWebpackPlugin({
            template: '../index.html'
        })
    ],
};