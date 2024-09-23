/**
 * User: lulongwen
 * Date: 2021-10-24 10:09
 * Description:
 */
import React, { useMemo } from 'react';
// import { TooltipComponent, LegendComponent } from 'echarts/components';
// 系列类型的定义后缀都为 SeriesOption
import { BarChart, type BarSeriesOption } from 'echarts/charts';
import { merge } from 'lodash-es'
import ECharts from '../ECharts';
import { baseOption } from '../utils';

function getSeries(series: BarSeriesOption[]): BarSeriesOption[] {
  return series.map((item) => {
    const { name, data, type = 'bar', ...rest } = item;
    const serie: BarSeriesOption = {
      data,
      name,
      type,
      zlevel: 2,
      // barGap: 8,
      itemStyle: {
        // 柱状图hover颜色
        emphasis: {
          color: '#f0515e'
        }
      },
      // 高亮选中的图表
      emphasis: {
        focus: 'series'
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          textBorderWidth: 0
        }
      },
    };
    return merge(serie, rest);
  });
}

export type ColumnChartProps = {
  series?: any[],
  components?: any[],
  loading?: boolean,
  color?: string[]
};

const Chart: React.FC<ColumnChartProps> = (props) => {
  const {
    shallow,
    renderer,
    components = [],
    series,
    ...rest
  } = props

  const option: BarSeriesOption = useMemo(() => {
    return baseOption({
      /**
       * @Doc 带背景色的柱状图
       * @Link https://echarts.apache.org/examples/zh/editor.html?c=bar-background
      */
      series: Array.isArray(series) ? getSeries(series) : [],
      ...rest
    });
  }, [series, rest]);
  console.log('70', option)

  return (
    <ECharts
      option={option}
      components={[
        ...components,
        BarChart,
      ]}
    />
  );
}

export default Chart;
