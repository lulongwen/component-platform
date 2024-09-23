
export * from './echarts.d'

// 导出 ECharts，用到那个图表再封装
export { default as ECharts } from "./ECharts";

// 折线图
export * from './Line';

// 柱状图
export * from './Bar';

// 饼图
export * from './Pie';

// 热力图
export * from './Heatmap';

// 雷达
export { default as RadarChart } from './Radar';

// 词云
// export * from './Chart';

// 地图
// export * from './Map';

// 时间轴
// export * from './Timeline';

// 图表工具库
export * from './utils';

