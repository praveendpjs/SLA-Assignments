import { useEffect, useState } from 'react'

function Task3_CounterLog() {
  const [count, setCount] = useState(0)

  // This runs whenever 'count' changes (count in dependency array)
  useEffect(() => {
    console.log('Count changed to:', count)
  }, [count])

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 3: Counter with Count Change Logging</h2>
      <p>Check the console - it logs whenever the count changes.</p>
      <p>Current Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  )
}

export default Task3_CounterLog


