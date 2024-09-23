/**
 * User: lulongwen
 * Date: 2021-11-06 09:06
 * Description: { values: [], buckets: [] }
 */

import React, { useEffect, useState } from 'react'
import { VisualMapComponent } from 'echarts/components'
import { HeatmapChart } from 'echarts/charts'
import ECharts from '../../ECharts'
import { getHeatmapSource, generatePieces } from './generatePieces';
import readHeatMap from './readHeatMap.json';

const xData = ['10:00', '10:01', '10:02', '10:03', '10:04', '10:05', '10:06']
// const xData = getRangeArray('2021-11-06T02:42:16.708Z', '2021-11-06T03:42:16.708Z', {
//   formatter: 'HH:mm', unit: 'm'
// })

interface IProps {
  dataSource: [];
  xAxisData?: string[]
  unit?: string; // 'ms',
  height?: number
  loading?: boolean;
}

const StackHeatmap: React.FC<IProps> = (props) => {
  const {
    dataSource,
    xAxisData,
    height,
    unit = 'ms',
  } = props;
  const [option, setOptions] = useState({});

  useEffect(update, [xAxisData, dataSource]);

  function update() {
    // 转换数据
    const { nodes, buckets } = getHeatmapSource(readHeatMap);
    const _option = getOptions({ nodes, buckets });
    setOptions(_option);
  }

  // 生成热力图 option
  function getOptions({ nodes, buckets }: any) {
    const source = nodes.map((d: number[]) => d[2]);
    const maxItem = Math.max(...source);
    const minItem = Math.min(...source);

    return {
      tooltip: {
        position: 'top',
        textStyle: {
          fontSize: 13,
          color: '#ccc',
        },
        formatter: (a: any) => {
          const [, start, end] = a.data || [];
          return `${start * 100}${unit} [${end}]`;
        },
      },
      grid: {
        top: 8,
        right: 8,
        bottom: 8,
        left: 40,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: xAxisData || xData,
        axisTick: {
          lineStyle: { color: '#c1c5ca' },
          alignWithLabel: true,
        },
        axisLabel: {color: '#9da5b2', fontSize: '12'},
        axisLine: { lineStyle: {color: 'rgba(0,0,0,0)'} },  // 隐藏刻度
        splitLine: { show: false }, // 不显示分割线
      },
      yAxis: {
        type: 'category',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          lineStyle: { color: '#c1c5ca', type: 'dashed' }
        },
        axisLabel: {color: '#9da5b2', fontSize: '12'},
        data: buckets,
      },
      visualMap: {
        min: minItem,
        max: maxItem,
        show: false,
        type: 'piecewise',
        calculable: true,
        pieces: generatePieces(maxItem, minItem),
      },
      series: [
        {
          name: 'PunchCard',
          type: 'heatmap',
          data: nodes,
          emphasis: {
            itemStyle: {
              shadowBlur: 8,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  }

  return (
    <ECharts
      height={height}
      option={option}
      components={[
        HeatmapChart,
        VisualMapComponent
      ]}
    />
  )
}

export default StackHeatmap;
