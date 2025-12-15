import { useState } from 'react'

function NonEmptyForm() {
  const [text, setText] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) {
      setError('Please enter something before submitting.')
      setSubmitted('')
      return
    }
    setError('')
    setSubmitted(text.trim())
  }

  return (
    <div className="card">
      <h3>Non-Empty Form</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Message</span>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Cannot be empty"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p className="preview error">{error}</p>}
      {submitted && (
        <p className="preview success">Submitted: {submitted}</p>
      )}
    </div>
  )
}

export default NonEmptyForm

