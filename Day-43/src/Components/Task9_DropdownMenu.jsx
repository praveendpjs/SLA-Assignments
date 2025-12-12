import { useState } from 'react'

function Task9_DropdownMenu() {
  const [selectedOption, setSelectedOption] = useState('')

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 9: Dropdown Menu Controlled with State</h2>
      <select 
        value={selectedOption} 
        onChange={handleChange}
        style={{ padding: '8px', width: '200px', fontSize: '16px' }}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && (
        <p style={{ marginTop: '10px' }}>You selected: {selectedOption}</p>
      )}
    </div>
  )
}

export default Task9_DropdownMenu

