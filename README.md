# Chapter 5 - State, useState Hooks

This chapter explores the concept of state in React and introduces the `useState` hook, a fundamental part of managing state in functional components. Understanding state is crucial for building dynamic and interactive user interfaces.

## State in React

In React, state is a mechanism for a component to maintain and manage its own data. It allows components to be aware of changes and update their UI accordingly. Stateful components have a dynamic behavior as they can change their state over time.

## Introduction to useState Hook

The `useState` hook is a feature introduced in React to allow functional components to manage state. It provides a way to declare state variables and update them within functional components, making it easier to work with state in a more concise and readable manner.

## Usage

To use the `useState` hook, you need to import it from the 'react' library and then declare a state variable with an initial value.

```jsx
import React, { useState } from 'react';

function MyComponent() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // ... rest of the component code
}
```

The `useState` hook returns an array with two elements: the current state value (`count`) and a function (`setCount`) to update the state.

## Examples

Here's a simple example of a counter component using the `useState` hook:

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

This component maintains a count state, and the button increments the count when clicked.

