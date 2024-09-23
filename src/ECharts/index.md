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

`<Echarts {...options} />`



## Chart

ProgressChart 进度条

CircleProgressChart 圆环进度

TinyAreaChart 迷你面积图

TinyLineChart 迷你折线图



### 关系图表

树图 TreeChart

矩形树图 TreeMapChart

关系图 GraphChart

聚合树图 GraphTreeChart

聚合气泡图 AssembleBubbleChart 

词云图 WordCloudChart 

玉玦图 JadeJueChart 

流程图 FlowChart

河流图 RiverChart

蜂窝图 HoneycombChart 

时间轴 TimelineChart 

组织关系图 OrganizationChart

雪花图 SnowFlakeChart

里程碑图 MilestoneChart



fast-deep-equal

size-sensor





### echarts资源

echarts术语概念 https://echarts.apache.org/zh/cheat-sheet.html





## Echarts API 说明

没有新概念，直接传入 options参数即可渲染图表



### EChart Props

* dataSource 必填项，对标 series 数据源
* xAxisData 必填项，对标 xAxis.data X轴的刻度
* <mark>如果不传 dataSource 和 xAxisData，一定要传入 `series.data` 和 `xAxis.data`</mark>
* 其他参数和 setOption参与一样，https://echarts.apache.org/zh/option.html#series



没有新概念，直接打平了 options参数，传入的参数会 merge，默认的 baseOption

| 属性                     | 说明              | 类型  | 默认值 | 版本 |
| ------------------------ | ----------------- | ----- | ------ | ---- |
| dataSource               | 数据源，必填项 ✅  | Array | []     |      |
| xAxisData                | X轴刻度，必填项 ✅ | Array | []     |      |
| 其他属性和 setOption一样 |                   |       |        |      |

 - **`option`** (required, object)

the echarts option config, can see [https://echarts.apache.org/option.html#title](https://echarts.apache.org/option.html#title).

 - **`notMerge`** (optional, object)

when `setOption`, not merge the data, default is `false`. See [https://echarts.apache.org/api.html#echartsInstance.setOption](https://echarts.apache.org/api.html#echartsInstance.setOption).

 - **`lazyUpdate`** (optional, object)

when `setOption`, lazy update the data, default is `false`. See [https://echarts.apache.org/api.html#echartsInstance.setOption](https://echarts.apache.org/api.html#echartsInstance.setOption).

 - **`style`** (optional, object)

the `style` of echarts div. `object`, default is {height: '300px'}.

 - **`className`** (optional, string)

the `class` of echarts div. you can setting the css style of charts by class name.

 - **`theme`** (optional, string)

the `theme` of echarts. `string`, should `registerTheme` before use it (theme object format: [https://github.com/ecomfe/echarts/blob/master/theme/dark.js](https://github.com/ecomfe/echarts/blob/master/theme/dark.js)). e.g.

```tsx | pure
import * as echarts from 'echarts';

echarts.registerTheme('my_theme', {
  backgroundColor: '#f4cccc'
});
```

* **`locale`** 国际化配置

多语言

```tsx | pure
import "echarts/i18n/langFR";
```



 - **`onMounted`** (optional, function)

when the chart is ready, will callback the function with the `echarts object` as it's paramter.

 - **`onEvents`** (optional, array(string=>function) )

binding the echarts event, will callback with the `echarts event object`, and `the echart object` as it's paramters. e.g:

```tsx | pure
const onEvents = {
  'click': this.onChartClick,
  'legendselectchanged': this.onChartLegendselectchanged
}

<ReactECharts
  option={getOption()}
  onEvents={onEvents}
/>
```

echarts-for-react-master全部引入，不推荐





### echarts/renderers

 渲染方式，默认 canvas

```tsx | pure
import {
  CanvasRenderer,
  SVGRenderer,
} from 'echarts/renderers'
```





### echarts/components

echarts 组件

```tsx | pure
import {
  GridSimpleComponent,
  GridComponent,
  PolarComponent,
  RadarComponent,
  GeoComponent,
  SingleAxisComponent,
  ParallelComponent,
  CalendarComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  AxisPointerComponent,
  BrushComponent,
  TitleComponent,
  TimelineComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  LegendComponent,
  LegendScrollComponent,
  LegendPlainComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  AriaComponent,
  TransformComponent,
  DatasetComponent,
} from 'echarts/components'
```





### echarts/charts

所有图表

```tsx | pure
import {
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  RadarChart,
  MapChart,
  TreeChart,
  TreemapChart,
  GraphChart,
  GaugeChart,
  FunnelChart,
  ParallelChart,
  SankeyChart,
  BoxplotChart,
  CandlestickChart,
  EffectScatterChart,
  LinesChart,
  HeatmapChart,
  PictorialBarChart,
  ThemeRiverChart,
  SunburstChart,
  CustomChart,
} from 'echarts/charts'
```







### Echarts封装细节

修改以下属性的时候，需要 dispose销毁 echarts，然后再新建

1. 切换 theme 的时候
2. 修改 options 的时候
3. 修改 onEvents 的时候，取消所有之前绑定的事件 issue #151

```tsx | pure
function onMounted(echarts) {
  console.log('echarts is ready', echarts);
}

function onChartClick(param, echarts) {
  console.log(param, echarts);
  setCount(count + 1);
}

function onChartLegendselectchanged(param, echarts) {
  console.log(param, echarts);
}

<ReactECharts
  option={getOption()}
  notMerge={true}
  lazyUpdate={true}
  theme={'dark'}
  onCreated={onCreated}
  onMounted={onMounted}
  onEvents={{
  	'click': onChartClick,
  	'legendselectchanged': onChartLegendselectchanged
 }}
/>
```





## echarts-gl

```bash
pnpm add echarts-gl
```





## FAQ



### ECharts 的 TypeScript类型

https://juejin.cn/post/7066817168335175688
