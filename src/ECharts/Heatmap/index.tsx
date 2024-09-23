/**
 * @author lulongwen
 * Date: 2022-01-08 11:54
 * Description:
 */

import React, { useEffect, useState } from 'react';
import { VisualMapComponent } from 'echarts/components';
import { HeatmapChart } from 'echarts/charts';
import ECharts from '../ECharts';
import { getOption, getHeatmapSource } from './heatmapOption';

interface IProps {
  value: any;
  xAxisData?: any[];
  unit?: string;
  height?: number;
}

const Heatmap: React.FC<IProps> = (props) => {
  const {
    value,
    unit = 'ms',
    xAxisData,
    height
  } = props;
  const [option, setOptions] = useState({ values: [], buckets: [] });

  useEffect(update, [value, xAxisData]);

  function update() {
    const { nodes, buckets } = getHeatmapSource(value);
    if(!buckets || !nodes) return;

    const _option = getOption({data: nodes, buckets, unit, xAxisData});
    setOptions(_option);
  }

  return (
    <ECharts
      height={height}
      option={option}
      components={[
        VisualMapComponent,
        HeatmapChart
      ]}
    />
  );
}

export default Heatmap;
