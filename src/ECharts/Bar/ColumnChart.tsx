/**
 * User: lulongwen
 * Date: 2021-10-24 10:09
 * Description:
 */
import React, { useMemo } from 'react';
import { TooltipComponent, LegendComponent } from 'echarts/components';
// 系列类型的定义后缀都为 SeriesOption
import { BarChart, type BarSeriesOption } from 'echarts/charts';
import ECharts from '../ECharts';
import { baseOption } from '../utils';

function getSeries(dataSource: any[]): BarSeriesOption[] {
  return dataSource.map((item) => {
    const { name, data = [], type = 'bar', ...rest } = item;
    return {
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
      ...rest
    }
  });
}

export type ColumnChartProps = {
  dataSource: any[],
  xAxisData: any[],
  components?: any[],
  loading?: boolean,
  color?: string[] 
};

const ColumnChart: React.FC<ColumnChartProps> = (props) => {
  const {
    dataSource,
    xAxisData,
    components = [],
    ...rest
  } = props

  const options: BarSeriesOption = useMemo(() => {
    const { length } = dataSource;
    const series = Array.isArray(dataSource) ?  getSeries(dataSource) : [];

    return baseOption({
      length,
      xAxisData,
      series,
      legend: { itemHeight: 12 },
      xAxis: { boundaryGap: true },
      tooltip: {
        axisPointer: {
          type: 'shadow'
        }
      },
      ...rest,
    });
  }, [dataSource, xAxisData, rest])

  return (
    <ECharts
      options={options}
      components={[
        ...components,
        BarChart,
        TooltipComponent,
        LegendComponent,
      ]}
    />
  );
}

export default ColumnChart;
