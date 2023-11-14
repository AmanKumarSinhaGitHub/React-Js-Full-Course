import React from "react";
import "./PlayButton.css";

function PlayButton({ message, children }) {
  function handleClick() {
    alert(message);
  }

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}

export default PlayButton;
