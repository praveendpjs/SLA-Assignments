# useEffect Hook - Concepts Explanation

This document explains all the concepts used in the 10 practice tasks.

---

## What is useEffect?

`useEffect` is a React Hook that lets you perform side effects in functional components. Side effects are operations that affect something outside the component, like:
- Fetching data from an API
- Setting up subscriptions
- Manually changing the DOM
- Updating timers
- Saving to localStorage

---

## Basic Syntax

```javascript
useEffect(() => {
  // Side effect code here
}, [dependencies])
```

The `useEffect` hook takes two arguments:
1. **Effect function**: The code that runs
2. **Dependency array**: Controls when the effect runs

---

## Task 1: Every Render (No Dependency Array)

```javascript
useEffect(() => {
  console.log('Rendered!')
})
```

**Concept**: When you don't provide a dependency array, the effect runs **after every render** of the component.

**Use case**: Rarely used, as it can cause performance issues. Usually you want to control when effects run.

---

## Task 2: Run Once on Mount (Empty Dependency Array)

```javascript
useEffect(() => {
  console.log('Component Loaded')
}, [])
```

**Concept**: An empty dependency array `[]` means the effect runs **only once** when the component first mounts (is added to the DOM).

**Use case**: 
- Fetching initial data
- Setting up subscriptions
- One-time initialization

---

## Task 3: Run When Dependencies Change

```javascript
useEffect(() => {
  console.log('Count changed to:', count)
}, [count])
```

**Concept**: When you include variables in the dependency array, the effect runs:
- Once on mount
- Every time any dependency value changes

**Use case**: 
- Updating UI based on state changes
- Fetching data when a parameter changes
- Syncing with external data

---

## Task 4: Logging Input Changes

```javascript
useEffect(() => {
  if (name) {
    console.log('Name changed to:', name)
  }
}, [name])
```

**Concept**: Similar to Task 3, but demonstrates that you can add conditional logic inside the effect.

**Use case**: 
- Validating input
- Triggering actions based on form changes
- Debouncing search inputs

---

## Task 5: Updating Document Title

```javascript
useEffect(() => {
  document.title = `Count: ${count}`
}, [count])
```

**Concept**: Direct DOM manipulation is a side effect. `useEffect` is the right place to do it.

**Use case**: 
- Updating page title
- Changing meta tags
- Managing focus
- Integrating with third-party libraries

---

## Task 6: Cleanup Function (setInterval)

```javascript
useEffect(() => {
  const intervalId = setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000)

  return () => {
    clearInterval(intervalId)
  }
}, [])
```

**Concept**: 
- **Cleanup function**: Return a function from `useEffect` to clean up resources
- Runs when:
  - Component unmounts (removed from DOM)
  - Before the effect runs again (if dependencies change)

**Why it's important**: 
- Prevents memory leaks
- Stops timers/subscriptions when component is gone
- Cancels pending API requests

**Use case**: 
- Timers (setInterval, setTimeout)
- Event listeners
- WebSocket connections
- API request cancellations

---

## Task 7: Fetching Data on Mount

```javascript
useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await fetch('https://api.github.com/users/octocat')
      const data = await response.json()
      setUserData(data)
    } catch (err) {
      setError(err.message)
    }
  }

  fetchUser()
}, [])
```

**Concept**: 
- **Async operations**: You can't make the effect function itself `async`, but you can call async functions inside it
- **Error handling**: Always handle errors when fetching data
- **Loading states**: Track loading state for better UX

**Use case**: 
- Initial data fetching
- Loading user profiles
- Getting configuration data

---

## Task 8: Fetching on Search (with Debouncing)

```javascript
useEffect(() => {
  if (!searchTerm.trim()) {
    return
  }

  const timeoutId = setTimeout(() => {
    // Fetch data
  }, 500)

  return () => {
    clearTimeout(timeoutId)
  }
}, [searchTerm])
```

