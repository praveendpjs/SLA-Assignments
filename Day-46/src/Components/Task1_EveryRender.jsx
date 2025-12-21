import { useEffect, useState } from 'react'

function Task1_EveryRender() {
  const [count, setCount] = useState(0)

  // This runs on every render (no dependency array)
  useEffect(() => {
    console.log('Rendered!')
  })

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 1: Print "Rendered!" on Every Render</h2>
      <p>Check the console - "Rendered!" will appear every time this component re-renders.</p>
      <button onClick={() => setCount(count + 1)}>
        Click to re-render (Count: {count})
      </button>
    </div>
  )
}

export default Task1_EveryRender

