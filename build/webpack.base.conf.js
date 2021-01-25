/*
 * @Author: 蒋文斌
 * @Date: 2021-01-24 20:44:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-24 20:52:10
 * @Description: 自动生成
 */
const path = require("path")

function resolvePath(dir) {
    return path.join(__dirname, "..", dir)
}

module.exports = {
    context: resolvePath(''),
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        alias: {
            '@': resolvePath('src')
        },
        extensions: ['.js', '.json']
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                loader: "babel-loader",
                include: [
                    resolvePath("src")
                ]
            }
        ]
    }
}