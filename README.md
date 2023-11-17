# Timer

Implement a simple TIMER that displays the elapsed time since the start button was pressed, and it can be stopped and reset. Like a stopwatch.

## UseEffect Snippet

```js
useEffect(() => {
  // Setup logic

  return () => {
    // Cleanup logic
  };
}, [/*Dependency*/]);
```

### Understanding React useEffect

A simple example to help you understand how to use the `useEffect` hook in a React component.


## Usage

In this example, we have a React component (`YourComponent`) that utilizes the `useEffect` hook. The `useEffect` hook is used to manage side effects in a React component. Let's break down how it works:

```jsx
import React, { useState, useEffect } from 'react';
import YourComponent from './YourComponent';

const YourApp = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This is the code that runs when the component mounts or when the 'third' dependency changes

    // Side effect logic (first)

    return () => {
      // This is the cleanup code that runs before the next effect runs or when the component unmounts

      // Cleanup logic (second)
    };
  }, [dependency]); // 'dependency' is a placeholder for the variable your effect depends on

  return (
    <div>
      <YourComponent data={data} />
    </div>
  );
};

export default YourApp;
```

### Understanding the `useEffect` Hook

#### 1. Effect Code (Runs on Mount and whenever 'third' Changes):

- The function passed to `useEffect` contains the code that you want to run as a side effect when the component mounts or when the value of the dependency `'third'` changes.
- In our example, we've labeled this code as "first."

#### 2. Cleanup Code (Runs before the Next Effect or on Unmount):

- The function returned from `useEffect` (the cleanup function) contains the code that should be executed before the next effect runs or when the component unmounts.
- In our example, we've labeled this code as "second."

#### 3. Dependency Array `[third]`:

- The dependency array `[third]` specifies that the effect should run whenever the value of the variable `'third'` changes. If `'third'` is an array, the effect would run if any element in the array changes.
- If the dependency array is empty (`[]`), the effect would only run once after the initial render, and there would be no cleanup.

### Notes:
#### ```setInterval()``` and ```clearInterval()```

- In JavaScript, the clearInterval function is used to stop the repeated execution of code that was initiated by the setInterval function. 

- The setInterval function schedules the execution of a function or a piece of code at specified intervals.