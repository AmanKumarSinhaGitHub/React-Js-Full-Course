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

        <input type="text" className="input " placeholder="enter text here" />

        <button className="btn">Click Me</button>
      </div>
    </>
  );
}

export default App;
