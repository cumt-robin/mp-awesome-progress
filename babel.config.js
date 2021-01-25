/*
 * @Author: 蒋文斌
 * @Date: 2021-01-24 20:44:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-24 20:54:15
 * @Description: 自动生成
 */
const buildConfig = {
    presets: [
        [
            "@babel/preset-env",
            {
                loose: false,
                modules: false,
                useBuiltIns: false
            }
        ]
    ],
    plugins: [
        "@babel/plugin-transform-runtime"
    ]
}

module.exports = buildConfig