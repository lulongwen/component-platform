/**
 * User: lulongwen
 * Date: 2021-10-24 10:09
 * Description:
 */
import React, { useMemo } from 'react';
import { LegendComponent } from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
// import type { EChartsCoreOption } from 'echarts/core';
import { merge } from 'lodash-es'
import ECharts from '../ECharts';
import { baseOption } from '../utils';

function getSeries(dataSource: any[]): LineSeriesOption[] {
  return dataSource.map((item) => {
    const { name, data, type = 'line', areaStyle, ...rest } = item;
    const serie: LineSeriesOption = {
      name,
      data,
      type,
      symbol: 'none',
      lineStyle: {
        width: 1.8,
        type: 'solid',
      },
      // 高亮选中的图表
      emphasis: {
        focus: 'series'
      },
      // markArea: getMarkArea(length, index)
      // smooth: true, // 圆滑的折线
    };

    if (areaStyle) {
      serie.areaStyle = { ...areaStyle, opacity: 0.12 };
    }
    return merge(serie, rest);
  });
}

type LineEChartProps = {
  dataSource: any[],
  xAxisData: string[],
  theme?: 'light' | 'dark',
  components?: any[],
  loading?: boolean,
};

const LineEChart: React.FC<LineEChartProps> = (props) => {
  const {
    components = [],
    dataSource,
    xAxisData,
    ...rest
  } = props;

  const options = useMemo(() => {
    const { length } = dataSource;
    const series = Array.isArray(dataSource) ?  getSeries(dataSource) : [];
    return baseOption({ length, series, xAxisData, ...rest });
  }, [dataSource, xAxisData, rest]);
  console.log('line', options);

  return (
    <ECharts
      options={options}
      components={[
        ...components,
        LineChart,
        LegendComponent,
      ]}
      {...rest}
      // renderer='svg'
    />
  );
}

export default LineEChart;
