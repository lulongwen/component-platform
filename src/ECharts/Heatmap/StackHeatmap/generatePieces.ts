/**
 * User: lulongwen
 * Date: 2021-11-06 10:41
 * Description:
 */
const colorBox = [
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
  '#671010',
];

export function getHeatmapSource( { buckets=[], values }) {
  // 二维数组
  const nodes = (values || []).reduce((prev, next, x) => {
    const _data = next.values || [];
    const grids = _data.map((val, y) => [x, y, val]);
    prev.push(...grids);
    return prev;
  }, []);

  const _buckets = [
    buckets[0]?.min,
    ...buckets.map(it => it.max),
  ];

  return { nodes, buckets: _buckets };
}

export function generatePieces(maxValue: number, minValue: number) {
  if (maxValue < minValue) return [];

  const pieces = []; // 数据分片
  const item = {
    max: minValue,
    min: minValue,
    color: colorBox[0],
  };
  pieces.push(item);

  let quotient = 1;
  if (maxValue && maxValue >= 19) {
    quotient = Math.floor(maxValue / 19);
    for (let i = 1; i < 20; i++) {
      const _item = {
        max: quotient * i,
        min: (i === 1) ? minValue : quotient * (i - 1),
        color: colorBox[i],
      }
      pieces.push(_item);
    }
  }

  if (pieces.length) {
    const item = pieces[pieces.length - 1];
    Object.assign(item, { max: maxValue });
  }
  return pieces;
}
