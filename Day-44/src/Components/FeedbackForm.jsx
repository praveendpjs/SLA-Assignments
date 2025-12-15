import { useState } from 'react'

function FeedbackForm() {
  const [feedback, setFeedback] = useState({
    text: '',
    rating: '5',
    agree: false,
  })
  const [result, setResult] = useState(null)

  const handleChange = (field) => (e) => {
    const value =
      field === 'agree' ? e.target.checked : e.target.value
    setFeedback((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setResult(feedback)
    console.log('Feedback submitted:', feedback)
  }

  return (
    <div className="card">
      <h3>Feedback Form</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Feedback</span>
          <textarea
            rows="3"
            value={feedback.text}
            onChange={handleChange('text')}
            placeholder="Your thoughts..."
            required
          />
        </label>
        <label className="field">
          <span>Rating</span>
          <select
            value={feedback.rating}
            onChange={handleChange('rating')}
          >
            <option value="1">1 - Poor</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 - Great</option>
          </select>
        </label>
        <label className="field checkbox">
          <input
            type="checkbox"
            checked={feedback.agree}
            onChange={handleChange('agree')}
          />
          <span>Can we contact you about this?</span>
        </label>
        <button type="submit">Send Feedback</button>
      </form>
      {result && (
        <div className="preview">
          <div>Feedback: {result.text}</div>
          <div>Rating: {result.rating}</div>
          <div>Contact permission: {result.agree ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  )
}

export default FeedbackForm

