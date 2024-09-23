// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React, { useState, useEffect, useRef } from 'react';
import { useOutlet, history } from 'dumi';
import { warning } from '/Users/lulongwen/Documents/Project/component-platform-dumi/node_modules/.pnpm/rc-util@5.43.0_react-dom@18.3.1_react@18.3.1/node_modules/rc-util';
import { SiteContext, type ISiteContext } from '/Users/lulongwen/Documents/Project/component-platform-dumi/node_modules/.pnpm/dumi@2.4.9_@babel+core@7.25.2_@types+node@22.5.4_@types+react@18.3.5_eslint@9.9.1_prettier@3._6qazmy5u3rxmfm4gjp4qi3ocse/node_modules/dumi/dist/client/theme-api/context.js';
import { components } from '../meta/atoms';
import { locales } from '../locales/config';



const entryExports = {
};

// Static content
const pkg = {"name":"sop-antd","description":"antd技术栈组件库","version":"0.0.1","license":"MIT","authors":[]};
const historyType = "browser";
const hostname = "http://lulongwen.com";
const themeConfig = {"footer":"Antd技术栈，Copyright ©2013-2023，豫ICP备2023017175-1号","prefersColor":{"default":"light","switch":true},"nprogress":true,"lastUpdated":true,"name":"sop-antd","title":{"zh-CN":"sop-antd","en-US":"sop-antd","ru":"sop-antd"},"description":{"zh-CN":"基于 Ant Design 5.0 的中台组件库","en-US":"Middle Platform component library based on Ant Design 5.0","ru":"Базовая библиотека компонентов на базе Ant Design 5.0"},"bannerConfig":{"showBanner":true},"locales":[{"id":"zh-CN","name":"中文","suffix":""},{"id":"en-US","name":"English","suffix":"-en"},{"id":"ru","name":"Русский язык","suffix":"-ru"}],"localesEnhance":[{"id":"zh-CN","switchPrefix":"中文"},{"id":"en-US","switchPrefix":"EN"}],"metas":[{"name":"keywords","content":"sop-antd"},{"name":"description","content":"React, sop-antd"}],"theme":{"token":{"colorPrimary":"#00b96b"}},"antdTheme":{},"resolve":{"atomDirs":[{"type":"component","dir":"src"}]},"nav":[{"title":"DevOps","link":"/devops"},{"title":"Datav 可视化","link":"/datav"},{"title":"B端设计系统","link":"/tob"},{"title":"企业数字化转型","link":"/biz"}],"actions":[{"text":"开始使用","link":"/devops","type":"primary"},{"text":"查看组件","link":"/components"}],"features":[{"title":"开箱即用","details":"基于 Ant Design 5.0 的封装，无缝对接 antd 项目","emoji":"👏🏻","link":"/link"},{"title":"B端组件","details":"提炼自企业级中后台产品的交互语言和视觉风格"},{"title":"组件灵活复用","details":"接入简单，安装即使用，全面融入 Ant Design 5.0 风格"}],"showLineNum":true,"rtl":false,"github":"https://github.com/lulongwen/antd-cli","docVersions":{"1.0.0":"http://www.lulongwen.com"},"loading":{"skeleton":["/guide","/config","/demo"]},"socialLinks":{"github":"https://github.com/lulongwen","yuque":"https://www.yuque.com/lulongwen"},"footerLinks":[{"title":"Antd 技术栈","items":[{"title":"umijs","description":"react开发框架","url":"https://umijs.org","openExternal":true},{"title":"dumijs","description":"组件开发及组件文档生成","url":"https://d.umijs.org","openExternal":true},{"title":"Ant Design","description":"Ant Design","url":"https://ant.design","openExternal":true},{"title":"Ant Design ProComponent","description":"基于 Antd封装的组件库","url":"https://procomponents.ant.design/components","openExternal":true},{"title":"Antd 组件精选","description":"Antd 组件库","url":"https://ant.design/docs/react/recommendation-cn","openExternal":true}]},{"title":"数据可视化","items":[{"title":"Echarts","url":"https://echarts.apache.org","openExternal":true},{"title":"Threejs","url":"https://threejs.org"},{"title":"D3.js","url":"https://d3js.org"},{"title":"Reactflow","url":"https://reactflow.dev","openExternal":true},{"title":"react-grid-layout","url":"https://github.com/react-grid-layout/react-grid-layout","openExternal":true}]},{"title":"B端产品","icon":"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg","items":[{"title":"Form 表格","url":"/form","description":"表格低代码","openExternal":true},{"title":"Table 表单","url":"/table","description":"表单低代码","openExternal":true},{"title":"List 列表","url":"/list","description":"列表低代码","openExternal":true},{"title":"Chart 图表","description":"可视化2D图表","url":"/chart","openExternal":true},{"icon":"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg","title":"蚂蚁体验科技","url":"https://xtech.antfin.com/","openExternal":true}]}]};
const _2_level_nav_available = true;

export default function DumiContextWrapper() {
  const outlet = useOutlet();
  const [loading, setLoading] = useState(false);
  const prev = useRef(history.location.pathname);

  useEffect(() => {
    return history.listen((next) => {
      if (next.location.pathname !== prev.current) {
        prev.current = next.location.pathname;

        // scroll to top when route changed
        document.documentElement.scrollTo(0, 0);
      }
    });
  }, []);

  const context: ISiteContext = React.useMemo(() => {
    const ctx = {
      pkg,
      historyType,
      entryExports,
      demos: null,
      components,
      locales,
      loading,
      setLoading,
      hostname,
      themeConfig,
      _2_level_nav_available,
    };

    // Proxy do not warning since `Object.keys` will get nothing to loop
    Object.defineProperty(ctx, 'demos', {
      get: () => {
        warning(false, '`demos` return empty in latest version, please use `useDemo` instead.');
        return {};
      },
    });

    return ctx;
  }, [
    pkg,
    historyType,
    entryExports,
    components,
    locales,
    loading,
    setLoading,
    hostname,
    themeConfig,
    _2_level_nav_available,
  ]);

  return (
    <SiteContext.Provider value={context}>
      {outlet}
    </SiteContext.Provider>
  );
}