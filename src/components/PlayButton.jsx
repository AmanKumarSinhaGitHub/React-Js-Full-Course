import React, { useState } from "react";
import "./PlayButton.css";

function PlayButton({ children, myCustomOnPlayFunc, myCustomOnPauseFunc }) {
  const [playing, setPlaying] = useState(false);

  function handleClick(e) {
    // Stops event bubbling
    e.stopPropagation();
    
    if (playing) {
      myCustomOnPauseFunc();
    } else {
      myCustomOnPlayFunc();
    }

    // Update the state to the opposite value
    setPlaying(!playing);

    
  }

  return (
    <>
      <button onClick={handleClick}>
        {children} : {playing ?"⏸️" : "▶️" }
      </button>
    </>
  );
}

export default PlayButton;
