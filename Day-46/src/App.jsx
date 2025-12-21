import './App.css'
import Task1_EveryRender from './Components/Task1_EveryRender'
import Task2_ComponentLoaded from './Components/Task2_ComponentLoaded'
import Task3_CounterLog from './Components/Task3_CounterLog'
import Task4_NameInput from './Components/Task4_NameInput'
import Task5_DocumentTitle from './Components/Task5_DocumentTitle'
import Task6_LiveClock from './Components/Task6_LiveClock'
import Task7_GitHubUser from './Components/Task7_GitHubUser'
import Task8_SearchAPI from './Components/Task8_SearchAPI'
import Task9_CharacterCount from './Components/Task9_CharacterCount'
import Task10_ThemeSwitcher from './Components/Task10_ThemeSwitcher'

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
        useEffect Hook Practice Tasks
      </h1>
      
      <div style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h2>Practice Tasks</h2>
        <Task1_EveryRender />
        <Task2_ComponentLoaded />
        <Task3_CounterLog />
        <Task4_NameInput />
        <Task5_DocumentTitle />
      </div>

      <div style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h2>Practical Tasks</h2>
        <Task6_LiveClock />
        <Task7_GitHubUser />
        <Task8_SearchAPI />
        <Task9_CharacterCount />
        <Task10_ThemeSwitcher />
      </div>

      <div style={{ marginTop: '40px', padding: '15px', backgroundColor: '#e8f4f8', borderRadius: '5px' }}>
        <p>
          <strong>Note:</strong> Check the browser console to see the logging effects in action!
          <br />
          For detailed explanations of each concept, see <code>src/Components/CONCEPTS_EXPLANATION.md</code>
        </p>
      </div>
    </div>
  )
}

export default App
