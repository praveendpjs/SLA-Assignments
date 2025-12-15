import './App.css'
import HelloName from './Components/HelloName'
import UppercaseInput from './Components/UppercaseInput'
import CheckboxStatus from './Components/CheckboxStatus'
import CountryDropdown from './Components/CountryDropdown'
import PasswordMatcher from './Components/PasswordMatcher'
import LoginForm from './Components/LoginForm'
import RegistrationForm from './Components/RegistrationForm'
import ProfilePreviewForm from './Components/ProfilePreviewForm'
import NonEmptyForm from './Components/NonEmptyForm'
import FeedbackForm from './Components/FeedbackForm'

function App() {
  return (
    <div className="app">
      <header>
        <h1>React Form Practice</h1>
        <p>Small, single-purpose components for beginner exercises.</p>
      </header>

      <section>
        <h2>Practice Tasks</h2>
        <div className="grid">
          <HelloName />
          <UppercaseInput />
          <CheckboxStatus />
          <CountryDropdown />
          <PasswordMatcher />
        </div>
      </section>

      <section>
        <h2>Practical Tasks</h2>
        <div className="grid">
          <LoginForm />
          <RegistrationForm />
          <ProfilePreviewForm />
          <NonEmptyForm />
          <FeedbackForm />
        </div>
      </section>
    </div>
  )
}

export default App
