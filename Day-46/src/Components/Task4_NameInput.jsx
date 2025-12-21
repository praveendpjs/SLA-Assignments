import { useEffect, useState } from 'react'

function Task4_NameInput() {
  const [name, setName] = useState('')

  // This runs whenever 'name' changes
  useEffect(() => {
    if (name) {
      console.log('Name changed to:', name)
    }
  }, [name])

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 4: Name Input with Logging</h2>
      <p>Type in the input field and check the console - it logs the name whenever it changes.</p>
      <label>
        Enter your name:{' '}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name here"
          style={{ padding: '5px', marginLeft: '10px' }}
        />
      </label>
      {name && <p>Hello, {name}!</p>}
    </div>
  )
}

export default Task4_NameInput

