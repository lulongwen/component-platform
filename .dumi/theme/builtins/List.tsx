/**
 * dumi 自定义组件
 * 1 必须使用双标签
 * 2 属性只能是字符串, json格式字符串，JSON.parse(data) 转义
 */
import React, { useMemo } from 'react'
import { Avatar, Card, List } from 'antd'

const { Item } = List

interface IProps {
  data: string
  type?: 'card' | 'list'
  baseUrl?: string
  span?: string | number;
}

interface IList {
  label: string
  value: string | number
  avatar?: string
  href?: string;
}

export function ListChild(props: IList & Omit<IProps, 'data' | 'span'>) {
  const { label, avatar, value, type, href, baseUrl } = props;

  const _href = baseUrl ? baseUrl + href : href

  if (type === 'card') {
    return (
      <Card
        hoverable
        size='small'
        title={label}
        extra={<span className='small'>{value}</span>}
      >
        <a href={_href}><Avatar src={avatar} shape="square" size={80} /></a>
      </Card>
    )
  }

  return (
    <Item.Meta
      avatar={<Avatar src={avatar} shape="square" size={80} />}
      title={<a href={_href}>{label}</a>}
      description={value}
    />
  )
}

export const AntdList: React.FC<IProps> = ({ data, type, baseUrl, span }) => {
  const dataSource: IList = useMemo(() => JSON.parse(data), [data])
  const _span =  span ? Number(span): undefined
  console.log('dumi list', _span)

  return (
    <List
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={(item: IList) => (
        <Item>
          <ListChild
            {...item}
            type={type}
            baseUrl={baseUrl}
          />
        </Item>
      )}
      grid={
        type === 'card'
          ? {
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: _span || 5,
            xxl: _span || 6,
          } : undefined
      }
    />
  )
}

export default AntdList


