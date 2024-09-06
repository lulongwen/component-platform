---

title: ECharts 可视化图表
description: Echarts 图表组件
keywords: [Echarts 图表组件, Echarts]

# group:
#   title: 'ECharts 可视化图表'
#   order: 0
#   type: 'ECharts'

date: 2023-04-02 15:01:39

---



基于 echarts5.4图表组件

默认导出 ECharts.tsx，如果没有封装的图表，直接传入 options就可以渲染图表

```jsx | pure
<Echarts {...options} />
```





[ECharts 图表](/echarts)





### echarts资源

* echarts术语概念 https://echarts.apache.org/zh/cheat-sheet.html





## Echarts.tsx 说明

没有新概念，直接传入 options参数即可渲染图表

* dataSource 数据源

* xAxisData X轴的刻度





## LineChart 折线图



```tsx
import React from 'react';
import { LineChart } from 'sop-antd'

const dataSource = [
  {
    name: '一周趋势',
    data: [820, 932, 901, 934, 1290, 1330, 1320],
  },
  {
    name: 'Direct',
    data: [320, 332, 301, 334, 390, 330, 320],
  },
  {
    name: 'Search Engine',
    data: [620, 732, 801, 934, 990, 930, 1000],
  }
]

const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default () => {
  return (
    <LineChart
      dataSource={dataSource}
      xAxisData={xAxisData}
    />
  )
};
```



### AreaChart 面积图

dataSource.item 添加 areaStyle: {}

```tsx
import React from 'react';
import { LineChart } from 'sop-antd'

const dataSource = [
  {
    name: '一周趋势',
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    areaStyle: {},
  },
  {
    name: 'Direct',
    data: [320, 332, 301, 334, 390, 330, 320],
    areaStyle: {},
  },
  {
    name: 'Search Engine',
    data: [620, 732, 801, 934, 990, 930, 1000],
    areaStyle: {},
  }
]

const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default () => {
  return (
    <LineChart
      dataSource={dataSource}
      xAxisData={xAxisData}
    />
  )
};
```





## ColumnChart 柱状图

柱状图 X轴左右两边溢出的问题，解决，设置 xAxis`boundaryGap`属性值为 true

boundaryGap: false是贴边显示

当 echarts柱状图 `X`轴值为`category`（类目轴）时，`boundaryGap`值需要设为`true`，可解决x轴左边溢出问题

当echarts柱状图中 `X`轴值为`value`（数值轴）时，计算出`x`轴`data`的`min`和`max`值，然后设置`xAxis`的`min`和`max`属性，

最后设置`yAxis`的 `onZero`属性为`false`，解决X轴两边溢出问题

```js | pure
const options = {
  xAxis: {
    type: 'value',
    boundaryGap: true,
  }
}
```





```tsx
import React from 'react';
import { ColumnChart } from 'sop-antd'

const dataSource = [
  {
    name: '一周趋势',
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'bar',
  },
  {
    name: 'Direct',
    data: [320, 332, 301, 334, 390, 330, 320],
    type: 'bar',
  },
  {
    name: 'Search Engine',
    data: [620, 732, 801, 934, 990, 930, 1000],
    type: 'bar',
  }
]

const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export default () => {
  return (
    <ColumnChart
      dataSource={dataSource}
      xAxisData={xAxisData}
    />
  )
};
```





### 折柱混合图

ColumnLineChart

```tsx
import React from 'react';
import { ColumnChart } from 'sop-antd'

const dataSource = [
  {
    name: '一周趋势',
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    smooth: true,
    areaStyle: { opacity: 0.13 },
    type: 'line',
    symbol: 'none',
    lineStyle: {
      width: 1.8,
      type: 'solid',
    },
  },
  {
    name: '一周趋势',
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'bar',
  },
  {
    name: 'Direct',
    data: [320, 332, 301, 334, 390, 330, 320],
    type: 'bar',
  },
  {
    name: 'Search Engine',
    data: [620, 732, 801, 934, 990, 930, 1000],
    type: 'bar',
  }
]

export default () => {
  return (
    <ColumnChart
      dataSource={dataSource}
      xAxisData={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
    />
  )
};
```





