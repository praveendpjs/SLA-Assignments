import { useState } from 'react'
import './App.css'

// Import all components
import ExplainRedux from './Components/ExplainRedux'
import StoreActionReducer from './Components/StoreActionReducer'
import ActionObject from './Components/ActionObject'
import SimpleReducer from './Components/SimpleReducer'
import ReduxDataFlow from './Components/ReduxDataFlow'
import CounterRedux from './Components/CounterRedux'
import LoginStatus from './Components/LoginStatus'
import ThemeToggle from './Components/ThemeToggle'
import CartItemCount from './Components/CartItemCount'
import ReactStateVsRedux from './Components/ReactStateVsRedux'

function App() {
  const [currentTask, setCurrentTask] = useState(1)

  const tasks = [
    { id: 1, name: 'Explain Redux', component: ExplainRedux },
    { id: 2, name: 'Store, Action, Reducer Roles', component: StoreActionReducer },
    { id: 3, name: 'Action Object', component: ActionObject },
    { id: 4, name: 'Simple Reducer', component: SimpleReducer },
    { id: 5, name: 'Redux Data Flow', component: ReduxDataFlow },
    { id: 6, name: 'Counter with Redux', component: CounterRedux },
    { id: 7, name: 'Login Status', component: LoginStatus },
    { id: 8, name: 'Theme Toggle', component: ThemeToggle },
    { id: 9, name: 'Cart Item Count', component: CartItemCount },
    { id: 10, name: 'React State vs Redux', component: ReactStateVsRedux },
  ]

  const CurrentComponent = tasks.find(task => task.id === currentTask)?.component

  return (
    <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <div style={{ 
        background: '#007bff', 
        color: 'white', 
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '28px' }}>Redux Learning Tasks - Day 49</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Complete Redux concepts and examples</p>
      </div>

      <div style={{ 
        display: 'flex', 
        maxWidth: '1400px', 
        margin: '0 auto',
        padding: '20px',
        gap: '20px'
      }}>
        {/* Sidebar Navigation */}
        <div style={{ 
          width: '250px', 
          background: 'white', 
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          height: 'fit-content',
          position: 'sticky',
          top: '20px'
        }}>
          <h3 style={{ marginTop: 0, color: '#333' }}>Tasks</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {tasks.map(task => (
              <button
                key={task.id}
                onClick={() => setCurrentTask(task.id)}
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  background: currentTask === task.id ? '#007bff' : '#f8f9fa',
                  color: currentTask === task.id ? 'white' : '#333',
                  fontWeight: currentTask === task.id ? 'bold' : 'normal',
                  transition: 'all 0.2s ease'
                }}
              >
                {task.id}. {task.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ 
          flex: 1, 
          background: 'white', 
          borderRadius: '8px',
          padding: '30px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          minHeight: '600px'
        }}>
          {CurrentComponent && <CurrentComponent />}
        </div>
      </div>

      <div style={{ 
        textAlign: 'center', 
        padding: '20px',
        color: '#666',
        fontSize: '14px'
      }}>
        <p>Check <code>src/Components/ReduxConcepts.md</code> for detailed explanations of all concepts</p>
      </div>
    </div>
  )
}

export default App
