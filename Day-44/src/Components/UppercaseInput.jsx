import { useState } from 'react'

function UppercaseInput() {
  const [value, setValue] = useState('')

  return (
    <div className="card">
      <h3>Uppercase Input</h3>
      <label className="field">
        <span>Only uppercase</span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value.toUpperCase())}
          placeholder="Try typing lowercase"
        />
      </label>
      <p className="preview">Value: {value || '(empty)'}</p>
    </div>
  )
}

export default UppercaseInput

