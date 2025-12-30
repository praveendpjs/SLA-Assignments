// Task 3: Write an action object

function ActionObject() {
  // Example action objects
  const incrementAction = {
    type: 'INCREMENT'
  };

  const decrementAction = {
    type: 'DECREMENT'
  };

  const addTodoAction = {
    type: 'ADD_TODO',
    payload: {
      id: 1,
      text: 'Learn Redux',
      completed: false
    }
  };

  const loginAction = {
    type: 'LOGIN',
    payload: {
      username: 'john_doe',
      token: 'abc123xyz'
    }
  };

  const updateUserAction = {
    type: 'UPDATE_USER',
    payload: {
      name: 'John Doe',
      email: 'john@example.com',
      age: 30
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Action Objects in Redux</h2>
      
      <div style={{ textAlign: 'left', lineHeight: '1.6' }}>
        <p>
          Actions are plain JavaScript objects that describe what happened in your application. 
          They must have a <code>type</code> property and can optionally include additional data.
        </p>

        <h3>Basic Action Structure:</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`{
  type: 'ACTION_TYPE',  // Required: describes what happened
  payload: data         // Optional: additional data
}`}
        </pre>

        <h3>Example 1: Simple Action (No Payload)</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{JSON.stringify(incrementAction, null, 2)}
        </pre>
        <p>Used for: Simple state changes that don't need extra data</p>

        <h3>Example 2: Action with Payload</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{JSON.stringify(addTodoAction, null, 2)}
        </pre>
        <p>Used for: Actions that need to pass data to the reducer</p>

        <h3>Example 3: Login Action</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{JSON.stringify(loginAction, null, 2)}
        </pre>

        <h3>Example 4: Update User Action</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{JSON.stringify(updateUserAction, null, 2)}
        </pre>

        <h3>Best Practices:</h3>
        <ul>
          <li>Use descriptive action type names (e.g., 'ADD_TODO' not 'ADD')</li>
          <li>Use constants for action types to avoid typos</li>
          <li>Keep actions simple and focused on one change</li>
          <li>Use <code>payload</code> for the data that comes with the action</li>
        </ul>

        <h3>Action Type Constants (Recommended):</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{`// Define constants to avoid typos
const ActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  ADD_TODO: 'ADD_TODO',
  LOGIN: 'LOGIN'
};

// Use them in actions
const action = {
  type: ActionTypes.INCREMENT
};`}
        </pre>
      </div>
    </div>
  );
}

export default ActionObject;

