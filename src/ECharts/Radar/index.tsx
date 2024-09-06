/**
 * User: lulongwen
 * Date: 2021-10-24 15:06
 * Description:
 */
import React, {useEffect, useState} from 'react';
import { RadarChart, RadarSeriesOption } from 'echarts/charts';
import ECharts from '../ECharts'

function getOptions({ dataSource, radar }: any) {
  return {
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    series: dataSource,
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    }
  }
};

interface IProps extends RadarSeriesOption {
  dataSource: RadarSeriesOption['data'];
  radar?: { shape?: string; indicator: Array<{name: string, max: number}> }
  loading?: boolean;
}

const Chart: React.FC<IProps> = (props) => {
  const {
    dataSource,
    radar,
    // loading
  } = props;
  const [options, setOptions] = useState({});

  useEffect(() => {
    setOptions(getOptions({ dataSource, radar }))
  }, [dataSource, radar]);

  return (
    <ECharts
      // renderType='svg'
      options={options}
      components={[
        RadarChart,
      ]}
    />
  );
}

export default Chart;
