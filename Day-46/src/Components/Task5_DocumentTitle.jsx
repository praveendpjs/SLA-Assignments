import { useEffect, useState } from 'react'

function Task5_DocumentTitle() {
  const [count, setCount] = useState(0)

  // This updates the document title whenever count changes
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 5: Update Document Title with Count</h2>
      <p>Look at the browser tab title - it updates with the count!</p>
      <p>Current Count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  )
}

export default Task5_DocumentTitle


