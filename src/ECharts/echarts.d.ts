import type { ComposeOption } from 'echarts/core';

// 日期数组
type xAxisDataProps = Array<number | string>

// type RendererType = RendererEnum[keyof RendererEnum];
export type RendererType = 'canvas' | 'svg';

export type ThemeProps = 'light' | 'dark' | object;

import type { 
  BarSeriesOption,
  BoxplotSeriesOption,
  CandlestickSeriesOption,
  CustomSeriesOption,
  EffectScatterSeriesOption,
  FunnelSeriesOption,
  GaugeSeriesOption,
  GraphSeriesOption,
  HeatmapSeriesOption,
  LineSeriesOption,
  MapSeriesOption,
  ParallelSeriesOption,
  PictorialBarSeriesOption,
  PieSeriesOption,
  RadarSeriesOption,
  SankeySeriesOption,
  ScatterSeriesOption,
  SunburstSeriesOption,
  ThemeRiverSeriesOption,
  TreeSeriesOption,
  TreemapSeriesOption
} from 'echarts/charts';

// 组件类型的定义后缀都为 ComponentOption
import type {
  AriaComponentOption,
  AxisPointerComponentOption,
  BrushComponentOption,
  CalendarComponentOption,
  DataZoomComponentOption,
  DatasetComponentOption,
  GeoComponentOption,
  GraphicComponentOption,
  GridComponentOption,
  LegendComponentOption,
  MarkAreaComponentOption,
  MarkLineComponentOption,
  MarkPointComponentOption,
  ParallelComponentOption,
  PolarComponentOption,
  RadarComponentOption,
  SingleAxisComponentOption,
  TimelineComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
  VisualMapComponentOption
} from 'echarts/components';

// 通过 ComposeOption 来组合出：一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  AriaComponentOption |
  AxisPointerComponentOption |
  BrushComponentOption |
  CalendarComponentOption |
  DataZoomComponentOption |
  DatasetComponentOption |
  GeoComponentOption |
  GraphicComponentOption |
  GridComponentOption |
  LegendComponentOption |
  MarkAreaComponentOption |
  MarkLineComponentOption |
  MarkPointComponentOption |
  ParallelComponentOption |
  PolarComponentOption |
  RadarComponentOption |
  SingleAxisComponentOption |
  TimelineComponentOption |
  TitleComponentOption |
  TooltipComponentOption |
  VisualMapComponentOption |
  // 组件 option
  BarSeriesOption |
  BoxplotSeriesOption |
  CandlestickSeriesOption |
  CustomSeriesOption |
  EffectScatterSeriesOption |
  FunnelSeriesOption |
  GaugeSeriesOption |
  GraphSeriesOption |
  HeatmapSeriesOption |
  LineSeriesOption |
  MapSeriesOption |
  ParallelSeriesOption |
  PictorialBarSeriesOption |
  PieSeriesOption |
  RadarSeriesOption |
  SankeySeriesOption |
  ScatterSeriesOption |
  SunburstSeriesOption |
  ThemeRiverSeriesOption |
  TreeSeriesOption |
  TreemapSeriesOption
>;