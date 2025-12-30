// Task 5: Explain Redux data flow

function ReduxDataFlow() {
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h2>Redux Data Flow</h2>
      
      <div style={{ textAlign: 'left', lineHeight: '1.6' }}>
        <p>
          Redux follows a <strong>unidirectional data flow</strong>, which makes it predictable and easy to understand. 
          Here's how data flows through a Redux application:
        </p>

        <div style={{ 
          background: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px', 
          margin: '20px 0',
          border: '2px solid #dee2e6'
        }}>
          <h3 style={{ textAlign: 'center', color: '#495057' }}>Redux Data Flow Diagram</h3>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            gap: '15px',
            marginTop: '20px'
          }}>
            <div style={{ 
              background: '#e3f2fd', 
              padding: '15px 30px', 
              borderRadius: '5px',
              border: '2px solid #2196f3',
              fontWeight: 'bold'
            }}>
              1. User Interaction (Component)
            </div>
            
            <div style={{ fontSize: '24px' }}>⬇️</div>
            
            <div style={{ 
              background: '#fff3e0', 
              padding: '15px 30px', 
              borderRadius: '5px',
              border: '2px solid #ff9800',
              fontWeight: 'bold'
            }}>
              2. Dispatch Action
            </div>
            
            <div style={{ fontSize: '24px' }}>⬇️</div>
            
            <div style={{ 
              background: '#f3e5f5', 
              padding: '15px 30px', 
              borderRadius: '5px',
              border: '2px solid #9c27b0',
              fontWeight: 'bold'
            }}>
              3. Store Receives Action
            </div>
            
            <div style={{ fontSize: '24px' }}>⬇️</div>
            
            <div style={{ 
              background: '#e8f5e9', 
              padding: '15px 30px', 
              borderRadius: '5px',
              border: '2px solid #4caf50',
              fontWeight: 'bold'
            }}>
              4. Reducer Processes Action
            </div>
            
            <div style={{ fontSize: '24px' }}>⬇️</div>
            
            <div style={{ 
              background: '#fce4ec', 
              padding: '15px 30px', 
              borderRadius: '5px',
              border: '2px solid #e91e63',
              fontWeight: 'bold'
            }}>
              5. New State Returned
            </div>
            
            <div style={{ fontSize: '24px' }}>⬇️</div>
            
            <div style={{ 
              background: '#e0f2f1', 
              padding: '15px 30px', 
              borderRadius: '5px',
              border: '2px solid #009688',
              fontWeight: 'bold'
            }}>
              6. Store Updates & Notifies Subscribers
            </div>
            
            <div style={{ fontSize: '24px' }}>⬇️</div>
            
            <div style={{ 
              background: '#e3f2fd', 
              padding: '15px 30px', 
              borderRadius: '5px',
              border: '2px solid #2196f3',
              fontWeight: 'bold'
            }}>
              7. Components Re-render with New State
            </div>
          </div>
        </div>

        <h3>Step-by-Step Explanation:</h3>
        
        <div style={{ marginBottom: '20px', padding: '15px', borderLeft: '4px solid #2196f3', background: '#e3f2fd' }}>
          <h4>Step 1: User Interaction</h4>
          <p>User clicks a button or performs an action in a React component.</p>
          <pre style={{ background: '#fff', padding: '10px', borderRadius: '3px', marginTop: '10px' }}>
{`<button onClick={() => dispatch(incrementAction)}>
  Increment
</button>`}
          </pre>
        </div>

        <div style={{ marginBottom: '20px', padding: '15px', borderLeft: '4px solid #ff9800', background: '#fff3e0' }}>
          <h4>Step 2: Dispatch Action</h4>
          <p>Component dispatches an action object describing what happened.</p>
          <pre style={{ background: '#fff', padding: '10px', borderRadius: '3px', marginTop: '10px' }}>
{`dispatch({ type: 'INCREMENT' })`}
          </pre>
        </div>

        <div style={{ marginBottom: '20px', padding: '15px', borderLeft: '4px solid #9c27b0', background: '#f3e5f5' }}>
          <h4>Step 3: Store Receives Action</h4>
          <p>The Redux store receives the dispatched action.</p>
          <pre style={{ background: '#fff', padding: '10px', borderRadius: '3px', marginTop: '10px' }}>
{`store.dispatch(action)`}
          </pre>
        </div>

        <div style={{ marginBottom: '20px', padding: '15px', borderLeft: '4px solid #4caf50', background: '#e8f5e9' }}>
          <h4>Step 4: Reducer Processes Action</h4>
          <p>The store calls the reducer function with current state and the action.</p>
          <pre style={{ background: '#fff', padding: '10px', borderRadius: '3px', marginTop: '10px' }}>
{`function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}`}
          </pre>
        </div>

        <div style={{ marginBottom: '20px', padding: '15px', borderLeft: '4px solid #e91e63', background: '#fce4ec' }}>
          <h4>Step 5: New State Returned</h4>
          <p>Reducer returns a new state object (never mutates the old state).</p>
          <pre style={{ background: '#fff', padding: '10px', borderRadius: '3px', marginTop: '10px' }}>
{`// Old state: { count: 0 }
// New state: { count: 1 }`}
          </pre>
        </div>

        <div style={{ marginBottom: '20px', padding: '15px', borderLeft: '4px solid #009688', background: '#e0f2f1' }}>
          <h4>Step 6: Store Updates & Notifies</h4>
          <p>Store saves the new state and notifies all subscribed components.</p>
          <pre style={{ background: '#fff', padding: '10px', borderRadius: '3px', marginTop: '10px' }}>
{`store.subscribe(() => {
  // Component will re-render
})`}
          </pre>
        </div>

        <div style={{ marginBottom: '20px', padding: '15px', borderLeft: '4px solid #2196f3', background: '#e3f2fd' }}>
          <h4>Step 7: Components Re-render</h4>
          <p>Subscribed components receive the new state and re-render automatically.</p>
          <pre style={{ background: '#fff', padding: '10px', borderRadius: '3px', marginTop: '10px' }}>
{`const count = useSelector(state => state.count);
// Component re-renders with new count value`}
          </pre>
        </div>

        <div style={{ 
          background: '#d4edda', 
          padding: '20px', 
          borderRadius: '5px', 
          marginTop: '30px',
          border: '1px solid #c3e6cb'
        }}>
          <h3>Key Characteristics:</h3>
          <ul>
            <li><strong>Unidirectional:</strong> Data flows in one direction only</li>
            <li><strong>Predictable:</strong> Same action + same state = same result</li>
            <li><strong>Centralized:</strong> All state changes go through the store</li>
            <li><strong>Traceable:</strong> Every action can be logged and debugged</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ReduxDataFlow;

