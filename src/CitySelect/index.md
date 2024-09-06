---
title: CitySelect 省市区选择
description: CitySelect 省市区选择组件
keywords: ['省市区选择器', 'city-select']

tags:
  - form
  - city-select

group:
  title: 表单组件
  order: 1
  path: '/components/city-select'

date: 2023-02-19 13:32:36
---



CitySelect，CityCascader 省市区选择组件

基于 antdv5的省市区级联选择组件，包含中国的省(直辖市)、市、县区和乡镇/街道，

数据来源 https://github.com/modood/Administrative-divisions-of-China

- “省份、城市” 二级联动数据	pc-code.json
- “省份、城市、区县” 三级联动数据	pca-code.json
- “省份、城市、区县、乡镇” 四级联动数据 **pcas-code.json**

推荐 pcas-code.json，以上json数据都带 code编码





## CitySelect 说明

CitySelect 有2种联动

1. CitySelect 多个 Select下拉选择， 基于 Antd的 Select
2. CityCascader 级联选择，基于 Antd的 Cascader





## CitySelect 用法

```tsx
/**
 * title: CitySelect
 * description: Select 省市区级联选择；默认四级选择，到乡镇，街道
 * debug: true
 */

import React from 'react';
import { CitySelect } from 'sop-antd'

export default () => {
  return (
    <CitySelect
      // value={['41', '4103', '410325', '410325102']}
      // value={['云南省', '大理白族自治州', '大理市', '大理镇']}
      onChange={(values: any[]) => console.log('citys', values)}
    />
  )
};
```





### level=2

```tsx
import React from 'react';
import { CitySelect } from 'sop-antd'

export default () => {
  return (
    <CitySelect
      value={['53', '5329', '532901']}
      onChange={(values: string[]) => console.log('citys', values)}
      level={2}
    />
  )
};
```



## CityCascader 用法

mode属性为 CitySelect，CItyCascader共同属性

```tsx
/**
 * title: CityCascader
 * description: Cascader 省市区级联，四级选择，到乡镇，街道
 */

import React from 'react';
import { CityCascader } from 'sop-antd'

export default () => {
  return (
    <CityCascader
      value={['云南省', '大理白族自治州', '大理市', '大理镇']}
      onChange={(values: any[]) => console.log('citys', values)}
      mode='name'
    />
  )
};
```





## Form中使用



```tsx
import React from 'react'
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
  
  // 自定义表单校验
  async function checkCity(rule, value = [], callback) {
    const {length} = value;
    if (length === 1) {
      throw new Error('请选择城市!');
    }
    if (length === 2) {
      throw new Error('请选择区县!');
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
        label="省/市/区"
        name="city"
        rules={
          [
            { required: true, message: '请选择省市区' },
            { type: 'array', min: 3, message: '请选择完整省市区' },
            // { validator: checkCity },
            // { pattern: /^[0-9]+$/, message:'只能输入数字' }
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
          提交
        </Button>
      </Item>
    </Form>
  )
};
```





## API

CitySelect属性说明

| 属性     | 说明                                                         | 类型                       | 默认值 | 版本 |
| -------- | ------------------------------------------------------------ | -------------------------- | ------ | ---- |
| value    | 受控属性的值                                                 | Array                      | []     |      |
| onChange | 受控，选择完成后的回调                                       | Function                   |        |      |
| gutter   | 各级别选择器之间的距离，单位px                               | Number \| Array            | 8      |      |
| level    | 显示的级别<br />如设为 2，就显示省、市和县，即3级，<br />级别可设为 0、1、2、3四级 | Number                     | 3      |      |
| mode     | 数据的类型：<br />'code':  返回编码<br />'name': 返回名称<br />'all':  返回城市编码和名称，待开发 | code \| name               | code   |      |
| size     | Select 大小                                                  | large \| middle \|  small | middle |      |





### mode 数据格式

mode='code' 数据格式如下

```json
['53', '5329', '532901', '532901102']
```



mode='name' 数据格式如下

```json
['云南省', '大理白族自治州', '大理市', '大理镇']
```



all 数据格式如下，<mark>实际开发中，暂未用到，待实现</mark>

```json
[
  { code: '53', name: '云南省' },
  { code: '5329', name: '大理白族自治州' },
  { code: '532901', name: '大理市' },
  { code: '532901102', name: '大理镇' },
]
```





## FAQ

value，传入的数组，必须要和 level一致；

如果传入编号数组，若所设编号未找到对应地方或地方所属关系不对，则显示该等级列表中第一个地方
