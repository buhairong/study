const path = require('path'); //path内置的模块，用来设置路径。
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html文件的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除之前打包的文件

module.exports = {
    entry: './src/js/entry.js',   // 入口文件
    output: {                     // 输出配置
        filename: 'bundle.js',      // 输出文件名
        publicPath: 'dist/js/',
        path: path.resolve(__dirname, 'dist/js')   //输出文件路径配置
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: 'dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new CleanWebpackPlugin(['dist']),
    ]
};