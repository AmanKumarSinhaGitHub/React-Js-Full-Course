import React, { useState } from "react";
import "./PlayButton.css";

// PlayButton component for playing and pausing videos
function PlayButton({ children, myCustomOnPlayFunc, myCustomOnPauseFunc }) {
  
  // Logging to the console to indicate when the PlayButton component is rendered
  console.log("Rendering Play-Pause BUTTON");

  // State to manage the playing state of the video
  const [playing, setPlaying] = useState(false);

  // Function to handle the click event on the button
  function handleClick(e) {
    // Stops event bubbling
    e.stopPropagation();

    // Call the appropriate custom function based on the playing state
    if (playing) {
      myCustomOnPauseFunc();
    } else {
      myCustomOnPlayFunc();
    }

    // Update the state to the opposite value
    setPlaying(!playing);
  }

  // Render the button with appropriate text based on playing state
  return (
    <>
      <button onClick={handleClick}>
        {/* Displaying the status and play/pause icon based on the playing state */}
        {children} : {playing ? "⏸️" : "▶️"}
      </button>
    </>
  );
}

export default PlayButton;
