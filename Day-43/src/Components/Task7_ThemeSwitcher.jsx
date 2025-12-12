import { useState } from 'react'

function Task7_ThemeSwitcher() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const lightTheme = {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '20px'
  }

  const darkTheme = {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    padding: '20px'
  }

  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px' }}>
      <div style={currentTheme}>
        <h2>Task 7: Theme Switcher (Light/Dark)</h2>
        <p>Current Theme: {theme}</p>
        <button 
          onClick={toggleTheme} 
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px',
            backgroundColor: theme === 'light' ? '#000' : '#fff',
            color: theme === 'light' ? '#fff' : '#000',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    </div>
  )
}

export default Task7_ThemeSwitcher

