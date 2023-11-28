import { useState } from "react";
import "./ResumeEditor.css";

function ResumeEditor() {

  const [details, setDetails] = useState({
    name: "",
    experience: [
      {
        year: "",
        company: "",
        role: "",
      },
    ],
    education: [
      {
        year: "",
        college: "",
      },
    ],
    skills: [],
    hobbies: [],
    interests: [],
  });

  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [experience, setExperience] = useState({
    year: "",
    company: "",
    role: "",
  });
  const [education, setEducation] = useState({
    year: "",
    college: "",
  });
  const [hobby, setHobby] = useState("");
  const [interest, setInterest] = useState("");




  
  function handleChangeName(e) {
    setName(e.target.value);
    console.log(e.target.value, e.target.name);
  }

  function handleClickName() {
    if (name.trim() !== "") {
      setDetails((prevDetails) => ({
        ...prevDetails,
        name: name,
      }));

      setName("");
    }
    console.log("All Names are", details.name);
  }





  function handleChangeSkill(e) {
    setSkill(e.target.value);
    console.log(e.target.value, e.target.name);
  }

  function handleClickSkill() {
    if (skill.trim() !== "") {
      setDetails((prevDetails) => ({
        ...prevDetails,
        skills: [...prevDetails.skills, skill],
      }));

      setSkill("");
    }
    console.log("All Skills are", details.skills);
  }






  function handleChangeExperience(e) {
    setExperience((prevExperience) => ({
      ...prevExperience,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClickExperience() {
    if (experience.year.trim() !== "" && experience.company.trim() !== "" && experience.role.trim() !== "") {
      setDetails((prevDetails) => ({
        ...prevDetails,
        experience: [...prevDetails.experience, experience],
      }));

      setExperience({
        year: "",
        company: "",
        role: "",
      });
    }
    console.log("All Experiences are", details.experience);
  }






  function handleChangeEducation(e) {
    setEducation((prevEducation) => ({
      ...prevEducation,
      [e.target.name]: e.target.value,
    }));
  }

  function handleClickEducation() {
    if (education.year.trim() !== "" && education.college.trim() !== "") {
      setDetails((prevDetails) => ({
        ...prevDetails,
        education: [...prevDetails.education, education],
      }));

      setEducation({
        year: "",
        college: "",
      });
    }
    console.log("All Education details are", details.education);
  }






  function handleChangeHobby(e) {
    setHobby(e.target.value);
    console.log(e.target.value, e.target.name);
  }

  function handleClickHobby() {
    if (hobby.trim() !== "") {
      setDetails((prevDetails) => ({
        ...prevDetails,
        hobbies: [...prevDetails.hobbies, hobby],
      }));

      setHobby("");
    }
    console.log("All Hobbies are", details.hobbies);
  }





  
  function handleChangeInterest(e) {
    setInterest(e.target.value);
    console.log(e.target.value, e.target.name);
  }

  function handleClickInterest() {
    if (interest.trim() !== "") {
      setDetails((prevDetails) => ({
        ...prevDetails,
        interests: [...prevDetails.interests, interest],
      }));

      setInterest("");
    }
    console.log("All Interests are", details.interests);
  }

  return (
    <>
      <div className="container">
        <h1>Resume Editor</h1>

        <label>
          Name
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            value={name}
            onChange={handleChangeName}
          />
          <button className="btn" onClick={handleClickName}>
            ADD
          </button>
        </label>

        <h1>{details.name}</h1>

        <label>
          Skill
          <input
            type="text"
            placeholder="enter your skill"
            name="skill"
            value={skill}
            onChange={handleChangeSkill}
          />
          <button className="btn" onClick={handleClickSkill}>
            ADD
          </button>
        </label>

        <label>
          Experience
          <input
            type="text"
            placeholder="year"
            name="year"
            value={experience.year}
            onChange={handleChangeExperience}
          />
          <input
            type="text"
            placeholder="company"
            name="company"
            value={experience.company}
            onChange={handleChangeExperience}
          />
          <input
            type="text"
            placeholder="role"
            name="role"
            value={experience.role}
            onChange={handleChangeExperience}
          />
          <button className="btn" onClick={handleClickExperience}>
            ADD
          </button>
        </label>

        <label>
          Education
          <input
            type="text"
            placeholder="year"
            name="year"
            value={education.year}
            onChange={handleChangeEducation}
          />
          <input
            type="text"
            placeholder="college"
            name="college"
            value={education.college}
            onChange={handleChangeEducation}
          />
          <button className="btn" onClick={handleClickEducation}>
            ADD
          </button>
        </label>

        <label>
          Hobby
          <input
            type="text"
            placeholder="enter your hobby"
            name="hobby"
            value={hobby}
            onChange={handleChangeHobby}
          />
          <button className="btn" onClick={handleClickHobby}>
            ADD
          </button>
        </label>

        <label>
          Interest
          <input
            type="text"
            placeholder="enter your interest"
            name="interest"
            value={interest}
            onChange={handleChangeInterest}
          />
          <button className="btn" onClick={handleClickInterest}>
            ADD
          </button>
        </label>

        <h2>All Experiences:</h2>
        <ul>
          {details.experience.map((exp, index) => (
            <li key={index}>{`${exp.year} - ${exp.company}: ${exp.role}`}</li>
          ))}
        </ul>

        <h2>All Education:</h2>
        <ul>
          {details.education.map((edu, index) => (
            <li key={index}>{`${edu.year} - ${edu.college}`}</li>
          ))}
        </ul>

        <h2>All Skills:</h2>
        <ul>
          {details.skills.map((s, index) => (
            <li key={index}>{s}</li>
          ))}
        </ul>

        <h2>All Hobbies:</h2>
        <ul>
          {details.hobbies.map((h, index) => (
            <li key={index}>{h}</li>
          ))}
        </ul>

        <h2>All Interests:</h2>
        <ul>
          {details.interests.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ResumeEditor;
