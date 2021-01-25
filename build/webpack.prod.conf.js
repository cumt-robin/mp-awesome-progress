/*
 * @Author: 蒋文斌
 * @Date: 2021-01-24 20:44:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-24 21:20:50
 * @Description: 自动生成
 */
const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

function resolvePath(dir) {
    return path.join(__dirname, "..", dir)
}

const buildConfig = merge(baseWebpackConfig, {
    mode: 'production',
    entry: {
        'mp-awesome-progress': './src/index.js'
    },
    output: {
        path: resolvePath('dist'),
        publicPath: '/',
        filename: 'index.js',
        library: 'MpAwesomeProgress',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: false,
    plugins: [
        new CleanWebpackPlugin()
    ],
    optimization: {
        minimize: false
    }
})

if (process.env.report) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    buildConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = buildConfig