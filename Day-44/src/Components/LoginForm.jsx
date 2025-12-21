import { useState } from 'react'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(`Submitted login for ${email || 'unknown email'}`)
    console.log({ email, password })
  }

  return (
    <div className="card">
      <h3>Login Form</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
            required
          />
        </label>
        <label className="field">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <p className="preview">{message || 'Fill the form to submit.'}</p>
    </div>
  )
}

export default LoginForm


