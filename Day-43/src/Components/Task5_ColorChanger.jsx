import { useState } from 'react'

function Task5_ColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')

  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe']

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setBackgroundColor(randomColor)
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 5: Background Color Changer</h2>
      <div 
        style={{ 
          backgroundColor: backgroundColor, 
          padding: '40px', 
          margin: '20px 0',
          borderRadius: '8px',
          transition: 'background-color 0.3s'
        }}
      >
        <p>Current Background Color</p>
      </div>
      <button onClick={changeColor} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Change Color
      </button>
    </div>
  )
}

export default Task5_ColorChanger


