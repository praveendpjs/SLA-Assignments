// Task 4: Create a simple reducer

function SimpleReducer() {
  // Example reducer code
  const counterReducerCode = `function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    case 'INCREMENT_BY':
      return state + action.payload;
    default:
      return state;
  }
}`;

  const todoReducerCode = `function todoReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}`;

  const userReducerCode = `function userReducer(state = { name: '', email: '' }, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...action.payload
      };
    case 'CLEAR_USER':
      return {
        name: '',
        email: ''
      };
    default:
      return state;
  }
}`;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Creating a Simple Reducer</h2>
      
      <div style={{ textAlign: 'left', lineHeight: '1.6' }}>
        <p>
          A reducer is a pure function that takes the current state and an action, 
          then returns a new state. It describes how the state changes in response to actions.
        </p>

        <h3>Reducer Rules:</h3>
        <ul>
          <li>Must be a pure function (no side effects)</li>
          <li>Should not mutate the original state</li>
          <li>Must return the previous state for unknown actions</li>
          <li>Should have a default/initial state</li>
        </ul>

        <h3>Example 1: Counter Reducer</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{counterReducerCode}
        </pre>
        <p><strong>Explanation:</strong></p>
        <ul>
          <li>Initial state is <code>0</code> (default parameter)</li>
          <li>Handles <code>INCREMENT</code>, <code>DECREMENT</code>, <code>RESET</code>, and <code>INCREMENT_BY</code> actions</li>
          <li>Returns new state without mutating the old one</li>
          <li>Returns current state for unknown actions (default case)</li>
        </ul>

        <h3>Example 2: Todo Reducer</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{todoReducerCode}
        </pre>
        <p><strong>Explanation:</strong></p>
        <ul>
          <li>Initial state is an empty array <code>[]</code></li>
          <li>Uses spread operator to create new arrays (immutability)</li>
          <li>Adds new todos, removes by ID, and toggles completion status</li>
        </ul>

        <h3>Example 3: User Reducer</h3>
        <pre style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', overflow: 'auto' }}>
{userReducerCode}
        </pre>
        <p><strong>Explanation:</strong></p>
        <ul>
          <li>Initial state is an object with <code>name</code> and <code>email</code></li>
          <li>Uses spread operator to merge new data with existing state</li>
          <li>Returns a new object instead of mutating the old one</li>
        </ul>

        <h3>Key Points:</h3>
        <div style={{ background: '#fff3cd', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
          <p><strong>❌ Don't Mutate State:</strong></p>
          <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '3px' }}>
{`// WRONG - Mutating state
state.count = state.count + 1;
return state;

// CORRECT - Returning new state
return { ...state, count: state.count + 1 };`}
          </pre>
        </div>

        <div style={{ background: '#d1ecf1', padding: '15px', borderRadius: '5px', marginTop: '20px' }}>
          <p><strong>✅ Always Return State:</strong></p>
          <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '3px' }}>
{`// Always include a default case
default:
  return state;`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default SimpleReducer;

