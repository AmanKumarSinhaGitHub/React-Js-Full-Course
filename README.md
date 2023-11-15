# Chapter 5 - State Management with `useState` Hooks

## Introduction

In React.js, "state" refers to the internal data that a component manages. The state of a component can change over time in response to user interactions, network responses, or other events. React components can have state, and when the state of a component changes, React will automatically re-render the component to reflect the updated state.

Managing state is a crucial aspect of building dynamic and interactive user interfaces. The `useState` hook is a fundamental tool for handling state in functional components. This chapter will explore how to use the `useState` hook to manage state within your React applications.

## Getting Started

To use `useState`, you first need to import it from the 'react' package.

```jsx
import React, { useState } from 'react';
```

## Creating State Variables

To create state variables, you can use the `useState` function, which returns an array containing the current state value and a function to update it.

```jsx
const ExampleComponent = () => {
  // Syntax: const [state, setState] = useState(initialState);
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

In this example, `count` is the state variable, and `setCount` is the function to update its value. The initial state is set to 0.

## Updating State

When updating state, it's important to use the provided function (`setCount` in this case) rather than modifying the state variable directly. This ensures that React can properly manage state updates and trigger re-renders.

```jsx
<button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count - 1)}>Decrement</button>
```

## Functional Updates

`useState` also allows you to use functional updates, which can be useful when the new state depends on the previous state.

```jsx
<button onClick={() => setCount((prevCount) => prevCount + 1)}>Increment</button>
```

## Multiple State Variables

You can use `useState` multiple times in a component to manage multiple pieces of state.

```jsx
const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Typed Text: {text}</p>
    </div>
  );
};
```

## Conclusion

The `useState` hook is a powerful tool for managing state in functional components. By understanding how to create and update state variables, you can build dynamic and responsive React applications.