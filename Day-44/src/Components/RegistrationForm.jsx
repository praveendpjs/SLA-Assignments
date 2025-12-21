import { useState } from 'react'

function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(null)

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(form)
    console.log('Registration data:', form)
  }

  return (
    <div className="card">
      <h3>Registration Form</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label className="field">
          <span>Name</span>
          <input
            type="text"
            value={form.name}
            onChange={handleChange('name')}
            required
          />
        </label>
        <label className="field">
          <span>Age</span>
          <input
            type="number"
            min="0"
            value={form.age}
            onChange={handleChange('age')}
            required
          />
        </label>
        <label className="field">
          <span>Phone</span>
          <input
            type="tel"
            value={form.phone}
            onChange={handleChange('phone')}
            placeholder="123-456-7890"
            required
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
      {submitted && (
        <div className="preview">
          <div>Saved Name: {submitted.name}</div>
          <div>Age: {submitted.age}</div>
          <div>Phone: {submitted.phone}</div>
          <div>Email: {submitted.email}</div>
        </div>
      )}
    </div>
  )
}

export default RegistrationForm


