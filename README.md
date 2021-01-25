# mp-awesome-progress

基于`微信小程序`和`canvas`的环形进度条组件，支持`npm`引入方式，支持和很多自定义的属性和动画效果，效果图如下

![环形进度条效果图](https://qncdn.wbjiang.cn/%E7%8E%AF%E5%BD%A2%E8%BF%9B%E5%BA%A6%E6%9D%A1%E6%95%88%E6%9E%9C%E5%9B%BE.gif)

![其他效果案例](https://qncdn.wbjiang.cn/v1.4.0%E6%95%88%E6%9E%9C%E5%9B%BE.gif)

![支持进度控制](https://s1.ax1x.com/2020/04/10/GIvQCF.gif)

# 安装和使用

## npm引入

### 安装

```shell
npm install --save mp-awesome-progress
```

### 使用

npm构建后使用

```javascript
import MpAwesomeProgress from "mp-awesome-progress"

const inst = new MpAwesomeProgress({
  canvasId: "myCanvas",
  cssSize: {
    width: 104,
    height: 104,
  },
  textNodes: [
    {
      color: "#999999",
      fontSize: 10,
      textContent: "本次考试得分",
      top: 61,
    },
  ],
  onReady: () => {
    // 自主控制绘制时机
    inst.draw();
    // 模拟获取到数据后再更新分数
    setTimeout(() => {
        inst.setTextNodes([
          {
            color: "#FF683F",
            fontWeight: "bold",
            fontSize: 18,
            format: (percentage) => {
              return percentage.toFixed(2);
            },
            top: 37,
          },
          {
            color: "#999999",
            fontSize: 10,
            textContent: "本次考试得分",
            top: 61,
          },
          {
            color: "#FF683F",
            fontSize: 14,
            textContent: "不合格",
            top: 81,
          },
      ]);
      inst.setPercentage({
        value: 90,
        duration: 0.6,
      });
    }, 3000);
  },
});
```

# 支持的组件属性

| 参数             | 说明                        | 类型     | 是否必传 | 可选值 | 默认值                                                       |
| ---------------- | --------------------------- | -------- | -------- | ------ | :----------------------------------------------------------- |
| percentage       | 百分比                      | Number   | false    |        | 0                                                            |
| start-deg        | 开始角度                    | Number   | false    |        | 270                                                          |
| circle-radius    | 圆环的半径                  | Number   | false    |        | 40                                                           |
| circle-width     | 圆环的线宽                  | Number   | false    |        | 2                                                            |
| circle-color     | 圆环的颜色                  | String   | false    |        | #e5e5e5                                                      |
| line-width       | 进度弧线的宽度              | Number   | false    |        | 8                                                            |
| use-gradient     | 是否使用渐变色绘制进度弧线  | Boolean  | false    |        | false                                                         |
| line-color-stops | 进度弧线渐变色断点          | Array    | false    |        | [{"percent":0,"color":"#13CDE3"},{"percent":1,"color":"#3B77E3"}] |
| line-color       | 进度弧线颜色                | String   | false    |        | #3B77E3                                                      |
| show-text        | 是否显示环内文字            | Boolean  | false    |        | true                                                         |
| font-size        | 环内字体大小                | Number   | false    |        | 14                                                           |
| font-color       | 环内字体颜色                | String   | false    |        | #444                                                      |
| format           | 文字格式化方法              | Function | false    |        |                                                              |
| point-radius     | 圆点半径，值<=0则不显示圆点 | Number   | false    |        | 6                                                            |
| point-color      | 圆点填充色                  | String   | false    |        | \#3B77E3                                                     |
| animated         | 是否使用动画效果            | Boolean  | false    |        | true                                                         |
| easing           | 贝塞尔缓动函数，默认是ease-in效果 | String   | false    |        | 0.42,0,1,1                                                   |
| duration         | 初始动画周期，单位为秒          | Number   | false    |        | 1                                                            |

# 支持的方法

- `draw`
- `setTextNodes`
- `setPercentage`