/**
 * User: lulongwen
 * Date: 2021-10-24 11:39
 * Description: ts 按需引入 echarts
 * @Doc https://echarts.apache.org/handbook/zh/basics/import
 */

import React, {
  useCallback,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口
import * as echarts from 'echarts/core';
// 引入渲染引擎 CanvasRenderer 或 SVGRenderer
import { CanvasRenderer } from 'echarts/renderers';
// 组件后缀都为 Component
import { GridComponent, TooltipComponent, LegendComponent } from 'echarts/components';
// 全局过渡动画
import { UniversalTransition } from 'echarts/features';
import clsx from 'clsx';
import { isEmpty } from 'lodash-es';
import { useResizeDetector } from 'react-resize-detector';

// 组件类型的定义后缀都为 ComponentOption
import type { ECOption } from './echarts.d';

export { ECOption }

// const dpr = window.devicePixelRatio; // 设备分辨率

export enum ThemeEnum {
  Light = 'light',
  Dark = 'dark'
}

export type ThemeType = typeof ThemeEnum[keyof typeof ThemeEnum];

export enum LocaleEnum {
  Zh = 'ZH',
  En = 'EN'
}

export type LocaleType = typeof LocaleEnum[keyof typeof LocaleEnum];

export enum RendererEnum {
  Canvas = 'canvas',
  Svg = 'svg'
}

// 使用类型映射来从枚举的值中提取类型
export type RendererType = typeof RendererEnum[keyof typeof RendererEnum];

interface IEChartProps {
  option: ECOption;
  components?: any[];
  renderer?: RendererType;
  theme?: ThemeType;
  notMerge?: boolean;
  group?: string;
  locale?: string;
  lazyUpdate?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  className?: string;
  onRendered?: (chart: echarts.EChartsType) => void;
  // onClick: func,
}

function ECharts(props: IEChartProps, ref: React.Ref<any>) {
  const {
    option,
    components,
    height = 240,
    renderer = RendererEnum.Canvas,
    locale = LocaleEnum.Zh,
    theme = ThemeEnum.Light,
    className,
    style,
  } = props;

  // Echarts DOM
  const targetRef = useRef<HTMLDivElement>(null);

  // Echarts 实例
  const echartsInstance = useRef<echarts.EChartsType | null>(null);

  /**
   * 浏览器缩放
   * 缓动动画 https://echarts.apache.org/examples/zh/editor.html?c=line-easing
   */
  const onResize = useCallback(() => {
    echartsInstance.current?.resize({ animation: { duration: 300 } });
  }, []);

  // DOM节点宽高改变
  const { ref: domRef, width = '100%' } = useResizeDetector({
    refreshMode: 'debounce',
    refreshRate: 100,
    onResize,
    // leading 延迟开始前立即执行函数，trailing 延迟结束后执行函数
    refreshOptions: { leading: false, trailing: true },
  });

  useEffect(() => {
    // echarts.use 注册必须的组件，必须在 echarts.init之前使用
    echarts.use([
      // renderer === 'canvas' ? CanvasRenderer : SVGRenderer,
      CanvasRenderer,
      UniversalTransition,
      GridComponent,
      TooltipComponent,
      LegendComponent,
      ...(components || []),
    ]);

    return () => {
      echartsInstance.current?.dispose() // 销毁实例
    }
  }, []);

  // 修改以下属性，需要 dispose() 销毁，然后新建 echarts实例
  useEffect(update, [option, theme, components]);

  useImperativeHandle(ref, () => echartsInstance)

  function update() {
    if (isEmpty(option)) {
      return
    }
    if (!targetRef.current) {
      return console.error('init echarts DOM Error');
    }

    echartsInstance.current = singletonInstance(targetRef.current);
    // 每次绘图之前，先清除画布
    echartsInstance.current.clear();
    echartsInstance.current.setOption(option, {
      notMerge: false, // default false
      lazyUpdate: true,
    });
  }

  /**
   * 判断echart实例是否已经存在，如果不存在，就进行初始化
   * echarts.registerTheme('vintage', theme); 注册主题
   * const chart = echarts.init(dom, 'dark'); 使用主题；默认 light, dark
   * https://echarts.apache.org/handbook/zh/concepts/style
   */
  function singletonInstance(dom: HTMLDivElement) {
    // 单例模式，从 DOM上获取 echarts实例
    const singleton = echarts.getInstanceByDom(dom);
    return singleton ?? echarts.init(dom, theme, {
      renderer,
      locale,
    });
  }

  if (isEmpty(option)) {
    return null;
  }
  // console.log('width', { width, height });

  return (
    <div ref={domRef} className={clsx(className)}>
      <div
        ref={targetRef}
        style={{
          width,
          height,
          ...(style || {}),
        }}
      />
    </div>
  );
}

export default forwardRef(ECharts);

