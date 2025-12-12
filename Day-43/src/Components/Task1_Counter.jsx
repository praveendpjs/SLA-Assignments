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
      <div style={{ fontSize: '24px', margin: '20px 0' }}>
        Count: {count}
      </div>
      <button onClick={increase} style={{ marginRight: '10px', padding: '10px 20px' }}>
        Increase
      </button>
      <button onClick={decrease} style={{ padding: '10px 20px' }}>
        Decrease
      </button>
    </div>
  )
}

export default Task1_Counter

