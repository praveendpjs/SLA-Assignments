// Task 1: Explain Redux in your own words

function ExplainRedux() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>What is Redux?</h2>
      <div style={{ textAlign: 'left', lineHeight: '1.6' }}>
        <p>
          <strong>Redux</strong> is a predictable state management library for JavaScript applications, 
          especially useful with React. Think of it as a centralized storage system for your application's data.
        </p>
        
        <h3>Key Concepts:</h3>
        <ul>
          <li>
            <strong>Single Source of Truth:</strong> All your application state is stored in one place called the "store"
          </li>
          <li>
            <strong>State is Read-Only:</strong> You cannot directly modify the state. Instead, you dispatch "actions" to describe what happened
          </li>
          <li>
            <strong>Changes are Made with Pure Functions:</strong> Reducers are pure functions that take the current state and an action, then return a new state
          </li>
        </ul>

        <h3>Why Use Redux?</h3>
        <ul>
          <li>Makes state management predictable and easier to debug</li>
          <li>Helps manage complex state across many components</li>
          <li>Provides tools like Redux DevTools for debugging</li>
          <li>Makes it easier to test your state logic</li>
        </ul>

        <h3>Simple Analogy:</h3>
        <p>
          Imagine Redux as a bank vault (store) where all your money (state) is kept. 
          To withdraw or deposit money, you fill out a form (action) and give it to a teller (reducer) 
          who processes it according to the rules and updates your account balance (state).
        </p>
      </div>
    </div>
  );
}

export default ExplainRedux;

