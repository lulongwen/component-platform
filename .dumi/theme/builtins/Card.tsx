import React from 'react'
import { Card } from 'antd'

const App: React.FC = ({title}: any) => (
  <Card title={title} bordered>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
)

export default App
