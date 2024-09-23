import React from 'react'
import { ReactFlow } from '@xyflow/react'
import '@xyflow/react/dist/style.css'

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
]
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

export function FirstFlow() {
  return (
    <div style={{ width: 600, height: 600, border: '1px solid #ddd' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  )
}