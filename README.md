# Chapter 3 - Conditional Rendering & Lists

Welcome to Chapter 3 of our ReactJS tutorial series! In this chapter, we'll dive into the concepts of conditional rendering and working with lists in React. These are crucial skills that will enhance the flexibility and dynamism of your React applications.

### 1. Conditional Rendering

Conditional rendering allows you to display different components or content based on certain conditions. In React, this is achieved using JavaScript's conditional statements within your JSX.

#### Example:

```jsx
function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <WelcomeUser /> : <Login />}
    </div>
  );
}
```

In the example above, the `WelcomeUser` component will be rendered if `isLoggedIn` is `true`, otherwise, the `Login` component will be rendered.

#### Additional Example with && Operator:

```js
function DiscountMessage({ hasDiscount }) {
  return (
    <div>
      {hasDiscount && <p>Great news! You have a special discount applied.</p>}
    </div>
  );
}
```
In this example, if hasDiscount is true, the paragraph element ```<p>Great news! You have a special discount applied.</p>``` will be rendered. If hasDiscount is false (or falsy), nothing will be rendered.

### 2. Lists in React

Working with lists is a common task in web development. React makes it easy to render dynamic lists by mapping over an array of data.

#### Example:

```jsx
function ListExample() {
  const fruits = ['Apple', 'Banana', 'Orange'];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

In the example above, the `map` function is used to iterate over the `fruits` array and create a list item for each fruit.

### 3. Key Prop

When rendering dynamic lists in React, it's important to provide a unique `key` prop to each element. This helps React identify which items have changed, been added, or been removed. In the above example, `key={index}` is used, but it's often better to use a unique identifier from your data.

### Summary

Conditional rendering and working with lists are fundamental skills in React development. Mastering these concepts will allow you to create more dynamic and interactive user interfaces. Stay tuned for Chapter 4.

Happy coding! 🚀