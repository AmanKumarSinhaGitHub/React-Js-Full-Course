import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // State to track whether the stopwatch is running or not
  const [isRunning, setIsRunning] = useState(false);

  // State to track the elapsed time in seconds
  const [elapsedTime, setElapsedTime] = useState(0);

  // useEffect hook to handle the stopwatch logic
  useEffect(() => {
    let interval;

    // If the stopwatch is running, set up an interval to update the elapsed time
    if (isRunning) {
      interval = setInterval(() => {
        // Update elapsed time by 1 second
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      // If the stopwatch is not running, clear the interval
      clearInterval(interval);
    }

    // Cleanup function to clear the interval when the component is unmounted or when isRunning changes
    return () => clearInterval(interval);
  }, [isRunning]);

  // Function to handle the start button click
  const handleStart = () => {
    setIsRunning(true);
  };

  // Function to handle the stop button click
  const handleStop = () => {
    setIsRunning(false);
  };

  // Function to handle the reset button click
  const handleReset = () => {
    // Stop the stopwatch and reset the elapsed time
    setIsRunning(false);
    setElapsedTime(0);
  };

  // Function to format the elapsed time into a readable format (hh:mm:ss)
  const formatTime = (timeInSeconds) => {
    // Calculate the number of hours in the elapsed time
    const hours = Math.floor(timeInSeconds / 3600);

    // Calculate the remaining minutes after removing the hours
    const minutes = Math.floor((timeInSeconds % 3600) / 60);

    // Calculate the remaining seconds after removing the hours and minutes
    const seconds = timeInSeconds % 60;

    // Convert each component (hours, minutes, seconds) to a string and pad with '0' if necessary
    // The `padStart(2, '0')` ensures that each component is represented by at least two digits
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Return the formatted time as a string
    return formattedTime;
  };


  return (
    <div className='container'>

      <div className="headingContainer">
        <h1>Stopwatch</h1>
        <p><strong>Time: {formatTime(elapsedTime)}</strong></p>
      </div>

      <div className="buttonContainer">

        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>

        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>

        <button onClick={handleReset}>
          Reset
        </button>
      </div>

    </div>
  );
}

export default App;
