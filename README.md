# Chapter 9 - Context API & useContext

## Overview

Welcome to Chapter 9 of our beginner-friendly guide to React! In this chapter, we'll explore the Context API and the `useContext` hook. These tools are essential for efficiently passing data through the component tree without having to manually pass props at every level.

## What is the Context API?

The Context API is a part of React that enables the sharing of values (like themes, user authentication status, etc.) across components, regardless of how deep they are nested in the component tree.

## When to use Context API & `useContext`?

Consider using the Context API and `useContext` when:

1. **Prop Drilling Becomes Cumbersome:** When passing props through multiple levels of components becomes impractical.

2. **Global State Management:** For managing global state that needs to be accessed by various components.

3. **Themable Components:** When you want to provide a theme or styling information to various components.

## How to use Context API & `useContext`

### 1. **Create a Context:**

   ```jsx
   import React, { createContext } from 'react';
   
   const MyContext = createContext();
   ```

### 2. **Wrap Components with Provider:**

   Wrap your components with the `Provider` to make the context available to them.

   ```jsx
   const App = () => {
     return (
       <MyContext.Provider value={/* your value */}>
         {/* Your components */}
       </MyContext.Provider>
     );
   };
   ```

### 3. **Use `useContext` in Child Components:**

   Access the context value using the `useContext` hook.

   ```jsx
   import React, { useContext } from 'react';
   
   const MyComponent = () => {
     const contextValue = useContext(MyContext);
     // ...
   };
   ```

## Example

Let's create a simple example where we use the Context API to manage the theme of our application:

```jsx
import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const ThemeContext = createContext();

const App = () => {
  // Step 2: Wrap components with Provider
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Your components */}
    </ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  // Step 3: Use useContext in Child Components
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
};
```

## Conclusion

Congratulations! You've now learned about the Context API and how to use the `useContext` hook. This knowledge will empower you to manage state and share values efficiently across your React application. Feel free to experiment with different use cases and integrate context into your projects for cleaner and more maintainable code. Happy coding!