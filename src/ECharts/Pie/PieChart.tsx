/**
 * User: lulongwen
 * Date: 2021-10-24 15:06
 * Description:
 */
import React, { useMemo } from 'react';
import { PieChart, type PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { merge } from 'lodash-es';
import ECharts, { ThemeEnum, type ECOption, type ThemeType, type RendererType } from '../ECharts';

function getSeries(series: PieSeriesOption[]): PieSeriesOption[] {
  const serie: PieSeriesOption = {
    type: 'pie',
    radius: '70%',
    center: ['50%', '60%'],
    avoidLabelOverlap: true, // 启用防止标签重叠策略
    padAngle: 5, // 间距
    itemStyle: { // 饼图圆角
      borderRadius: 8
    },
    label: {
      show: false,
      position: 'center'
    },
    // labelLine: {
    //   show: false,
    // },
    // 高亮
    emphasis: {
      itemStyle: {
        shadowBlur: 0.5,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },
    },
  }

  return series.map((item) => merge(serie, item));
}

export interface PieEChartProps extends PieSeriesOption {
  series: PieSeriesOption;
  components?: any[];
  theme?: ThemeType;
  renderer?: RendererType
  shallow?: boolean;
};

const PieEChart: React.FC<PieEChartProps> = (props) => {
  const {
    shallow,
    renderer,
    components = [],
    series,
    ...rest
  } = props

  const option: ECOption = useMemo(() => {
    const color = rest.theme === ThemeEnum.Dark ? '#fff' : '#333'

    const baseOptions = {
      series: Array.isArray(series) ? getSeries(series) : [],
      tooltip: {
        trigger: 'item',
      },
      legend: {
        type: 'scroll',
        // orient: 'vertical', // Y轴排列
        textStyle: {
          color,
          fontSize: 12,
        },
        pageTextStyle: {
          color,
        }
      },
    }

    return shallow ? Object.assign({}, baseOptions, rest) :  merge(baseOptions, rest);
  }, [series, rest]);

  return (
    <ECharts
      renderer={renderer}
      option={option}
      components={[
        PieChart,
        LabelLayout,
      ]}
    />
  );
}

export default PieEChart;
