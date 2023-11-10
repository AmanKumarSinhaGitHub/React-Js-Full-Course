import "./App.css";
import Resume from "../components/Resume";
import details from "./data/details";

function App({ isDarkMode }) {
  return (
    <>
      <Resume {...details} />
    </>
  );
}

export default App;
