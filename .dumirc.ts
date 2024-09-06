import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-antd/dist/defineThemeConfig';

const name = 'sop-antd';
const outputPath = 'docs-dist';

const footerLinks = [
  {
    title: 'Antd 技术栈',
    items: [
      {
        title: 'umijs',
        description: 'react开发框架',
        url: 'https://umijs.org',
        openExternal: true,
      },
      {
        title: 'dumijs',
        description: '组件开发及组件文档生成',
        url: 'https://d.umijs.org',
        openExternal: true,
      },
      {
        title: 'Ant Design',
        description: 'Ant Design',
        url: 'https://ant.design',
        openExternal: true,
      },
      {
        title: 'Ant Design ProComponent',
        description: '基于 Antd封装的组件库',
        url: 'https://procomponents.ant.design/components',
        openExternal: true,
      },
      {
        title: 'Antd 组件精选',
        description: 'Antd 组件库',
        url: 'https://ant.design/docs/react/recommendation-cn',
        openExternal: true,
      },
    ],
  },
  {
    title: '数据可视化',
    items: [
      {
        title: 'Echarts',
        url: 'https://echarts.apache.org',
        openExternal: true,
      },
      {
        title: 'Threejs',
        url: 'https://threejs.org',
      },
      {
        title: 'D3.js',
        url: 'https://d3js.org',
      },
      {
        title: 'Reactflow',
        url: 'https://reactflow.dev',
        openExternal: true,
      },
      {
        title: 'react-grid-layout',
        url: 'https://github.com/react-grid-layout/react-grid-layout',
        openExternal: true,
      }
    ],
  },
  {
    title: 'B端产品',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
    items: [
      {
        title: 'Form 表格',
        url: '/form',
        description: '表格低代码',
        openExternal: true,
      },
      {
        title: 'Table 表单',
        url: '/table',
        description: '表单低代码',
        openExternal: true,
      },
      {
        title: 'List 列表',
        url: '/list',
        description: '列表低代码',
        openExternal: true,
      },
      {
        title: 'Chart 图表',
        description: '可视化2D图表',
        url: '/chart',
        openExternal: true,
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg',
        title: '蚂蚁体验科技',
        url: 'https://xtech.antfin.com/',
        openExternal: true,
      },
    ],
  },
];

const themeConfig = defineThemeConfig({
    name,
    title: {
      'zh-CN': name,
      'en-US': name,
      'ru': name,
    },
    description: {
      'zh-CN': '基于 Ant Design 5.0 的中台组件库',
      'en-US': 'Middle Platform component library based on Ant Design 5.0',
      'ru': 'Базовая библиотека компонентов на базе Ant Design 5.0',
    },
    lastUpdated: true,
    bannerConfig: {
      showBanner: true,
    },
    /**
     * 多语言
     * @doc https://d.umijs.org/config#locales
     */
    locales: [
      { id: 'zh-CN', name: '中文', suffix: '' },
      { id: 'en-US', name: 'English', suffix: '-en' },
      { id: 'ru', name: 'Русский язык', suffix: '-ru' },
    ],
    localesEnhance: [
      { id: 'zh-CN', switchPrefix: '中文' },
      { id: 'en-US', switchPrefix: 'EN' },
    ],
    metas: [
      { name: 'keywords', content: 'sop-antd' },
      { name: 'description', content: 'React, sop-antd' },
    ],
    theme: {
      token: {
        colorPrimary: '#00b96b',
      },
    },
    antdTheme: {
      // 当为 true 时，全部都以分组形式展示
      // sidebarGroupModePath: [
         // 匹配以 /config 开头的路由
      //   '/e-charts'
      // ]
    },
    resolve: {
    atomDirs: [
      { type: 'component', dir: 'src' }, // 默认值
      // 追加一个组件资产的解析目录
      // { type: 'basic-chart', dir: 'src/ECharts', subType: 'chart' },
    ]
  },
    /**
     * nav: {
      'zh-CN': [{ title: '指南', link: '/guide/introduce' }],
      'en-US': [{ title: 'guide', link: '/guide/introduce-en'}],
    },
     */
    nav: [
      {
        title: '研发',
        link: '/devops'
      },
      {
        title: 'Linux',
        link: '/linux'
      },
      {
        title: 'Nodejs 全栈',
        link: '/nodejs'
      },
      {
        title: 'B端组件',
        link: '/components'
      },
      {
        title: '微信小程序',
        link: '/wechat'
      },
      {
        title: '前端工具库',
        link: '/utils'
      },
    ],
    actions: [
      {
        text: '开始使用',
        link:  '/devops',
        type: 'primary',
      },
      {
        text: '查看组件',
        link:  '/components',
      }
    ],
    features: [
      {
        title: '开箱即用',
        details: '基于 Ant Design 5.0 的封装，无缝对接 antd 项目',
        emoji: '👏🏻',
        link: '/link'
      },
      {
        title: 'B端组件',
        details: '提炼自企业级中后台产品的交互语言和视觉风格',
      },
      {
        title: '组件灵活复用',
        details: '接入简单，安装即使用，全面融入 Ant Design 5.0 风格',
      }
    ],
    showLineNum: true,
    rtl: false,
    github: 'https://github.com/lulongwen/antd-cli',
    docVersions: {
      '1.0.0': 'http://www.lulongwen.com'
    },
    loading: {
      skeleton: ['/guide', '/config', '/demo'],
    },
    // 左侧导航栏分组
    // sidebarGroupModePath: [
    //   // 匹配以 /config 开头的路由
    //   '/config',
    // ],
    // sidebar: { '/nodejs': [] },
    socialLinks: {
      github: 'https://github.com/lulongwen',
      // twitter: 'https://xxxx',
      // gitlab: 'https://xxxx',
      // facebook: 'https://xxxx',
      // zhihu: 'https://xxxx',
      yuque: 'https://www.yuque.com/lulongwen',
    },
    footerLinks,
    footer: 'Antd技术栈，Copyright ©2013-2023，豫ICP备2023017175-1号',
});

export default defineConfig({
  // base: '/', // 文档起始路由
  publicPath: `/${outputPath}/`,
  outputPath,
  // history: { type: 'hash'},
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  themeConfig,

  analytics: {
    // 百度统计的 key
    baidu: 'c1279a8c55872aac7aa5d4bd6d02af64',
  },
  // 自动生成 sitemap.xml
  sitemap: {
    hostname: 'http://lulongwen.com',
  },
  // favicons: ['https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png'],
  // extraBabelPresets: ['@emotion/babel-preset-css-prop'],
});
