import { useState } from 'react'

function Task8_CounterWithReset() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 8: Counter with Reset Button</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Count: {count}</p>
      <button onClick={increase} style={{ marginRight: '10px', padding: '8px 16px' }}>
        Increase
      </button>
      <button onClick={decrease} style={{ marginRight: '10px', padding: '8px 16px' }}>
        Decrease
      </button>
      <button onClick={reset} style={{ padding: '8px 16px', backgroundColor: '#ff6b6b', color: 'white', border: 'none' }}>
        Reset
      </button>
    </div>
  )
}

export default Task8_CounterWithReset

