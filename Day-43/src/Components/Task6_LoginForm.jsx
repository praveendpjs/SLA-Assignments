import { useState } from 'react'

function Task6_LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Email: ${email}\nPassword: ${password}`)
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Task 6: Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={handleEmailChange}
              placeholder="Enter your email"
              style={{ padding: '8px', width: '250px', marginLeft: '10px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>
            Password:
            <input 
              type="password" 
              value={password} 
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              style={{ padding: '8px', width: '250px', marginLeft: '10px' }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 20px', fontSize: '16px' }}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Task6_LoginForm


