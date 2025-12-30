// Login Component - Demonstrates useNavigate for programmatic navigation
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username.trim()) {
      // useNavigate hook allows programmatic navigation
      // Redirect to dashboard after login
      navigate('/dashboard');
    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
      <p>After login, you'll be redirected to the dashboard using useNavigate.</p>
    </div>
  );
}

export default Login;

