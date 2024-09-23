import React from 'react'
import { HomeBaseLayout } from 'dumi-theme-antd'
import Card from '../theme/builtins/Card'

const HomePage = () => {
  return (
    <>
      <HomeBaseLayout />
      <div className='p-6' style={{padding: 40}}>
        <Card title='sop-antd'/>
      </div>
    </>
  )
}

export default HomePage
