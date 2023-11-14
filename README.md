# Chapter 4 - React Events and Event Bubbling

React events are a way for React components to communicate with each other and with the outside world. When a user interacts with a React component, such as by clicking a button or typing in a text input, React generates an event. React components can listen for these events and take action accordingly.

Event bubbling is a mechanism that allows React events to be propagated up the DOM tree. When an event is triggered on an element, it is also triggered on all of the element's ancestors. This allows React components to listen for events that are triggered on their child components.

### Event Handling in React

To handle events in React, you can use the `addEventListener()` method to attach an event listener to an element. The event listener is a function that will be called when the event is triggered.

However, it is more common to use React's built-in event handlers, such as `onClick` and `onSubmit`. These event handlers are more concise and easier to use than the `addEventListener()` method.

For example, the following code attaches an event listener to a button element using the `onClick` event handler:

```javascript
const Button = () => {
  const handleClick = () => {
    // Handle the click event
  };

  return <button onClick={handleClick}>Click Me!</button>;
};
```

The `handleClick()` function will be called when the user clicks on the button.

### Event Bubbling

When an event is triggered on an element, it is also triggered on all of the element's ancestors. This is known as event bubbling.

Event bubbling can be useful for listening for events that are triggered on child components. For example, you could attach an event listener to the `<body>` element that will be called when any button element on the page is clicked.

However, event bubbling can also be problematic. For example, if you have two nested buttons and you attach an event listener to the outer button, the event listener will be called twice: once when the outer button is clicked and once when the inner button is clicked.

To avoid this problem, you can use the `stopPropagation()` method to prevent an event from bubbling up the DOM tree.

For example, the following code attaches an event listener to the inner button that will stop the event from bubbling up to the outer button:

```javascript
const Button = () => {
  const handleClick = (e) => {
    // Handle the click event
    e.stopPropagation();
  };

  return <button onClick={handleClick}>Inner Button</button>;
};
```

### Conclusion

React events and event bubbling are powerful tools that can be used to create interactive user interfaces. By understanding how these concepts work, you can write more efficient and effective React code.

<br>

# React Card Component

This project demonstrates the usage of a simple `Card` component in React. The `Card` component is implemented as a functional component, utilizing the `children` prop to dynamically render content.

## Card Component

### Code

```jsx
// Card.jsx
import "./Card.css";

function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
```

### Styling

```css
/* Card.css */
.card {
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px;
}

.card h2 {
  color: rgb(227, 218, 218);
}

.card-body {
  margin-top: 8px;
}
```

## Usage

### App Component

#### Code

```jsx
// App.jsx
import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Card Component Example</h1>

      <Card title="Card 1">
        <p>This is the content of Card 1.</p>
      </Card>

      <Card title="Card 2">
        <p>This is the content of Card 2.</p>
        <p>It can have multiple paragraphs.</p>
      </Card>
    </div>
  );
}

export default App;
```

### Styling

```css
/* App.css */
.App {
  text-align: center;
  font-family: Arial, sans-serif;
}
```

## Conclusion

The `Card` component showcases the usage of functional components in React, leveraging the `children` prop for dynamic content. This pattern enhances reusability and flexibility in building components with varying content.

Feel free to customize and integrate this `Card` component into your React project based on your specific requirements.

---
