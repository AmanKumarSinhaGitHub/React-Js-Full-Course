import { useState } from "react";
import "./ResumeEditor.css";

function ResumeEditor() {

  const [data, setdata] = useState({
    skills: [],
    interests: []
  })
  
  const [skill, setSkill] = useState('')

  function handleSkillAdd(e){
    e.preventDefault();
    console.log("Skill Added", skill)
    setSkill('');
  }

  function handleChange(e){
    setSkill(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <div className="container">
        <h1>Resume Editor</h1>

        <label>
          <h3>Add Your Skills</h3>
          <input type="text" name="skill" placeholder="Enter-skill" onChange={handleChange}/>
        </label>

        <button type="submit" className="btn" onClick={handleSkillAdd}>
          ADD
        </button>
      </div>
    </>
  );
}

export default ResumeEditor;
