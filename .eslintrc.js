/*
 * @Author: 蒋文斌
 * @Date: 2021-01-24 20:44:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-24 20:53:26
 * @Description: 自动生成
 */
// .eslintrc.js
module.exports = {
    parserOptions: {
        "parser": "babel-eslint",
        "ecmaVersion": 6,
        "sourceType": "module",
    },
    plugins: [],
    extends: [],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js'
            }
        }
    }
}