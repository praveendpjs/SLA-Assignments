import { useState } from 'react'

function CheckboxStatus() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="card">
      <h3>Checkbox Status</h3>
      <label className="field checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span>Toggle me</span>
      </label>
      <p className="preview">Status: {checked ? 'Checked' : 'Not Checked'}</p>
    </div>
  )
}

export default CheckboxStatus

