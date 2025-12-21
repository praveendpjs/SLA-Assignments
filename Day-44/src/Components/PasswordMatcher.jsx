import { useState } from 'react'

function PasswordMatcher() {
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const matches = password !== '' && password === confirm
  const message =
    confirm === ''
      ? 'Start typing to see if they match.'
      : matches
        ? 'Passwords match!'
        : 'Passwords do not match.'

  return (
    <div className="card">
      <h3>Password Match</h3>
      <label className="field">
        <span>Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </label>
      <label className="field">
        <span>Confirm Password</span>
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="Re-enter password"
        />
      </label>
      <p className={`preview ${matches ? 'success' : 'error'}`}>{message}</p>
    </div>
  )
}

export default PasswordMatcher


