/**
 * User: lulongwen
 * Date: 2021-10-24 10:09
 * Description:
 */
import React, { useMemo } from 'react';
import { LegendComponent } from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { merge } from 'lodash-es';
import ECharts, { type ECOption, type RendererType, type ThemeType } from '../ECharts';
import { baseOption } from '../utils';

function getSeries(series: LineSeriesOption[]): LineSeriesOption[] {
  return series.map((item) => {
    const { name, data, type = 'line', areaStyle, ...rest } = item;
    const serie: LineSeriesOption = {
      data,
      name,
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

interface LineEChartProps  extends LineSeriesOption {
  series?: LineSeriesOption[],
  xAxisData?: string[],
  components?: any[];
  theme?: ThemeType;
  renderer?: RendererType
  shallow?: boolean; // 浅拷贝
};

const LineEChart: React.FC<LineEChartProps> = (props) => {
  const {
    shallow,
    renderer,
    components = [],
    series,
    ...rest
  } = props;

  const option: ECOption = useMemo(() => {
    const option = Object.assign({
      series: Array.isArray(series) ?  getSeries(series) : [],
    }, rest)
    return baseOption(option, shallow);
  }, [series, rest, shallow]);

  return (
    <ECharts
      renderer={renderer}
      option={option}
      components={[
        ...components,
        LineChart,
        LegendComponent,
      ]}
    />
  );
}

export default LineEChart;
