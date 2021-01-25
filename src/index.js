/*
 * @Author: 蒋文斌
 * @Date: 2021-01-24 20:45:25
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-24 21:23:47
 * @Description: 自动生成
 */

/*
 * @Author: 蒋文斌
 * @Date: 2021-01-22 18:21:34
 * @LastEditors: Do not edit
 * @LastEditTime: 2021-01-24 20:36:58
 * @Description: 自动生成
 */

import BezierEasing from "bezier-easing";
import { merge } from "./utils/helper";
import { isArray } from "./utils/type";

const defaultOptions = {
    canvasId: "myCanvas",
    cssSize: {
        width: 100,
        height: 100,
    },
    startDeg: 270,
    percentage: 0,
    easing: "0.42,0,1,1",
    duration: 0.6,
    circleWidth: 6,
    circleColor: "#e5e5e5",
    lineWidth: 6,
    useGradient: false,
    lineColor: "#11B669",
    lineColorStops: [
        { percent: 0, color: "#13CDE3" },
        { percent: 1, color: "#11B669" },
    ],
    showText: true,
    textNodes: [],
    pointRadius: 0,
    pointColor: "#11B669",
    animated: true,
    onReady: null, // 可以绘制时，触发的回调
};

export default class MpAwesomeProgress {
    constructor(options) {
        this._options = merge(defaultOptions, options);
        const { startDeg, percentage, easing } = this._options;
        if (startDeg < 0 || startDeg >= 360) {
            throw new Error("startDeg的范围必须是[0, 360)");
        }
        if (percentage < 0 || percentage > 360) {
            throw new Error("percentage的范围必须是[0, 100]");
        }
        if (!/^(\-?\d+(\.\d+)?,){3}\-?\d+(\.\d+)?$/.test(easing)) {
            throw new Error("easing格式不正确，示例格式0.42,0,1,1，具体请参考http://");
        }
        this.init();
    }

    init() {
        const { easing, duration } = this._options;
        const easingParams = easing.split(",").map((item) => Number(item));
        this.easingFunc = BezierEasing(...easingParams);

        this.steps = duration * 60;

        this.initCanvas();
    }

    initCanvas() {
        const { cssSize, pointRadius, lineWidth, canvasId, useGradient, lineColorStops, onReady } = this._options;
        const query = wx.createSelectorQuery();
        query
            .select(`#${canvasId}`)
            .fields({ node: true, size: true })
            .exec((res) => {
                const { width, height, node } = res[0];
                const { width: cssWidth, height: cssHeight } = cssSize;
                this.widthRatio = width / cssWidth;
                this.heightRatio = height / cssHeight;
                this.canvasInstance = node;
                this.ctx = this.canvasInstance.getContext("2d");
                this.dpr = wx.getSystemInfoSync().pixelRatio;
                this.canvasInstance.width = width * this.dpr;
                this.canvasInstance.height = height * this.dpr;
                this.ctx.scale(this.dpr, this.dpr);

                // 计算outerRadius
                this.outerRadius = width / 2;
                // 计算circleRadius
                this.circleRadius = pointRadius > 0 ? this.outerRadius - pointRadius : this.outerRadius - lineWidth / 2;
                // 设置渐变色
                if (useGradient) {
                    this.gradient = this.ctx.createLinearGradient(this.circleRadius, 0, this.circleRadius, this.circleRadius * 2);
                    lineColorStops.forEach((item) => {
                        this.gradient.addColorStop(item.percent, item.color);
                    });
                }

                if (typeof onReady == "function") {
                    onReady();
                }
            });
    }

    draw() {
        const { percentage, animated } = this._options;
        if (percentage === 0) {
            this.animateDrawArc(0, 0, 0, 0);
        } else {
            if (animated) {
                // 用动画来画动态内容
                this.animateDrawArc(0, percentage, 1, this.steps);
            } else {
                this.animateDrawArc(0, percentage, this.steps, this.steps);
            }
        }
    }

    setTextNodes(value) {
        if (isArray(value)) {
            this._options.textNodes = value;
        } else {
            this._options.textNodes = [];
        }
    }

    setPercentage({ value, duration = 0.3 }) {
        const oldVal = this._options.percentage;
        if (value >= 0 && value <= 100) {
            this.canvasInstance.cancelAnimationFrame(this.animationId);
            this._options.percentage = value;
            this.animateDrawArc(oldVal, value, 1, duration * 60);
        } else {
            throw new Error("进度百分比的范围必须在1~100内");
        }
    }

