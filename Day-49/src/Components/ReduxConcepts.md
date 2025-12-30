# Redux Concepts Explained

This document explains all the Redux concepts covered in the Day-49 assignments.

---

## 1. What is Redux?

**Redux** is a predictable state management library for JavaScript applications, particularly useful with React. It provides a centralized way to manage application state.

### Key Principles:
- **Single Source of Truth**: All application state is stored in one place (the store)
- **State is Read-Only**: You cannot directly modify state; you dispatch actions
- **Changes via Pure Functions**: Reducers are pure functions that return new state

### Why Use Redux?
- Predictable state management
- Easier debugging with Redux DevTools
- Better organization for complex applications
- Easier testing of state logic

---

## 2. Store, Action, and Reducer Roles

### Store
- **Role**: Central state container
- **Responsibilities**:
  - Holds the entire application state
  - Provides `getState()` to access state
  - Provides `dispatch(action)` to update state
  - Provides `subscribe(listener)` to register listeners

### Action
- **Role**: Describes what happened
- **Structure**: Plain JavaScript object with a `type` property
- **Purpose**: Carries information about what change should happen
- **Example**:
  ```javascript
  {
    type: 'INCREMENT',
    payload: 5
  }
  ```

### Reducer
- **Role**: Specifies how state changes
- **Characteristics**:
  - Pure function (no side effects)
  - Takes current state and action as parameters
  - Returns new state (never mutates old state)
- **Example**:
  ```javascript
  function counterReducer(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      default:
        return state;
    }
  }
  ```

---

## 3. Action Objects

Actions are plain JavaScript objects that describe what happened in your application.

### Structure:
```javascript
{
  type: 'ACTION_TYPE',  // Required: string constant
  payload: data         // Optional: additional data
}
```

### Best Practices:
- Use descriptive action type names (e.g., 'ADD_TODO' not 'ADD')
- Use constants for action types to avoid typos
- Keep actions simple and focused
- Use `payload` for data that comes with the action

### Example Actions:
```javascript
// Simple action
{ type: 'INCREMENT' }

// Action with payload
{
  type: 'ADD_TODO',
  payload: {
    id: 1,
    text: 'Learn Redux',
    completed: false
  }
}
```

---

## 4. Creating a Simple Reducer

A reducer is a pure function that takes the current state and an action, then returns a new state.

### Reducer Rules:
1. Must be a pure function (no side effects)
2. Should not mutate the original state
3. Must return the previous state for unknown actions
4. Should have a default/initial state

### Example:
```javascript
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}
```

### Important: Never Mutate State
```javascript
// ❌ WRONG - Mutating state
state.count = state.count + 1;
return state;

// ✅ CORRECT - Returning new state
return { ...state, count: state.count + 1 };
```

---

## 5. Redux Data Flow

Redux follows a **unidirectional data flow**, making it predictable and easy to understand.

### Flow Steps:
1. **User Interaction**: User clicks a button or performs an action
2. **Dispatch Action**: Component dispatches an action object
3. **Store Receives**: Store receives the dispatched action
4. **Reducer Processes**: Store calls reducer with current state and action
5. **New State Returned**: Reducer returns a new state object
6. **Store Updates**: Store saves new state and notifies subscribers
7. **Components Re-render**: Subscribed components receive new state and re-render

### Visual Flow:
```
User Action → Dispatch → Store → Reducer → New State → Store Update → Component Re-render
```

### Key Characteristics:
- **Unidirectional**: Data flows in one direction only
- **Predictable**: Same action + same state = same result
- **Centralized**: All state changes go through the store
- **Traceable**: Every action can be logged and debugged

---

## 6. Counter Logic using Redux

A practical example of implementing a counter using Redux concepts.

### Implementation:
```javascript
// Reducer
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

// Component
const count = useSelector(state => state.counter);
const dispatch = useDispatch();

dispatch({ type: 'INCREMENT' });
```

