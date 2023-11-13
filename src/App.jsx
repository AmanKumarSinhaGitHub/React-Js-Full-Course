import { useState } from "react";
import "./App.css";

function App() {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  let imgClass = "image";

  function handleMouseEnter() {
    setIsMouseEnter(true);
  }

  function handleMouseLeave() {
    setIsMouseEnter(false);
  }

  {
    isMouseEnter ? (imgClass = "increaseSize") : (imgClass = "image");
  }

  function handleDoubleClick() {
    alert("Double Clicked on Button");
  }

  function handleSingleClick() {
    console.log("Button Clicked");
    // Ans : Task 1 : Yes, Console log printed twice when double click
  }

  function handleFocus() {
    console.log("focused on input textbox");
  }

  function handleBlur() {
    console.log("Out of input textbox");
  }

  function handleCopy() {
    alert("Text copied");
  }

  function handleCut() {
    alert("Text Cut");
  }

  function handlePaste() {
    alert("Text Pasted");
  }

  return (
    <>
      <div className="container">
        <h1>React Js</h1>

        <img
          src="/images/wallpaper.png"
          alt="img"
          className={imgClass}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        {isMouseEnter ? <p>Mouse is Over</p> : <p>Mouse is Out</p>}

        <input
          type="text"
          className="input "
          placeholder="enter text here"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCopy={handleCopy}
          onCut={handleCut}
          onPaste={handlePaste}
        />

        <button
          className="btn"
          onDoubleClick={handleDoubleClick}
          onClick={handleSingleClick}
        >
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
