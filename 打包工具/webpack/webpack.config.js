const path = require('path'); //path内置的模块，用来设置路径。

module.exports = {
    entry: './src/js/entry.js',   // 入口文件
    output: {                     // 输出配置
        filename: 'bundle.js',      // 输出文件名
        publicPath: 'js/',
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
    }
};