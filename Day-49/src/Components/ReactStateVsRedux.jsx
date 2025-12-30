// Task 10: Compare React state vs Redux usage

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ReactStateVsRedux() {
  // React State Example
  const [reactCount, setReactCount] = useState(0);

  // Redux Example
  const reduxCount = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <h2>React State vs Redux - Comparison</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '30px' }}>
        {/* React State Section */}
        <div style={{ 
          padding: '20px', 
          border: '2px solid #007bff', 
          borderRadius: '10px',
          background: '#e7f3ff'
        }}>
          <h3 style={{ color: '#007bff', marginTop: 0 }}>React State (useState)</h3>
          
          <div style={{ 
            background: 'white', 
            padding: '20px', 
            borderRadius: '5px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#007bff' }}>
              {reactCount}
            </div>
            <div style={{ marginTop: '15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button 
                onClick={() => setReactCount(reactCount - 1)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                -
              </button>
              <button 
                onClick={() => setReactCount(reactCount + 1)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                +
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'left' }}>
            <h4>Code:</h4>
            <pre style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '12px' }}>
{`import { useState } from 'react';

function Component() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
            </pre>
          </div>
        </div>

        {/* Redux Section */}
        <div style={{ 
          padding: '20px', 
          border: '2px solid #28a745', 
          borderRadius: '10px',
          background: '#e8f5e9'
        }}>
          <h3 style={{ color: '#28a745', marginTop: 0 }}>Redux</h3>
          
          <div style={{ 
            background: 'white', 
            padding: '20px', 
            borderRadius: '5px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#28a745' }}>
              {reduxCount}
            </div>
            <div style={{ marginTop: '15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
              <button 
                onClick={() => dispatch({ type: 'DECREMENT' })}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                -
              </button>
              <button 
                onClick={() => dispatch({ type: 'INCREMENT' })}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                +
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'left' }}>
            <h4>Code:</h4>
            <pre style={{ background: '#f8f9fa', padding: '15px', borderRadius: '5px', overflow: 'auto', fontSize: '12px' }}>
{`import { useSelector, useDispatch } from 'react-redux';

function Component() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
    </div>
  );
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div style={{ marginTop: '40px' }}>
        <h3>Key Differences:</h3>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse', 
          marginTop: '20px',
          background: 'white',
          borderRadius: '5px',
          overflow: 'hidden'
        }}>
          <thead>
            <tr style={{ background: '#f8f9fa' }}>
              <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>Aspect</th>
              <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>React State</th>
              <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>Redux</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}><strong>Scope</strong></td>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Local to component</td>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Global application state</td>
            </tr>
            <tr style={{ background: '#f8f9fa' }}>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}><strong>Sharing State</strong></td>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Props drilling or Context API</td>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Direct access via useSelector</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}><strong>Complexity</strong></td>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Simple for local state</td>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>More setup, better for complex apps</td>
            </tr>
            <tr style={{ background: '#f8f9fa' }}>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}><strong>Debugging</strong></td>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>React DevTools</td>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Redux DevTools (time travel)</td>
            </tr>
            <tr>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}><strong>When to Use</strong></td>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Simple components, local UI state</td>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Complex apps, shared state, predictable updates</td>
            </tr>
            <tr style={{ background: '#f8f9fa' }}>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}><strong>Performance</strong></td>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Component re-renders on state change</td>
              <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>Selective re-renders with useSelector</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        background: '#fff3cd', 
        borderRadius: '5px',
        border: '1px solid #ffc107'
      }}>
        <h3>Summary:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>React State:</strong> Use for component-specific state that doesn't need to be shared</li>
          <li><strong>Redux:</strong> Use when state needs to be shared across many components or when you need predictable state management</li>
          <li>You can use both together - React state for local UI state, Redux for global application state</li>
        </ul>
      </div>
    </div>
  );
}

export default ReactStateVsRedux;

