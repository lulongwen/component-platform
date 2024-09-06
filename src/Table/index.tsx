import React from 'react';
import { Button } from 'antd'

const Foo: React.FC<{ title: string }> = (props) => {
  return (
    <div>
      <h4>{props.title}</h4>
      <Button>按钮</Button>
    </div>
  )
};

export default Foo;
