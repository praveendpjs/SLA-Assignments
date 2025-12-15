import { useState } from 'react'

function Task3_ToggleButton() {
  const [isOn, setIsOn] = useState(false)

  const toggle = () => {
    setIsOn(!isOn)
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 3: Toggle Button (ON/OFF)</h2>
      <button onClick={toggle} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {isOn ? 'ON' : 'OFF'}
      </button>
      <p style={{ marginTop: '10px' }}>Status: {isOn ? 'ON' : 'OFF'}</p>
    </div>
  )
}

export default Task3_ToggleButton


