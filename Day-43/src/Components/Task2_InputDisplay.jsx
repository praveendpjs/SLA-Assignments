import { useState } from 'react'

function Task2_InputDisplay() {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 2: Input Box with Text Display</h2>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange}
        placeholder="Type something..."
        style={{ padding: '8px', width: '300px' }}
      />
      <p style={{ marginTop: '10px' }}>You typed: {text}</p>
    </div>
  )
}

export default Task2_InputDisplay