### How it Works:
1. Component reads count from store using `useSelector`
2. User clicks button, component dispatches action
3. Reducer processes action and returns new state
4. Store updates and component automatically re-renders

---

## 7. Login Status State

Managing a boolean login status using Redux.

### Implementation:
```javascript
// Reducer
function loginReducer(state = false, action) {
  switch (action.type) {
    case 'LOGIN':
      return true;
    case 'LOGOUT':
      return false;
    default:
      return state;
  }
}

// Component
const isLoggedIn = useSelector(state => state.login);
dispatch({ type: 'LOGIN' });
dispatch({ type: 'LOGOUT' });
```

### Use Cases:
- Authentication status
- Feature flags
- Boolean toggles
- On/off states

---

## 8. Theme Toggle State

Managing theme state (light/dark) using Redux.

### Implementation:
```javascript
// Reducer
function themeReducer(state = 'light', action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    case 'SET_THEME':
      return action.payload;
    default:
      return state;
  }
}

// Component
const theme = useSelector(state => state.theme);
dispatch({ type: 'TOGGLE_THEME' });
```

### Benefits:
- Centralized theme management
- Easy to access theme from any component
- Consistent theme across the application

---

## 9. Cart Item Count Logic

Managing shopping cart item count using Redux.

### Implementation:
```javascript
// Reducer
function cartReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state + 1;
    case 'REMOVE_FROM_CART':
      return state > 0 ? state - 1 : 0;
    case 'ADD_MULTIPLE':
      return state + action.payload;
    case 'CLEAR_CART':
      return 0;
    default:
      return state;
  }
}

// Component
const cartCount = useSelector(state => state.cart);
dispatch({ type: 'ADD_TO_CART' });
dispatch({ type: 'ADD_MULTIPLE', payload: 3 });
```

### Features:
- Add items to cart
- Remove items from cart
- Add multiple items at once
- Clear entire cart
- Prevent negative counts

---

## 10. React State vs Redux Usage

### React State (useState)
**When to Use:**
- Component-specific state
- Simple UI state (toggles, form inputs)
- State that doesn't need to be shared
- Small applications

**Example:**
```javascript
const [count, setCount] = useState(0);
```

**Pros:**
- Simple and straightforward
- No additional setup
- Built into React
- Good for local state

**Cons:**
- Props drilling for shared state
- Can become complex with many components
- Harder to debug complex state changes

### Redux
**When to Use:**
- Shared state across many components
- Complex application state
- Need for predictable state updates
- Large applications
- Need for time-travel debugging

**Example:**
```javascript
const count = useSelector(state => state.counter);
const dispatch = useDispatch();
```

**Pros:**
- Centralized state management
- Predictable state updates
- Great debugging tools (Redux DevTools)
- Easy to test
- No props drilling

**Cons:**
- More boilerplate code
- Steeper learning curve
- Overkill for simple applications

### Comparison Table

| Aspect | React State | Redux |
|--------|------------|-------|
| **Scope** | Local to component | Global application state |
| **Sharing** | Props drilling or Context | Direct access via useSelector |
| **Complexity** | Simple for local state | More setup, better for complex apps |
| **Debugging** | React DevTools | Redux DevTools (time travel) |
| **When to Use** | Simple components, local UI state | Complex apps, shared state |
| **Performance** | Component re-renders on change | Selective re-renders with useSelector |

### Best Practice:
Use both together:
- **React State** for local UI state (form inputs, toggles, temporary values)
- **Redux** for global application state (user data, cart, theme, authentication)

---

## Summary

Redux is a powerful tool for managing application state, especially in complex applications. It provides:
- Predictable state management
- Centralized state storage
- Easy debugging
- Better organization

However, it's important to use Redux when it makes sense. For simple applications or component-specific state, React's built-in `useState` is often sufficient.

The key is understanding when to use each approach and combining them effectively in your applications.

