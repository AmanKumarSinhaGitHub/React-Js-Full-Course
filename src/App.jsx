import "./App.css";
import Resume from "../components/Resume";
import ResumeCreator from "../components/ResumeCreator";
import { useState } from "react";

function App() {
  
  const [details, setDetails] = useState({
    name: "",
    experience: [],
    education: [],
    skills: [],
    hobbies: [],
    interests: [],
  });

  function getUserDetails(userDetails){
    setDetails(userDetails)
  }

  return (
    <>
      <ResumeCreator getDetails={getUserDetails}/>
      <Resume {...details} />
    </>
  );
}

export default App;
