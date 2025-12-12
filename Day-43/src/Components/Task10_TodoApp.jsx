import { useState } from 'react'

function Task10_TodoApp() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue])
      setInputValue('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 10: To-Do App</h2>
      <div style={{ marginBottom: '15px' }}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          style={{ padding: '8px', width: '250px', marginRight: '10px' }}
        />
        <button onClick={addTodo} style={{ padding: '8px 16px', fontSize: '16px' }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li 
            key={index} 
            style={{ 
              padding: '8px', 
              margin: '5px 0', 
              backgroundColor: '#f0f0f0', 
              borderRadius: '4px' 
            }}
          >
            {todo}
          </li>
        ))}
      </ul>
      {todos.length === 0 && (
        <p style={{ color: '#999' }}>No tasks yet. Add one above!</p>
      )}
    </div>
  )
}

export default Task10_TodoApp

