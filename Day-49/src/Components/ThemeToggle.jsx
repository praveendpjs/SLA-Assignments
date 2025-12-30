// Task 8: Theme toggle state

import { useSelector, useDispatch } from 'react-redux';

function ThemeToggle() {
  // Get theme from Redux store
  const theme = useSelector((state) => state.theme);
  
  // Get dispatch function
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const isDark = theme === 'dark';

  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '600px', 
      margin: '0 auto', 
      textAlign: 'center',
      minHeight: '400px',
      background: isDark ? '#1a1a1a' : '#ffffff',
      color: isDark ? '#ffffff' : '#000000',
      borderRadius: '10px',
      transition: 'all 0.3s ease'
    }}>
      <h2>Theme Toggle using Redux</h2>
      
      <div style={{ 
        padding: '30px', 
        borderRadius: '10px',
        margin: '20px 0',
        border: `2px solid ${isDark ? '#444' : '#dee2e6'}`,
        background: isDark ? '#2d2d2d' : '#f8f9fa'
      }}>
        <div style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          marginBottom: '20px'
        }}>
          Current Theme: <span style={{ color: isDark ? '#4fc3f7' : '#1976d2' }}>
            {theme.toUpperCase()}
          </span>
        </div>

        <div style={{ 
          fontSize: '18px',
          marginBottom: '30px',
          padding: '15px',
          background: isDark ? '#1a1a1a' : '#ffffff',
          borderRadius: '5px',
          border: `1px solid ${isDark ? '#444' : '#dee2e6'}`
        }}>
          <strong>State Value:</strong> "{theme}"
        </div>

        <button 
          onClick={toggleTheme}
          style={{
            padding: '12px 30px',
            fontSize: '16px',
            backgroundColor: isDark ? '#4fc3f7' : '#1976d2',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease'
          }}
        >
          Toggle to {isDark ? 'Light' : 'Dark'} Theme
        </button>
      </div>

      <div style={{ 
        textAlign: 'left', 
        marginTop: '30px', 
        padding: '15px', 
        background: isDark ? '#2d2d2d' : '#e9ecef', 
        borderRadius: '5px',
        border: `1px solid ${isDark ? '#444' : '#dee2e6'}`
      }}>
        <h3>Redux Implementation:</h3>
        <pre style={{ 
          background: isDark ? '#1a1a1a' : '#f8f9fa', 
          padding: '15px', 
          borderRadius: '5px', 
          overflow: 'auto',
          color: isDark ? '#ffffff' : '#000000'
        }}>
{`// Reducer
function themeReducer(state = 'light', action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
}

// Component
const theme = useSelector(state => state.theme);
dispatch({ type: 'TOGGLE_THEME' });`}
        </pre>
      </div>
    </div>
  );
}

export default ThemeToggle;

