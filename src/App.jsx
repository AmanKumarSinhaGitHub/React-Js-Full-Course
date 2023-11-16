import "./App.css";
import { useState, useEffect } from 'react';

function App() {
  // State to store the current time
  const [time, setTime] = useState(new Date());

  // useEffect hook to run side effects
  useEffect(() => {
    // Create an interval that updates the time every second
    const interval = setInterval(() => {
      // Update the time with the current date and time
      setTime(new Date());

      // Check if it's the end of the minute (when seconds become 0)
      if (time.getSeconds() === 0) {
        console.log('End of minute:', time.toLocaleTimeString());
      }
    }, 1000);

    // Clean up the interval when the component unmounts or when 'time' changes
    return () => {
      clearInterval(interval);
    };
  }, [time]); // The effect depends on the 'time' state to check seconds

  // Render the component
  return (
    <div className="container">
      <p><strong>Digital Clock</strong></p>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default App;
