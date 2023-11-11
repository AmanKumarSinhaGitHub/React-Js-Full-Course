import React from "react";
import "./PlayButton.css";

function PlayButton({message, children }) { 

  const handleClick = () => {
    
    console.log({ message });
  };

  return (
    <>
      <button onClick={handleClick} className="button">
        {children} Click me
      </button>
    </>
  );
}

export default PlayButton;
