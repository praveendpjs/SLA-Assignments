import { useEffect, useState } from 'react'

function Task9_CharacterCount() {
  const [text, setText] = useState('')
  const [charCount, setCharCount] = useState(0)

  // Update character count whenever text changes
  useEffect(() => {
    setCharCount(text.length)
  }, [text])

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 9: Character Count Component</h2>
      <p>Type in the textarea and watch the character count update in real-time.</p>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
        style={{ 
          width: '100%', 
          minHeight: '100px', 
          padding: '10px',
          fontSize: '14px',
          fontFamily: 'inherit'
        }}
      />
      
      <p style={{ marginTop: '10px' }}>
        <strong>Character Count: {charCount}</strong>
      </p>
    </div>
  )
}

export default Task9_CharacterCount

