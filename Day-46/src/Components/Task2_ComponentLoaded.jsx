import { useEffect, useState } from 'react'

function Task2_ComponentLoaded() {
  const [count, setCount] = useState(0)

  // This runs only once when component mounts (empty dependency array)
  useEffect(() => {
    console.log('Component Loaded')
  }, [])

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 2: Print "Component Loaded" Only Once</h2>
      <p>Check the console - "Component Loaded" appears only once when the component first mounts.</p>
      <button onClick={() => setCount(count + 1)}>
        Click me (Count: {count}) - won't trigger the effect
      </button>
    </div>
  )
}

export default Task2_ComponentLoaded

