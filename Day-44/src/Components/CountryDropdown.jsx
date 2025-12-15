import { useState } from 'react'

const COUNTRIES = ['India', 'United States', 'Canada', 'Australia', 'Germany']

function CountryDropdown() {
  const [country, setCountry] = useState(COUNTRIES[0])

  return (
    <div className="card">
      <h3>Country Dropdown</h3>
      <label className="field">
        <span>Select a country</span>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          {COUNTRIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>
      <p className="preview">Chosen: {country}</p>
    </div>
  )
}

export default CountryDropdown

