import { useState } from 'react'

function HelloName() {
  const [name, setName] = useState('')

  return (
    <div className="card">
      <h3>Hello, &lt;name&gt;</h3>
      <label className="field">
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />
      </label>
      <p className="preview">Hello, {name || '...'}</p>
    </div>
  )
}

export default HelloName


