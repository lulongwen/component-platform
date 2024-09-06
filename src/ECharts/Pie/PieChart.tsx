/**
 * User: lulongwen
 * Date: 2021-10-24 15:06
 * Description:
 */
import React, { useMemo } from 'react';
import { LegendComponent } from 'echarts/components';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { merge } from 'lodash-es';
import ECharts from '../ECharts';

export type PieEChartProps = {
  dataSource: any[];
  theme?: 'light' | 'dark';
};

const PieEChart: React.FC<PieEChartProps> = (props) => {
  const { 
    dataSource = [],
    theme = 'light',
    ...rest 
  } = props

  const options: PieSeriesOption = useMemo(() => {
    const baseOptions = {
      series: [
        {
          name: 'Access',
          type: 'pie',
          radius: '70%',
          center: ['50%', '60%'],
          avoidLabelOverlap: true, // 启用防止标签重叠策略
          padAngle: 5, // 间距
          itemStyle: { // 饼图圆角
            borderRadius: 8
          },
          data: dataSource.map(it => ({
            name: it.name,
            value: it.value ?? it.data,
          })),
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
        },
      ],
      tooltip: {
        trigger: 'item',
      },
      legend: {
        type: 'scroll',
        // orient: 'vertical', // Y轴排列
        // icon: 'rect',
        // top: -4,
        // itemWidth: 12,
        // itemHeight: 12,
        textStyle: {
          color: theme === 'dark' ? '#fff' : '#333',
          fontSize: 12,
        },
        pageTextStyle: {
          color: theme === 'dark' ? '#fff' : '#333',
        }
      },
    };
    return merge(baseOptions, rest);
  }, [dataSource, theme]);

  return (
    <ECharts
      {...rest}
      options={options}
      components={[
        PieChart,
        LegendComponent,
        LabelLayout,
      ]}
      // renderer='svg'
    />
  );
}

export default PieEChart;
