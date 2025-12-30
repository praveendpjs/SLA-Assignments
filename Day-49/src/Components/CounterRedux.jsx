// Task 6: Counter logic using Redux concepts

import { useSelector, useDispatch } from 'react-redux';

function CounterRedux() {
  // Get the count from Redux store
  const count = useSelector((state) => state.counter);
  
  // Get dispatch function to send actions
  const dispatch = useDispatch();

  // Action creators (functions that return action objects)
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const incrementByFive = () => {
    dispatch({ type: 'INCREMENT_BY', payload: 5 });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Counter using Redux</h2>
      
      <div style={{ 
        background: '#f8f9fa', 
        padding: '30px', 
        borderRadius: '10px',
        margin: '20px 0',
        border: '2px solid #dee2e6'
      }}>
        <div style={{ 
          fontSize: '48px', 
          fontWeight: 'bold', 
          color: '#007bff',
          marginBottom: '20px'
        }}>
          {count}
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={decrement}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Decrement (-)
          </button>

          <button 
            onClick={reset}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Reset
          </button>

          <button 
            onClick={increment}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Increment (+)
          </button>

          <button 
            onClick={incrementByFive}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            +5
          </button>
        </div>
      </div>

      <div style={{ 
        textAlign: 'left', 
        marginTop: '30px', 
        padding: '15px', 
        background: '#e9ecef', 
        borderRadius: '5px' 
      }}>
        <h3>How it works:</h3>
        <ol>
          <li>Component reads count from Redux store using <code>useSelector</code></li>
          <li>When button is clicked, component dispatches an action</li>
          <li>Reducer processes the action and returns new state</li>
          <li>Store updates and component automatically re-renders with new count</li>
        </ol>
      </div>
    </div>
  );
}

export default CounterRedux;

