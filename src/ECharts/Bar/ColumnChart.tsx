/**
 * User: lulongwen
 * Date: 2021-10-24 10:09
 * Description:
 */
import React, { useMemo } from 'react';
// 系列类型的定义后缀都为 SeriesOption
import { BarChart, type BarSeriesOption } from 'echarts/charts';
import { merge } from 'lodash-es';
import ECharts, { type RendererType, type ThemeType } from '../ECharts';
import { baseOption } from '../utils';

function getSeries(series: BarSeriesOption[], shallow = false): BarSeriesOption[] {
  return series.map((item) => {
    const { name, data = [], type = 'bar', ...rest } = item;
    const series = {
      data,
      name,
      type,
      /**
       * @Doc 带背景色的柱状图
       * @Link https://echarts.apache.org/examples/zh/editor.html?c=bar-background
      */
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.03)'
      },
      barMaxWidth: 56,
      // 高亮选中的图表
      emphasis: {
        focus: 'series'
      },
    }

    return shallow
      ? Object.assign({}, series, rest)
      : merge(series, rest)
  });
}

export type ColumnChartProps = {
  series: BarSeriesOption[],
  xAxisData: string[],
  components?: any[],
  shallow?: boolean,
  color?: string[];
  theme?: ThemeType;
  renderer?: RendererType;
};

const ColumnChart: React.FC<ColumnChartProps> = (props) => {
  const {
    shallow,
    renderer,
    components = [],
    series,
    ...rest
  } = props

  const option = useMemo(() => {
    const _option = Object.assign({
      series: Array.isArray(series) ?  getSeries(series, shallow) : [],
      legend: { itemHeight: 12 },
      xAxis: { boundaryGap: true },
      tooltip: {
        axisPointer: {
          type: 'shadow'
        }
      },
    }, rest)

    return baseOption(_option);
  }, [series, rest, shallow])

  return (
    <ECharts
      renderer={renderer}
      option={option}
      components={[
        ...components,
        BarChart
      ]}
    />
  );
}

export default ColumnChart;
