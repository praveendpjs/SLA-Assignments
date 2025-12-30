// Task 7: Login status state (true/false)

import { useSelector, useDispatch } from 'react-redux';

function LoginStatus() {
  // Get login status from Redux store
  const isLoggedIn = useSelector((state) => state.login);
  
  // Get dispatch function
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: 'LOGIN' });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Login Status using Redux</h2>
      
      <div style={{ 
        background: isLoggedIn ? '#d4edda' : '#f8d7da', 
        padding: '30px', 
        borderRadius: '10px',
        margin: '20px 0',
        border: `2px solid ${isLoggedIn ? '#28a745' : '#dc3545'}`
      }}>
        <div style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          marginBottom: '20px',
          color: isLoggedIn ? '#155724' : '#721c24'
        }}>
          Status: {isLoggedIn ? '✅ Logged In' : '❌ Logged Out'}
        </div>

        <div style={{ 
          fontSize: '18px',
          marginBottom: '20px',
          padding: '15px',
          background: 'white',
          borderRadius: '5px'
        }}>
          <strong>Current State:</strong> {isLoggedIn ? 'true' : 'false'}
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          {!isLoggedIn ? (
            <button 
              onClick={handleLogin}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Login
            </button>
          ) : (
            <button 
              onClick={handleLogout}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      <div style={{ 
        textAlign: 'left', 
        marginTop: '30px', 
        padding: '15px', 
        background: '#e9ecef', 
        borderRadius: '5px' 
      }}>
        <h3>Redux Implementation:</h3>
        <pre style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`// Reducer
function loginReducer(state = false, action) {
  switch (action.type) {
    case 'LOGIN':
      return true;
    case 'LOGOUT':
      return false;
    default:
      return state;
  }
}

// Component
const isLoggedIn = useSelector(state => state.login);
dispatch({ type: 'LOGIN' });
dispatch({ type: 'LOGOUT' });`}
        </pre>
      </div>
    </div>
  );
}

export default LoginStatus;

