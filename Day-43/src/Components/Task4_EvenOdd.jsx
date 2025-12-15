import { useState } from 'react'

function Task4_EvenOdd() {
  const [number, setNumber] = useState(0)

  const handleChange = (e) => {
    setNumber(Number(e.target.value))
  }

  const isEven = number % 2 === 0

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 4: Number Input - Even or Odd</h2>
      <input 
        type="number" 
        value={number} 
        onChange={handleChange}
        placeholder="Enter a number"
        style={{ padding: '8px', width: '200px' }}
      />
      <p style={{ marginTop: '10px', fontSize: '18px', fontWeight: 'bold' }}>
        {number} is {isEven ? 'Even' : 'Odd'}
      </p>
    </div>
  )
}

export default Task4_EvenOdd


