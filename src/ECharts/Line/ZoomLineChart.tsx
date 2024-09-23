/**
 * User: lulongwen
 * Date: 2021-10-24 10:09
 * Description:
 */
import {
  DataZoomComponent,
  DataZoomComponentOption,
} from 'echarts/components';
import LineChart from './LineChart';

export type ZoomLineChartProps = {
  zoom?: boolean,
  minSpan?: number,
};

/**
 * 缩放折线图
 * https://echarts.apache.org/zh/option.html#dataZoom
 * @param zoom {Boolean}
 * @param minSpan { Number }
 * @param rest { Object }
 */
function ZoomLineChart(props: ZoomLineChartProps) {
  const {
    zoom = true,
    minSpan =8, // 最小缩放值 0 - 100
    ...rest
  } = props;
  
  if (!zoom) {
    return <LineChart {...rest} />;
  }

  const dataZoom: DataZoomComponentOption[] = [
    {
      type: 'slider', // 滑动条缩放
      show: true,
      start: 0, // 从头开始
      height: 24,
      bottom: 0, // 底部位置
      borderRadius: 0, // 去掉圆角
      // 两侧缩放手柄大小
      handleSize: 20,
      // 两侧缩放手柄样式
      handleStyle: { borderMiterLimit: 4, borderWidth: 1 },
      moveHandleSize: 4, // 手柄高度
      minSpan,
      textStyle: { fontSize: 10 },
      throttle: 200,
    },
    {
      type: 'inside', // 内置缩放，通过鼠标滚轮实现缩放
      start: 10,
      end: 100,
      minSpan,
      throttle: 200,
    },
  ];

  return (
    <LineChart
      {...rest}
      dataZoom={dataZoom}
      components={[
        DataZoomComponent,
      ]}
    />
  );
}

export default ZoomLineChart;
