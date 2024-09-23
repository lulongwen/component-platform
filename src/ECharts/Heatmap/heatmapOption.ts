/**
 * @author lulongwen
 * Date: 2022-01-08 12:11
 * Description:
 */

export const colorBox = [
  '#fff',
  '#FDF0F0',
  '#FAE2E2',
  '#F8D3D3',
  '#F6C4C4',
  '#F4B5B5',
  '#F1A7A7',
  '#EF9898',
  '#E86C6C',
  '#E44E4E',
  '#E23F3F',
  '#DF3131',
  '#DD2222',
  '#CE2020',
  '#C01D1D',
  '#B11B1B',
  '#A21919',
  '#851414',
  '#761212',
  '#671010'
];

// 生成热力图 option
export function getOption({ data, buckets, xAxisData, unit }: any) {
  const _data = data || [];
  const source = _data.map((d: number[]) => d[2]);
  const maxItem = Math.max(...source);
  const minItem = Math.min(...source);

  return {
    tooltip: {
      position: 'top',
      formatter: a => `${a.data[1] * 100}${unit}  [ ${a.data[2]} ]`,
      textStyle: {
        fontSize: 13,
        color: '#ccc'
      }
    },
    grid: {
      top: 8,
      right: 8,
      bottom: 0,
      left: 0,
      containLabel: true
    },
    visualMap: [
      {
        min: minItem,
        max: maxItem,
        show: false,
        type: 'piecewise',
        calculable: true,
        pieces: generatePieces(maxItem, minItem)
      }
    ],
    xAxis: {
      type: 'category',
      data: xAxisData,
      axisTick: {
        lineStyle: { color: '#c1c5ca' },
        alignWithLabel: true
      },
      splitLine: { show: false },
      axisLine: { lineStyle: { color: 'rgba(0,0,0,0)' } },
      axisLabel: { color: '#9da5b2', fontSize: 11 }
    },
    yAxis: {
      type: 'category',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: '#c1c5ca', type: 'dashed' } },
      axisLabel: { color: '#9da5b2', fontSize: 11 },
      data: buckets
    },
    series: [
      {
        type: 'heatmap',
        data: _data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
}

export function getHeatmapSource(props: any) {
  const { values = [], buckets: maxValue = [], nodes = [] } = props;
  if (!values.length || !maxValue.length) return {};

  values.forEach(({ values: arr }, x) => {
    const grids = arr.map((val, y) => [x, y, val]);
    nodes.push(...grids);
  });

  const maxData = maxValue.map(({ max }) => max);
  const buckets = [maxValue[0].min, ...maxData];
  return { nodes, buckets };
}

export function generatePieces(maxValue, minItem) {
  if (maxValue < minItem) {
    return [];
  }
  const pieces = [];
  // { min: number; max: number; color: string };
  pieces.push({
    max: minItem,
    min: minItem,
    color: colorBox[0]
  });

  let quotient = 1;
  if (maxValue && maxValue >= 19) {
    quotient = Math.floor(maxValue / 19);
    for (let i = 1; i < 20; i++) {
      const temp = {
        max: quotient * i,
        min: (i === 1) ? minItem : quotient * (i - 1),
        color: colorBox[i]
      };
      pieces.push(temp);
    }
  }

  const { length } = pieces;
  if (length) {
    const item = pieces[length - 1];
    item.max = maxValue;
  }
  return pieces;
}
