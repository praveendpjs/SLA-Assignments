import './App.css'
import Button from './Components/Button'
import CenteredLayout from './Components/CenteredLayout'
import BackgroundTextColors from './Components/BackgroundTextColors'
import DashboardLayout from './Components/DashboardLayout'
import LoginForm from './Components/LoginForm'
import Navbar from './Components/Navbar'
import ProfileCard from './Components/ProfileCard'
import ResponsivePricingCard from './Components/ResponsivePricingCard'
import ResponsiveText from './Components/ResponsiveText'
import SimpleCard from './Components/SimpleCard'
function App() {

  return (
    <>
    <Button/>
    <CenteredLayout/>
    <BackgroundTextColors/>
    <ResponsiveText/>
    <ProfileCard/>
    <SimpleCard/>
    <Navbar/>
    <LoginForm/>
    <ResponsivePricingCard/>
    <DashboardLayout/>
    </>
  )
}

export default App
