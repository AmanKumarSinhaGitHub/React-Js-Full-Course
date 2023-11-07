import "./App.css";
import Thumbnail from "./components/Thumbnail";

function App() {
  return (
    <>
      <div>
        <h1>Welcome to REACT JS</h1>
      </div>
      <div className="thumbnail-container">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    </>
  );
}

export default App;