### yAxis 多个Y轴

多Y轴刻度对齐，yAxis下的每项都要设置，min，max和 interval值，例如

* min: 0,
* max: 100,
* interval: 5,

```tsx
import React from 'react';
import { ColumnChart } from 'sop-antd'

const dataSource = [
  {
    name: 'Email',
    data: [120, 132, 101, 134, 90, 230, 210],
    smooth: true,
    areaChart: true,
    areaStyle: {},
  },
  {
    name: 'Union Ads',
    data: [220, 182, 191, 234, 290, 330, 310],
    smooth: true,
    areaChart: true,
    areaStyle: {},
  },
  {
    name: 'Direct',
    data: [320, 332, 301, 334, 390, 330, 320],
    smooth: true,
    areaChart: true,
    areaStyle: {},
  },
  {
    name: 'ENGINE',
    data: [620, 732, 801, 934, 990, 930, 1000],
    smooth: true,
    areaChart: true,
    areaStyle: {},
  },
  {
    name: '一周趋势',
    data: [20, 32, 58, 66, 79, 89, 97],
    smooth: true,
    // areaStyle: { opacity: 0.13 },
    type: 'line',
    symbol: 'none',
    lineStyle: {
      width: 1.8,
      type: 'solid',
    },
    yAxisIndex: 1,
    tooltip: {
      valueFormatter: (value) => `${value}%`
    },
  },
];

export default () => {
  return (
    <ColumnChart
      dataSource={dataSource}
      xAxisData={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
      yAxis={[
            {
              name: 'ENGINE',
            },
            {
              type: 'value',
              name: '一周趋势',
              position: 'right',
              axisLine: {
                show: false,
                onZero: false, // Y轴是否在 X轴零刻度上
              },
              axisTick: { show: false },
              // 改为虚线网格
              splitLine: {
                show: false,
                lineStyle: {
                  color: 'rgba(193,197,202,0.25)',
                  type: 'dashed',
                },
              },
              axisLabel: {
                color: '#9da5b2',
                fontSize: 11,
                formatter: '{value} %',
              },
            },
          ]}
    />
  )
};
```







## Pie 饼图

实心饼图

```tsx
import React from 'react';
import { PieChart } from 'sop-antd'

const dataSource = [
  { value: 80, name: '表单 70%' },
  { value: 15, name: '数据分析 15%' },
  { value: 15, name: '列表 10%' },
  { value: 5, name: '工作台 5%' }
]

export default () => {
  return (
    <PieChart
      dataSource={dataSource}
      series={[{name: '中后台系统'}]}
    />
  )
};
```





### 圆环饼图



```tsx
import React from 'react';
import { PieChart } from 'sop-antd'

const pieData = [
  { value: 1048, name: 'Search Engine' },
  { value: 735, name: 'Direct' },
  { value: 580, name: 'Email' },
  { value: 484, name: 'Union Ads' },
  { value: 300, name: 'Video Ads' }
]

export default () => {
  return (
    <PieChart
      dataSource={pieData}
      series={[{ name: '中后台系统', radius: ['35%', '70%'] }]}
    />
  )
};
```



## API

ECharts 属性说明

* dataSource 必填项
* xAxisData 必填项
* <mark>如果不传 dataSource 和 xAxisData，一定要传入 `series.data` 和 `xAxis.data`</mark>
* 其他参数和 setOption参与一样，https://echarts.apache.org/zh/option.html#series



没有新概念，直接打平了 options参数，传入的参数会 merge，默认的 baseOption

| 属性                     | 说明              | 类型  | 默认值 | 版本 |
| ------------------------ | ----------------- | ----- | ------ | ---- |
| dataSource               | 数据源，必填项 ✅  | Array | []     |      |
| xAxisData                | X轴刻度，必填项 ✅ | Array | []     |      |
| 其他属性和 setOption一样 |                   |       |        |      |





## FAQ



### ECharts 的 TypeScript类型

https://juejin.cn/post/7066817168335175688
