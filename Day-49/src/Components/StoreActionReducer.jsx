// Task 2: Identify store, action, reducer roles

function StoreActionReducer() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Redux Core Concepts: Store, Action, and Reducer</h2>
      
      <div style={{ textAlign: 'left', lineHeight: '1.6' }}>
        <div style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h3>1. Store (The Central State Container)</h3>
          <p>
            <strong>Role:</strong> The store is the single source of truth that holds the entire state of your application.
          </p>
          <ul>
            <li>Holds the application state</li>
            <li>Allows access to state via <code>getState()</code></li>
            <li>Allows state to be updated via <code>dispatch(action)</code></li>
            <li>Registers listeners via <code>subscribe(listener)</code></li>
          </ul>
          <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '3px' }}>
{`// Example: Creating a store
import { createStore } from 'redux';
const store = createStore(reducer);`}
          </pre>
        </div>

        <div style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h3>2. Action (Describing What Happened)</h3>
          <p>
            <strong>Role:</strong> Actions are plain JavaScript objects that describe what happened in your application.
          </p>
          <ul>
            <li>Must have a <code>type</code> property (usually a string constant)</li>
            <li>Can have additional data (payload) to describe the change</li>
            <li>Are dispatched to the store to trigger state updates</li>
          </ul>
          <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '3px' }}>
{`// Example: Action object
{
  type: 'INCREMENT',
  payload: 5
}`}
          </pre>
        </div>

        <div style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <h3>3. Reducer (How State Changes)</h3>
          <p>
            <strong>Role:</strong> Reducers are pure functions that specify how the application's state changes in response to actions.
          </p>
          <ul>
            <li>Take the current state and an action as arguments</li>
            <li>Return a new state (never mutate the old state)</li>
            <li>Must be pure functions (no side effects)</li>
            <li>Handle different action types using switch statements</li>
          </ul>
          <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '3px' }}>
{`// Example: Reducer function
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}`}
          </pre>
        </div>

        <div style={{ padding: '15px', background: '#e8f5e9', borderRadius: '5px' }}>
          <h3>How They Work Together:</h3>
          <ol>
            <li>Component dispatches an <strong>Action</strong></li>
            <li>Store receives the action and passes it to the <strong>Reducer</strong></li>
            <li>Reducer processes the action and returns new state</li>
            <li>Store updates with the new state</li>
            <li>Components subscribed to the store re-render with new state</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default StoreActionReducer;

