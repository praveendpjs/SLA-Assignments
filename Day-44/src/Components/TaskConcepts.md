## Practice Tasks

- Hello, &lt;name&gt;: Shows a controlled text input. State updates on every `onChange`, and UI echoes the value.
- Uppercase input: Uses `onChange` to transform `event.target.value` with `.toUpperCase()` before saving to state.
- Controlled checkbox: `checked` prop is bound to state; `onChange` reads `event.target.checked` to toggle.
- Country dropdown: `select` element with `value` set from state and `onChange` updating it; options come from a simple array.
- Password match: Two controlled password inputs; a comparison (`password === confirm`) drives live validation text.

## Practical Tasks

- Login form: Controlled email and password fields; `onSubmit` prevents default and logs data.
- Registration form: Multiple controlled fields stored in one object state; spread operator keeps other keys unchanged.
- Profile live preview: Form updates a state object, and preview renders the same state instantly without another submit.
- Non-empty form: Basic validation that trims input and shows an error message instead of submitting empty strings.
- Feedback form: Mixes textarea, select, and checkbox controls; final state is shown and logged on submit.


