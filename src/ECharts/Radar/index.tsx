/**
 * User: lulongwen
 * Date: 2021-10-24 15:06
 * Description:
 */
import React, { useMemo, } from 'react';
import { RadarChart, type RadarSeriesOption } from 'echarts/charts';
import { merge } from 'lodash-es';
import ECharts, { type ECOption, type RendererType } from '../ECharts'

function getOptions({ series, ...rest }: any, shallow = false) {
  const option = {
    series,
    radar: {
      // 指示器名称，指定雷达图中的多个变量（维度）
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
  }
  
  return shallow 
    ? Object.assign(option, rest)
    : merge(option, rest)
}

interface IProps extends RadarSeriesOption {
  height?: number;
  series: RadarSeriesOption;
  shallow?: boolean;
  renderer?: RendererType;
  components?: any[];
}

const Chart: React.FC<IProps> = (props) => {
  const {
    shallow,
    renderer,
    components = [],
    height,
    ...rest
  } = props;

  const option: ECOption = useMemo(() => {
    return getOptions(rest)
  }, [rest, shallow]);

  return (
    <ECharts
      height={height}
      renderer={renderer}
      option={option}
      components={[
        ...components,
        RadarChart,
      ]}
    />
  );
}

export default Chart;
