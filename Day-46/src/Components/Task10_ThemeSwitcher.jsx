import { useEffect, useState } from 'react'

function Task10_ThemeSwitcher() {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'light'
  })

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme)
    console.log('Theme saved to localStorage:', theme)
  }, [theme])

  // Apply theme to document body
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#1a1a1a' : '#ffffff'
    document.body.style.color = theme === 'dark' ? '#ffffff' : '#000000'
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ccc', 
      margin: '10px',
      backgroundColor: theme === 'dark' ? '#2a2a2a' : '#f9f9f9',
      color: theme === 'dark' ? '#ffffff' : '#000000'
    }}>
      <h2>Task 10: Theme Switcher with localStorage</h2>
      <p>Current theme: <strong>{theme}</strong></p>
      <p>The theme is saved in localStorage and persists after page refresh.</p>
      
      <button 
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: theme === 'dark' ? '#4a4a4a' : '#007bff',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      
      <p style={{ fontSize: '12px', marginTop: '10px', color: theme === 'dark' ? '#aaa' : '#666' }}>
        Refresh the page - the theme will be remembered!
      </p>
    </div>
  )
}

export default Task10_ThemeSwitcher