**Concept**: 
- **Debouncing**: Wait for user to stop typing before making API calls
- **Cleanup with setTimeout**: Cancel pending timeouts when search term changes
- **Conditional execution**: Return early if conditions aren't met

**Why debounce**: 
- Reduces API calls
- Improves performance
- Better user experience

**Use case**: 
- Search inputs
- Auto-complete
- Form validation

---

## Task 9: Character Count

```javascript
useEffect(() => {
  setCharCount(text.length)
}, [text])
```

**Concept**: 
- **Derived state**: Some state can be calculated from other state
- **Synchronization**: Keep derived values in sync with source values

**Alternative**: You could also calculate this directly without `useEffect`:
```javascript
const charCount = text.length
```

**Use case**: 
- Character/word counts
- Form validation
- Progress calculations

---

## Task 10: localStorage with useEffect

```javascript
// Initialize from localStorage
const [theme, setTheme] = useState(() => {
  const savedTheme = localStorage.getItem('theme')
  return savedTheme || 'light'
})

// Save to localStorage
useEffect(() => {
  localStorage.setItem('theme', theme)
}, [theme])
```

**Concept**: 
- **localStorage**: Browser storage that persists across sessions
- **Lazy initialization**: Use function in `useState` to read from localStorage only once
- **Persistence**: Save state to localStorage whenever it changes

**Why lazy initialization**: 
- Reading from localStorage is synchronous but can be slow
- Only runs once during initialization
- Avoids reading on every render

**Use case**: 
- User preferences
- Form drafts
- Theme settings
- Shopping cart

---

## Common Patterns

### 1. Fetching Data
```javascript
useEffect(() => {
  let cancelled = false
  
  const fetchData = async () => {
    const data = await fetch(url)
    if (!cancelled) {
      setData(data)
    }
  }
  
  fetchData()
  
  return () => {
    cancelled = true
  }
}, [url])
```

### 2. Event Listeners
```javascript
useEffect(() => {
  const handleClick = () => {
    // Handle click
  }
  
  window.addEventListener('click', handleClick)
  
  return () => {
    window.removeEventListener('click', handleClick)
  }
}, [])
```

### 3. Multiple Effects
You can use multiple `useEffect` hooks in one component:
```javascript
useEffect(() => {
  // Effect 1
}, [dependency1])

useEffect(() => {
  // Effect 2
}, [dependency2])
```

---

## Rules of useEffect

1. **Always include dependencies**: If you use a value from component scope, include it in the dependency array
2. **Cleanup resources**: Always clean up timers, subscriptions, and event listeners
3. **Don't lie about dependencies**: ESLint will warn you - listen to it!
4. **Avoid infinite loops**: Make sure dependencies don't change on every render

---

## Common Mistakes

### ❌ Missing Dependencies
```javascript
useEffect(() => {
  console.log(count) // Uses count but not in dependencies
}, []) // Missing count!
```

### ❌ Infinite Loop
```javascript
useEffect(() => {
  setCount(count + 1) // This will cause infinite loop!
}, [count])
```

### ❌ Forgetting Cleanup
```javascript
useEffect(() => {
  setInterval(() => {
    // This keeps running even after component unmounts!
  }, 1000)
}, [])
```

---

## Summary

| Pattern | Dependency Array | When It Runs |
|---------|-----------------|--------------|
| Every render | None | After every render |
| Once on mount | `[]` | Only on mount |
| On dependency change | `[dep1, dep2]` | On mount + when deps change |
| With cleanup | Return function | Cleanup on unmount/before re-run |

---

## Best Practices

1. ✅ Always include all dependencies
2. ✅ Clean up subscriptions and timers
3. ✅ Handle loading and error states
4. ✅ Use cleanup functions
5. ✅ Consider if you really need `useEffect` (some calculations can be done directly)
6. ✅ Keep effects focused (one effect = one concern)

