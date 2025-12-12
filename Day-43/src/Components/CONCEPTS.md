# React useState Concepts Explained

This document explains the key concepts used in each task component.

## Table of Contents
1. [Task 1: Counter](#task-1-counter)
2. [Task 2: Input Display](#task-2-input-display)
3. [Task 3: Toggle Button](#task-3-toggle-button)
4. [Task 4: Even/Odd Checker](#task-4-evenodd-checker)
5. [Task 5: Background Color Changer](#task-5-background-color-changer)
6. [Task 6: Login Form](#task-6-login-form)
7. [Task 7: Theme Switcher](#task-7-theme-switcher)
8. [Task 8: Counter with Reset](#task-8-counter-with-reset)
9. [Task 9: Dropdown Menu](#task-9-dropdown-menu)
10. [Task 10: To-Do App](#task-10-to-do-app)

---

## Task 1: Counter

### Concepts:
- **useState Hook**: Used to manage the count state
- **State Initialization**: `useState(0)` initializes count to 0
- **State Updates**: `setCount()` function updates the state
- **Event Handlers**: `onClick` handlers trigger state changes
- **Conditional Rendering**: Displaying the current count value

### Key Points:
- State is immutable - you must use `setCount()` to change it
- When state changes, React re-renders the component
- The count value is displayed using JSX expression `{count}`

---

## Task 2: Input Display

### Concepts:
- **Controlled Components**: Input value is controlled by React state
- **onChange Event**: Fires when input value changes
- **Event Object**: `e.target.value` contains the input value
- **Two-way Binding**: State controls input, input updates state

### Key Points:
- `value={text}` makes it a controlled component
- `onChange` handler updates state on every keystroke
- The displayed text updates automatically when state changes

---

## Task 3: Toggle Button

### Concepts:
- **Boolean State**: Using `useState(false)` for on/off state
- **Toggle Logic**: `setIsOn(!isOn)` flips the boolean value
- **Conditional Rendering**: Displaying different text based on state
- **Ternary Operator**: `{isOn ? 'ON' : 'OFF'}` for conditional display

### Key Points:
- Boolean state is perfect for toggle functionality
- `!isOn` negates the current boolean value
- Ternary operator `condition ? true : false` is common in React

---

## Task 4: Even/Odd Checker

### Concepts:
- **Number Input**: Using `type="number"` for numeric input
- **Type Conversion**: `Number(e.target.value)` converts string to number
- **Modulo Operator**: `%` checks if number is divisible by 2
- **Computed Values**: Calculating "Even" or "Odd" based on state

### Key Points:
- Input values are strings by default, need conversion for numbers
- Modulo operator `%` returns remainder (0 for even, 1 for odd)
- The result is computed on every render based on current state

---

## Task 5: Background Color Changer

### Concepts:
- **Color State**: Storing color value in state
- **Random Selection**: Using `Math.random()` to pick random colors
- **Array Methods**: Accessing array elements by index
- **Inline Styles**: Using `style` prop with dynamic values
- **CSS Transitions**: Smooth color changes with transition property

### Key Points:
- Colors stored as hex values (e.g., '#ff6b6b')
- `Math.floor(Math.random() * array.length)` gets random index
- Inline styles accept JavaScript objects
- State change triggers re-render with new color

---

## Task 6: Login Form

### Concepts:
- **Multiple State Variables**: Managing email and password separately
- **Form Handling**: Using `onSubmit` event on form element
- **preventDefault()**: Prevents default form submission behavior
- **Separate Handlers**: Different handlers for different inputs
- **Form Validation**: Basic validation (checking if fields are filled)

### Key Points:
- Each input can have its own state variable
- `e.preventDefault()` stops page refresh on form submit
- Form elements should have `onSubmit` handler
- Controlled inputs maintain React's single source of truth

---

## Task 7: Theme Switcher

### Concepts:
- **Theme State**: Storing current theme ('light' or 'dark')
- **Object-based Styling**: Using theme objects for styling
- **Conditional Styling**: Applying different styles based on state
- **Dynamic Style Application**: Switching between style objects
- **Nested Conditional Rendering**: Multiple ternary operators

### Key Points:
- Theme objects contain all style properties
- Conditional selection: `theme === 'light' ? lightTheme : darkTheme`
- Style object is applied to component's style prop
- State change triggers complete style update

---

## Task 8: Counter with Reset

### Concepts:
- **Multiple Actions**: Increase, decrease, and reset functions
- **Reset Functionality**: Setting state back to initial value
- **Button Styling**: Different styles for different buttons
- **State Reset**: `setCount(0)` resets to initial value

### Key Points:
- Reset is just setting state to initial value
- Multiple buttons can modify the same state
- Each action has its own handler function
- All handlers use the same state setter

---

## Task 9: Dropdown Menu

### Concepts:
- **Select Element**: Using HTML `<select>` element
- **Controlled Select**: Value controlled by state
- **Option Mapping**: Rendering options from array using `map()`
- **Array Methods**: Using `map()` to create option elements
- **Conditional Rendering**: Showing selected value only when selected

### Key Points:
- Select elements work like controlled inputs
- `value` and `onChange` make it controlled
- `map()` creates array of JSX elements
- Empty string `""` represents "no selection"

---

## Task 10: To-Do App

### Concepts:
- **Array State**: Managing array of todos in state
- **Spread Operator**: `[...todos, newItem]` adds to array
- **List Rendering**: Using `map()` to render list items
- **Input Handling**: Managing input separately from list
- **Key Prop**: Using `key` prop for list items
- **Event Handling**: Handling both click and Enter key
- **Array Immutability**: Creating new array instead of mutating

### Key Points:
- Arrays in state should be treated as immutable
- Spread operator `...` copies array and adds new item
- `map()` renders each item as JSX element
- `key` prop helps React identify list items
- `trim()` removes whitespace before adding
- Enter key can trigger same action as button click

---

## General React Concepts Used Across All Tasks

### useState Hook
```javascript
const [state, setState] = useState(initialValue)
```
- Returns array with current state and setter function
- State persists between renders
- Changing state triggers re-render

### Event Handling
- `onClick`: Mouse click events
- `onChange`: Input change events
- `onSubmit`: Form submission events
- `onKeyPress`: Keyboard events

### JSX Expressions
- `{variable}`: Displaying variables
- `{condition ? true : false}`: Ternary operator
- `{array.map(item => <Element />)}`: Rendering lists

### Controlled Components
- Input value controlled by React state
- `value` prop sets current value
- `onChange` updates state
- React becomes single source of truth

### State Updates
- Always use setter function (never mutate directly)
- State updates are asynchronous
- Multiple state updates may be batched
- New state replaces old state (for primitives)

---

## Best Practices Demonstrated

1. **Descriptive Variable Names**: `count`, `email`, `password`, `todos`
2. **Clear Function Names**: `increase`, `decrease`, `toggle`, `addTodo`
3. **Separation of Concerns**: Each component handles one task
4. **Controlled Components**: All inputs are controlled
5. **Event Handler Naming**: `handleChange`, `handleSubmit` convention
6. **Initial State**: Always provide sensible initial values
7. **Conditional Rendering**: Show/hide elements based on state

---

## Common Patterns

### Pattern 1: Counter
```javascript
const [count, setCount] = useState(0)
const increase = () => setCount(count + 1)
const decrease = () => setCount(count - 1)
```

### Pattern 2: Input
```javascript
const [text, setText] = useState('')
const handleChange = (e) => setText(e.target.value)
```

### Pattern 3: Toggle
```javascript
const [isOn, setIsOn] = useState(false)
const toggle = () => setIsOn(!isOn)
```

### Pattern 4: Array Management
```javascript
const [items, setItems] = useState([])
const addItem = (newItem) => setItems([...items, newItem])
```

---

This covers all the fundamental concepts used in these beginner-level React tasks!

