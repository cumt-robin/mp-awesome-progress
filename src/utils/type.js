/*
 * @Author:
 * @Date: 2020-12-31 10:43:20
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-24 20:48:30
 * @Description:
 */
/**
 * 判断变量的数据类型
 * @param {any} val 变量值
 * @returns {string} 数据类型
 */
export function getType(val) {
    return Object.prototype.toString
        .call(val)
        .replace(/\[object\s(\w+)\]/, "$1")
        .toLowerCase();
}
/**
 * 判断对象obj中是否存在key属性
 * @param {Object} obj
 * @param {*} key
 */
export function isOwnProperty(obj = {}, key = "") {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
/**
 * 判断变量是否有具体定义，即非null,非undefined,非空字符串
 * @param {any} val 变量值
 * @returns {boolean} 变量是否有具体定义
 */
export function isDefined(val) {
    const type = getType(val);
    return type !== "null" && type !== "undefined" && val !== "";
}

export function isObject(val) {
    return getType(val) === "object";
}

export function isArray(val) {
    return getType(val) === "array";
}

export function isNumber(val) {
    return getType(val) === "number";
}

export function isString(val) {
    return getType(val) === "string";
}

export function isBool(val) {
    return getType(val) === "boolean";
}

export function isUndefined(val) {
    return getType(val) === "undefined";
}

export function isNull(val) {
    return getType(val) === "null";
}

export function isBasicType(val) {
    return isNumber(val) || isString(val) || isBool(val) || isUndefined(val) || isNull(val);
}
