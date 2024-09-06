/**
 * @author lulongwen
 * Date: 2023-04-02 11:47
 * Description:
 */
import { merge } from 'lodash-es';
import { colors } from './colors';

export const grid = {
  top: 16,
  right: 16,
  bottom: 32,
  left: 32,
  containLabel: true, // 防止标签溢出
};

export const yAxis = {
  type: 'value',
  splitLine: { // 改为虚线网格
    show: true,
    lineStyle: {
      type: 'dashed',
    },
  },
};

export function baseOption({ color, xAxisData, length, theme, ...rest }: any) {
  const options = {
    color: color || colors,
    grid: {
      ...grid,
      top: length > 1 ? 32 : 24,
    },
    xAxis: {
      type: 'category',
      // 坐标轴留白 false 就是贴边没有边距，false 柱状图溢出
      boundaryGap: false,
      data: xAxisData,
      axisTick: {
        lineStyle: { color: '#c1c5ca41' },
        alignWithLabel: true, // 坐标轴刻度与标签对齐
      },
      splitLine: { show: false },
      axisLine: { lineStyle: { color: 'rgba(0,0,0,0)' } },
      axisLabel: { color: '#9da5b2', fontSize: 11, overflow: 'break' },
    },
    yAxis: {
      type: 'value',
      position: 'left',
      splitNumber: 5,
      axisLine: { show: false },
      axisTick: { show: false },
      // 改为虚线网格
      splitLine: { lineStyle: { color: 'rgba(193,197,202,0.25)', type: 'dashed' } },
      axisLabel: { color: '#9da5b2', fontSize: 11 },
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      },
      backgroundColor: 'rgba(50,50,50,.9)',
      borderColor: 'transparent',
      textStyle: {
        fontSize: 12,
        color: '#ccc',
      },
      enterable: true,
      extraCssText: 'max-height: 240px; overflow: auto;',
      // appendToBody: true
    },
    legend: {
      type: 'scroll',
      show: length > 1,
      // icon: 'rect',
      // // data: legendData,
      // top: -4,
      // itemWidth: 12,
      // itemHeight: 4,
      textStyle: {
        color: theme === 'dark' ? '#fff' : '#333',
        fontSize: 12,
      },
      pageTextStyle: {
        color: theme === 'dark' ? '#fff' : '#333',
      }
    },
  };

  return merge(options, rest);
}

export function getMarkArea(length, itemEvents) {
  const startP = length > 1 ? 24 : 16;
  const diff = 16;

  const markAreas = (itemEvents || []).map((event, index) => {
    const { name, type, startTime, endTime, message } = event;
    return [
      {
        name: `${name}:${type}`,
        xAxis: startTime,
        y: startP + diff * index,
        itemStyle: {
          borderWidth: 2,
          borderColor: type === 'Normal' ? '#5dc859' : '#FF0087',
          color: type === 'Normal' ? '#5dc859' : '#FF0087',
        },
      },
      {
        name: message,
        xAxis: endTime,
        y: startP + diff * (index + 1),
      },
    ];
  });

  return {
    silent: false,
    data: markAreas,
    label: {
      show: false,
      width: 60,
    },
    emphasis: {
      label: {
        position: 'bottom',
        show: true,
      },
    },
  };
}
