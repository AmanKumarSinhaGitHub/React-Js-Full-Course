# Chapter 2 -   Components - JSX and Props

React is a popular JavaScript library for building user interfaces, and these concepts are fundamental to understanding how React applications are structured and how data is passed between components.

## Components
In React, components are the building blocks of user interfaces. They allow you to split your user interface into independent, reusable pieces. Components can be classified into two main types: functional components and class components.

### Functional Components
Functional components are simpler and have a more straightforward syntax. They are defined as JavaScript functions and are the preferred way of defining components for many use cases. Example:
```jsx
function FunctionalComponent(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
```

### Class Components
Class components are the traditional way of defining React components. They are defined as ES6 classes and are useful for more complex components that need to maintain state or lifecycle methods. Example:
```jsx
class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
```

## JSX (JavaScript XML)
JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It's used in React to define the structure and appearance of your components. JSX elements can be thought of as "HTML in JavaScript." Example:
```jsx
const element = <h1>Hello, JSX!</h1>;
```

## Props
Props (short for properties) are a way of passing data from parent components to child components in React. They are read-only and help make components reusable and dynamic.

### Passing Props
To pass props from a parent component to a child component, you include attributes on the child component's JSX element. For example:
```jsx
<ChildComponent name="John" age={30} />
```

### Using Props in a Component
In the child component, you can access the props that were passed by referencing `this.props` in class components or using the `props` argument in functional components. For example:
```jsx
function ChildComponent(props) {
  return (
    <p>{`My name is ${props.name} and I am ${props.age} years old.`}</p>
  );
}
```

## Conclusion
Components, JSX, and Props are essential concepts in React development. Components are the building blocks of your user interface, JSX is used to describe component structure, and props enable data flow between components. Understanding these concepts is crucial for building dynamic and reusable web applications using React.