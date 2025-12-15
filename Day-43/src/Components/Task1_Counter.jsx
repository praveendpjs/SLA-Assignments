import { useState } from 'react'

function Task1_Counter() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 1: Counter with Increase and Decrease</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease} style={{ marginLeft: '10px' }}>Decrease</button>
    </div>
  )
}

export default Task1_Counter