    // 利用raf控制动画绘制
    animateDrawArc(beginPercent, endPercent, stepNo, stepTotal) {
        const {
            lineWidth,
            useGradient,
            showText,
            textNodes,
            startDeg,
            lineColor,
            circleColor,
            circleWidth,
            pointRadius,
            pointColor,
        } = this._options;
        this.ctx.clearRect(0, 0, this.canvasInstance.width, this.canvasInstance.height);
        const nextPercent = beginPercent + (endPercent - beginPercent) * this.easingFunc(stepNo / stepTotal);
        const nextDeg = this.getTargetDegByPercentage(nextPercent);
        const startArc = this.deg2Arc(startDeg);
        const nextArc = this.deg2Arc(nextDeg);
        // 画圆环
        this.ctx.strokeStyle = circleColor;
        this.ctx.lineWidth = circleWidth;
        this.ctx.beginPath();
        this.ctx.arc(this.outerRadius, this.outerRadius, this.circleRadius, 0, this.deg2Arc(360));
        this.ctx.stroke();
        // 画文字
        if (showText) {
            // 支持绘制多组文字
            textNodes.forEach(
                ({
                    type = "default",
                    color,
                    font, // 可以直接提供font，但是在不同尺寸手机下可能有问题
                    fontStyle = "normal",
                    fontWeight = "normal",
                    fontSize = 16,
                    lineHeight = 1.5,
                    fontFamily = 'Arial,"Microsoft YaHei"',
                    textContent = "",
                    textAlign = "center",
                    textBaseline = "middle",
                    format,
                    left,
                    top,
                }) => {
                    const realFontSize = fontSize * this.widthRatio + "px";
                    const realLeft = left * this.widthRatio;
                    const realTop = top * this.widthRatio;
                    this.ctx.font = font || `${fontWeight} ${fontStyle} ${realFontSize}/${lineHeight} ${fontFamily}`;
                    this.ctx.fillStyle = color;
                    this.ctx.textAlign = textAlign;
                    this.ctx.textBaseline = textBaseline;
                    let text;
                    if (typeof format === "function") {
                        text = format(nextPercent);
                    } else if (type === "progress") {
                        text = Math.round(nextPercent) + "%";
                    } else if (type === "default") {
                        text = textContent;
                    }
                    this.ctx.fillText(text, realLeft || this.canvasInstance._width / 2, realTop || this.canvasInstance._height / 2);
                }
            );
        }
        // 画进度弧线
        if (stepTotal > 0) {
            this.ctx.strokeStyle = useGradient ? this.gradient : lineColor;
            this.ctx.lineWidth = lineWidth;
            this.ctx.lineCap = "round";
            this.ctx.beginPath();
            this.ctx.arc(this.outerRadius, this.outerRadius, this.circleRadius, startArc, nextArc);
            this.ctx.stroke();
        }
        // 画点
        if (pointRadius > 0) {
            this.ctx.fillStyle = pointColor;
            const pointPosition = this.getPositionsByDeg(nextDeg);
            this.ctx.beginPath();
            this.ctx.arc(pointPosition.x + pointRadius, pointPosition.y + pointRadius, pointRadius, 0, this.deg2Arc(360));
            this.ctx.fill();
        }
        if (stepNo !== stepTotal) {
            stepNo++;
            this.animationId = this.canvasInstance.requestAnimationFrame(
                this.animateDrawArc.bind(this, beginPercent, endPercent, stepNo, stepTotal)
            );
        } else {
            this.canvasInstance.cancelAnimationFrame(this.animationId);
        }
    }
    // 根据开始角度和进度百分比求取目标角度
    getTargetDegByPercentage(percentage) {
        const { startDeg } = this._options;
        if (percentage === 100) {
            return startDeg + 360;
        } else {
            const targetDeg = (startDeg + (360 * percentage) / 100) % 360;
            return targetDeg;
        }
    }
    // 根据角度获取点的位置
    getPositionsByDeg(deg) {
        let x = 0;
        let y = 0;
        if (deg >= 0 && deg <= 90) {
            // 0~90度
            x = this.circleRadius * (1 + Math.cos(this.deg2Arc(deg)));
            y = this.circleRadius * (1 + Math.sin(this.deg2Arc(deg)));
        } else if (deg > 90 && deg <= 180) {
            // 90~180度
            x = this.circleRadius * (1 - Math.cos(this.deg2Arc(180 - deg)));
            y = this.circleRadius * (1 + Math.sin(this.deg2Arc(180 - deg)));
        } else if (deg > 180 && deg <= 270) {
            // 180~270度
            x = this.circleRadius * (1 - Math.sin(this.deg2Arc(270 - deg)));
            y = this.circleRadius * (1 - Math.cos(this.deg2Arc(270 - deg)));
        } else {
            // 270~360度
            x = this.circleRadius * (1 + Math.cos(this.deg2Arc(360 - deg)));
            y = this.circleRadius * (1 - Math.sin(this.deg2Arc(360 - deg)));
        }
        return { x, y };
    }
    // deg转弧度
    deg2Arc(deg) {
        return (deg / 180) * Math.PI;
    }
}
