# Chapter 6 - Form, Synthetic Event Object & Lifting State Up

Welcome to Chapter 6. In this chapter, we'll delve into the fundamental concepts of working with forms, understanding the Synthetic Event Object in React, and mastering the powerful pattern of Lifting State Up.

## Form Implementation

### What is a Form in React?

A form in React is a way to capture and handle user input. It typically consists of input fields, checkboxes, radio buttons, and buttons for submission. In this chapter, we'll explore how to create and manage forms using the latest features of React.

### How to Implement a Form?

To create a form in React, follow these basic steps:

1. Use the `useState` hook to manage the form data.
2. Attach event handlers to form elements to capture user input.
3. Handle form submission using the `onSubmit` event.

```jsx
import React, { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
```

## Synthetic Event Object

### What is the Synthetic Event Object?

In React, events are normalized into a cross-browser compatible object called the Synthetic Event Object. This abstraction provides a consistent interface for handling events, regardless of the underlying browser differences.

```jsx
import React from 'react';

function MyComponent() {
  const handleClick = (e) => {
    // Access event properties in a consistent way
    console.log(e.target.value);
  };

  return <button onClick={handleClick}>Click Me</button>;
}

export default MyComponent;
```

## Lifting State Up

### What is Lifting State Up?

Lifting State Up is a React pattern where you move the state of a component upwards to its nearest common ancestor. This allows you to share state among multiple components, facilitating better control and communication between them.

```jsx
import React, { useState } from 'react';

function ParentComponent() {
  const [sharedState, setSharedState] = useState('');

  const handleStateChange = (newState) => {
    setSharedState(newState);
  };

  return (
    <div>
      <ChildComponent sharedState={sharedState} onStateChange={handleStateChange} />
    </div>
  );
}

function ChildComponent({ sharedState, onStateChange }) {
  const handleChange = (e) => {
    const newState = e.target.value;
    onStateChange(newState);
  };

  return <input type="text" value={sharedState} onChange={handleChange} />;
}

export default ParentComponent;
```

