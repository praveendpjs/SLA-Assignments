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
        style={{ padding: '10px', width: '300px', fontSize: '16px' }}
      />
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <strong>You typed:</strong> {text}
      </div>
    </div>
  )
}

export default Task2_InputDisplay

