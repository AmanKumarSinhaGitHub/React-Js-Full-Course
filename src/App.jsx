import "./App.css";
import Resume from "../components/Resume";
import details from "./data/details";

function App() {
  return (
    <>
      <Resume {...details} />
    </>
  );
}

export default App;
