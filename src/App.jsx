import "./App.css";
import Resume from "../components/Resume";
import details from "./data/details";
import ResumeEditor from "../components/ResumeEditor";

function App() {
  return (
    <>
      <Resume {...details} />
      <ResumeEditor/>
    </>
  );
}

export default App;
