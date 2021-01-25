/*
 * @Author: 蒋文斌
 * @Date: 2021-01-24 20:44:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-24 21:29:56
 * @Description: 自动生成
 */
const path = require("path")
const merge = require('webpack-merge')
const TerserPlugin = require("terser-webpack-plugin");
const baseWebpackConfig = require('./webpack.base.conf')

function resolvePath(dir) {
    return path.join(__dirname, "..", dir)
}

const buildConfig = merge(baseWebpackConfig, {
    mode: 'production',
    entry: {
        'mp-awesome-progress': './dist/index.js'
    },
    output: {
        path: resolvePath('dist'),
        publicPath: '/',
        filename: 'index.min.js'
    },
    devtool: false,
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    }
})

module.exports = buildConfig