import React from 'react'
import { Card } from 'antd'

const AntdCard: React.FC = ({ title }: any) => (
  <Card title={title} bordered>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
)

export default AntdCard
