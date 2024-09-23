"use strict";(self.webpackChunksop_antd=self.webpackChunksop_antd||[]).push([[479],{96237:function(A,v,n){var u;n.r(v),n.d(v,{demos:function(){return K}});var P=n(42122),O=n.n(P),$=n(27424),R=n.n($),B=n(17061),l=n.n(B),L=n(17156),m=n.n(L),d=n(67294),z=n(52921),C=n(31081),T=n(49175),K={"src-city-select-demo-0":{component:d.memo(d.lazy(m()(l()().mark(function s(){var o,t,a,r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return o=e.sent,t=o.default,e.next=6,Promise.resolve().then(n.bind(n,31081));case 6:return a=e.sent,r=a.CitySelect,e.abrupt("return",{default:function(){return t.createElement(r,{onChange:function(p){return console.log("citys",p)}})}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"src-city-select-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { CitySelect } from 'sop-antd'

export default () => {
  return (
    <CitySelect
      // value={['41', '4103', '410325', '410325102']}
      // value={['\u4E91\u5357\u7701', '\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE', '\u5927\u7406\u5E02', '\u5927\u7406\u9547']}
      onChange={(values: any[]) => console.log('citys', values)}
    />
  )
};`},react:{type:"NPM",value:"18.3.1"},"sop-antd":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"Select \u7701\u5E02\u533A\u7EA7\u8054\u9009\u62E9\uFF1B\u9ED8\u8BA4\u56DB\u7EA7\u9009\u62E9\uFF0C\u5230\u4E61\u9547\uFF0C\u8857\u9053",title:"CitySelect"},context:{react:u||(u=n.t(d,2)),"sop-antd":C},renderOpts:{compile:function(){var s=m()(l()().mark(function t(){var a,r=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(19).then(n.bind(n,4019));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"src-city-select-demo-1":{component:d.memo(d.lazy(m()(l()().mark(function s(){var o,t,a,r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return o=e.sent,t=o.default,e.next=6,Promise.resolve().then(n.bind(n,31081));case 6:return a=e.sent,r=a.CitySelect,e.abrupt("return",{default:function(){return t.createElement(r,{value:["53","5329","532901"],onChange:function(p){return console.log("citys",p)},level:2})}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"src-city-select-demo-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { CitySelect } from 'sop-antd'

export default () => {
  return (
    <CitySelect
      value={['53', '5329', '532901']}
      onChange={(values: string[]) => console.log('citys', values)}
      level={2}
    />
  )
};`},react:{type:"NPM",value:"18.3.1"},"sop-antd":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:u||(u=n.t(d,2)),"sop-antd":C},renderOpts:{compile:function(){var s=m()(l()().mark(function t(){var a,r=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(19).then(n.bind(n,4019));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"src-city-select-demo-2":{component:d.memo(d.lazy(m()(l()().mark(function s(){var o,t,a,r;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return o=e.sent,t=o.default,e.next=6,Promise.resolve().then(n.bind(n,31081));case 6:return a=e.sent,r=a.CityCascader,e.abrupt("return",{default:function(){return t.createElement(r,{value:["\u4E91\u5357\u7701","\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE","\u5927\u7406\u5E02","\u5927\u7406\u9547"],onChange:function(p){return console.log("citys",p)},mode:"name"})}});case 9:case"end":return e.stop()}},s)})))),asset:{type:"BLOCK",id:"src-city-select-demo-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { CityCascader } from 'sop-antd'

export default () => {
  return (
    <CityCascader
      value={['\u4E91\u5357\u7701', '\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE', '\u5927\u7406\u5E02', '\u5927\u7406\u9547']}
      onChange={(values: any[]) => console.log('citys', values)}
      mode='name'
    />
  )
};`},react:{type:"NPM",value:"18.3.1"},"sop-antd":{type:"NPM",value:"0.0.1"}},entry:"index.tsx",description:"Cascader \u7701\u5E02\u533A\u7EA7\u8054\uFF0C\u56DB\u7EA7\u9009\u62E9\uFF0C\u5230\u4E61\u9547\uFF0C\u8857\u9053",title:"CityCascader"},context:{react:u||(u=n.t(d,2)),"sop-antd":C},renderOpts:{compile:function(){var s=m()(l()().mark(function t(){var a,r=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(19).then(n.bind(n,4019));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}},"src-city-select-demo-3":{component:d.memo(d.lazy(m()(l()().mark(function s(){var o,t,a,r,i,e,I,f,p,x;return l()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return o=c.sent,t=o.default,c.next=6,Promise.resolve().then(n.bind(n,49175));case 6:return a=c.sent,r=a.Form,i=a.Button,c.next=11,Promise.resolve().then(n.bind(n,31081));case 11:return e=c.sent,I=e.CitySelect,f={labelCol:{span:4},wrapperCol:{span:20}},p=2,x=r.Item,c.abrupt("return",{default:function(){var j=r.useForm(),U=R()(j,1),W=U[0],N=function(g){console.log("Success:",g)},b=function(g){console.log("Failed:",g)};function V(E){return F.apply(this,arguments)}function F(){return F=m()(l()().mark(function E(g){var D,S,M,y=arguments;return l()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(D=y.length>1&&y[1]!==void 0?y[1]:[],S=y.length>2?y[2]:void 0,M=D.length,M!==1){h.next=5;break}throw new Error("\u8BF7\u9009\u62E9\u57CE\u5E02!");case 5:if(M!==2){h.next=7;break}throw new Error("\u8BF7\u9009\u62E9\u533A\u53BF!");case 7:S();case 8:case"end":return h.stop()}},E)})),F.apply(this,arguments)}return t.createElement(r,O()(O()({},f),{},{form:W,onFinish:N,onFinishFailed:b,autoComplete:"off"}),t.createElement(x,{label:"\u7701/\u5E02/\u533A",name:"city",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7701\u5E02\u533A"},{type:"array",min:3,message:"\u8BF7\u9009\u62E9\u5B8C\u6574\u7701\u5E02\u533A"}]},t.createElement(I,{level:p})),t.createElement(x,{wrapperCol:{offset:4,span:20}},t.createElement(i,{type:"primary",htmlType:"submit"},"\u63D0\u4EA4")))}});case 17:case"end":return c.stop()}},s)})))),asset:{type:"BLOCK",id:"src-city-select-demo-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react'
import { Form, Button } from 'antd'
import { CitySelect } from 'sop-antd'

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const level = 2;
const { Item } = Form;

export default () => {
  const [form] = Form.useForm();
  
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  // \u81EA\u5B9A\u4E49\u8868\u5355\u6821\u9A8C
  async function checkCity(rule, value = [], callback) {
    const {length} = value;
    if (length === 1) {
      throw new Error('\u8BF7\u9009\u62E9\u57CE\u5E02!');
    }
    if (length === 2) {
      throw new Error('\u8BF7\u9009\u62E9\u533A\u53BF!');
    }
    callback();
  }
  
  return (
    <Form
      {...layout}
      form={form}
      // initialValues={{ city: ['53', '5329', '532901'] }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Item
        label="\u7701/\u5E02/\u533A"
        name="city"
        rules={
          [
            { required: true, message: '\u8BF7\u9009\u62E9\u7701\u5E02\u533A' },
            { type: 'array', min: 3, message: '\u8BF7\u9009\u62E9\u5B8C\u6574\u7701\u5E02\u533A' },
            // { validator: checkCity },
            // { pattern: /^[0-9]+$/, message:'\u53EA\u80FD\u8F93\u5165\u6570\u5B57' }
          ]
        }
      >
        <CitySelect
          // onChange={(values: string[]) => console.log('citys', values)}
          level={level}
        />
      </Item>
      <Item wrapperCol={{ offset: 4, span: 20 }}>
        <Button type="primary" htmlType="submit">
          \u63D0\u4EA4
        </Button>
      </Item>
    </Form>
  )
};`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.0"},"sop-antd":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:u||(u=n.t(d,2)),antd:T,"sop-antd":C},renderOpts:{compile:function(){var s=m()(l()().mark(function t(){var a,r=arguments;return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(19).then(n.bind(n,4019));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,r));case 3:case"end":return e.stop()}},t)}));function o(){return s.apply(this,arguments)}return o}()}}}},68348:function(A,v,n){n.r(v),n.d(v,{texts:function(){return P}});var u=n(52921);const P=[{value:"CitySelect\uFF0CCityCascader \u7701\u5E02\u533A\u9009\u62E9\u7EC4\u4EF6",paraId:0},{value:"\u57FA\u4E8E antdv5\u7684\u7701\u5E02\u533A\u7EA7\u8054\u9009\u62E9\u7EC4\u4EF6\uFF0C\u5305\u542B\u4E2D\u56FD\u7684\u7701(\u76F4\u8F96\u5E02)\u3001\u5E02\u3001\u53BF\u533A\u548C\u4E61\u9547/\u8857\u9053\uFF0C",paraId:1},{value:"\u6570\u636E\u6765\u6E90 ",paraId:2},{value:"https://github.com/modood/Administrative-divisions-of-China",paraId:2},{value:"\u201C\u7701\u4EFD\u3001\u57CE\u5E02\u201D \u4E8C\u7EA7\u8054\u52A8\u6570\u636E	pc-code.json",paraId:3},{value:"\u201C\u7701\u4EFD\u3001\u57CE\u5E02\u3001\u533A\u53BF\u201D \u4E09\u7EA7\u8054\u52A8\u6570\u636E	pca-code.json",paraId:3},{value:"\u201C\u7701\u4EFD\u3001\u57CE\u5E02\u3001\u533A\u53BF\u3001\u4E61\u9547\u201D \u56DB\u7EA7\u8054\u52A8\u6570\u636E ",paraId:3},{value:"pcas-code.json",paraId:3},{value:"\u63A8\u8350 pcas-code.json\uFF0C\u4EE5\u4E0Ajson\u6570\u636E\u90FD\u5E26 code\u7F16\u7801",paraId:4},{value:"CitySelect \u67092\u79CD\u8054\u52A8",paraId:5,tocIndex:0},{value:"CitySelect \u591A\u4E2A Select\u4E0B\u62C9\u9009\u62E9\uFF0C \u57FA\u4E8E Antd\u7684 Select",paraId:6,tocIndex:0},{value:"CityCascader \u7EA7\u8054\u9009\u62E9\uFF0C\u57FA\u4E8E Antd\u7684 Cascader",paraId:6,tocIndex:0},{value:"mode\u5C5E\u6027\u4E3A CitySelect\uFF0CCItyCascader\u5171\u540C\u5C5E\u6027",paraId:7,tocIndex:4},{value:"CitySelect\u5C5E\u6027\u8BF4\u660E",paraId:8,tocIndex:7},{value:"\u5C5E\u6027",paraId:9,tocIndex:7},{value:"\u8BF4\u660E",paraId:9,tocIndex:7},{value:"\u7C7B\u578B",paraId:9,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:7},{value:"\u7248\u672C",paraId:9,tocIndex:7},{value:"value",paraId:9,tocIndex:7},{value:"\u53D7\u63A7\u5C5E\u6027\u7684\u503C",paraId:9,tocIndex:7},{value:"Array",paraId:9,tocIndex:7},{value:"[]",paraId:9,tocIndex:7},{value:"onChange",paraId:9,tocIndex:7},{value:"\u53D7\u63A7\uFF0C\u9009\u62E9\u5B8C\u6210\u540E\u7684\u56DE\u8C03",paraId:9,tocIndex:7},{value:"Function",paraId:9,tocIndex:7},{value:"gutter",paraId:9,tocIndex:7},{value:"\u5404\u7EA7\u522B\u9009\u62E9\u5668\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF0C\u5355\u4F4Dpx",paraId:9,tocIndex:7},{value:"Number | Array",paraId:9,tocIndex:7},{value:"8",paraId:9,tocIndex:7},{value:"level",paraId:9,tocIndex:7},{value:"\u663E\u793A\u7684\u7EA7\u522B",paraId:9,tocIndex:7},{value:"\u5982\u8BBE\u4E3A 2\uFF0C\u5C31\u663E\u793A\u7701\u3001\u5E02\u548C\u53BF\uFF0C\u53733\u7EA7\uFF0C",paraId:9,tocIndex:7},{value:"\u7EA7\u522B\u53EF\u8BBE\u4E3A 0\u30011\u30012\u30013\u56DB\u7EA7",paraId:9,tocIndex:7},{value:"Number",paraId:9,tocIndex:7},{value:"3",paraId:9,tocIndex:7},{value:"mode",paraId:9,tocIndex:7},{value:"\u6570\u636E\u7684\u7C7B\u578B\uFF1A",paraId:9,tocIndex:7},{value:"'code':  \u8FD4\u56DE\u7F16\u7801",paraId:9,tocIndex:7},{value:"'name': \u8FD4\u56DE\u540D\u79F0",paraId:9,tocIndex:7},{value:"'all':  \u8FD4\u56DE\u57CE\u5E02\u7F16\u7801\u548C\u540D\u79F0\uFF0C\u5F85\u5F00\u53D1",paraId:9,tocIndex:7},{value:"code | name",paraId:9,tocIndex:7},{value:"code",paraId:9,tocIndex:7},{value:"size",paraId:9,tocIndex:7},{value:"Select \u5927\u5C0F",paraId:9,tocIndex:7},{value:"large | middle |  small",paraId:9,tocIndex:7},{value:"middle",paraId:9,tocIndex:7},{value:"mode='code' \u6570\u636E\u683C\u5F0F\u5982\u4E0B",paraId:10,tocIndex:8},{value:`['53', '5329', '532901', '532901102']
`,paraId:11,tocIndex:8},{value:"mode='name' \u6570\u636E\u683C\u5F0F\u5982\u4E0B",paraId:12,tocIndex:8},{value:`['\u4E91\u5357\u7701', '\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE', '\u5927\u7406\u5E02', '\u5927\u7406\u9547']
`,paraId:13,tocIndex:8},{value:"all \u6570\u636E\u683C\u5F0F\u5982\u4E0B\uFF0C",paraId:14,tocIndex:8},{value:"\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u6682\u672A\u7528\u5230\uFF0C\u5F85\u5B9E\u73B0",paraId:14,tocIndex:8},{value:`[
  { code: '53', name: '\u4E91\u5357\u7701' },
  { code: '5329', name: '\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE' },
  { code: '532901', name: '\u5927\u7406\u5E02' },
  { code: '532901102', name: '\u5927\u7406\u9547' },
]
`,paraId:15,tocIndex:8},{value:"value\uFF0C\u4F20\u5165\u7684\u6570\u7EC4\uFF0C\u5FC5\u987B\u8981\u548C level\u4E00\u81F4\uFF1B",paraId:16,tocIndex:9},{value:"\u5982\u679C\u4F20\u5165\u7F16\u53F7\u6570\u7EC4\uFF0C\u82E5\u6240\u8BBE\u7F16\u53F7\u672A\u627E\u5230\u5BF9\u5E94\u5730\u65B9\u6216\u5730\u65B9\u6240\u5C5E\u5173\u7CFB\u4E0D\u5BF9\uFF0C\u5219\u663E\u793A\u8BE5\u7B49\u7EA7\u5217\u8868\u4E2D\u7B2C\u4E00\u4E2A\u5730\u65B9",paraId:17,tocIndex:9}]}}]);
