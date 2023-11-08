import { cloneElement } from "react";
import "./Resume.css";

function Resume({ name, experience, education, skills }) {
  return (
    <>
      <div id="header" />
      <div className="left" />
      <div className="stuff">
        <br />
        <br />

        <h1>Resume</h1>
        <h2>{name}</h2>
        <hr />
        <br />

        <p className="head">Skills</p>
        <ul>
          {
            skills.map((skill, index)=>(
              <li key={index}>
              {skill}
              </li>
            ))
          }
        </ul>

        <p className="head">Education</p>
        <ul>
          {
            education.map((edu, index)=>(
              <li key={index}>
                {edu.college} - {edu.year}
              </li>
            ))
          }
        </ul>

        <p className="head">Experience</p>
        <ul>
          {experience.map((exp, index) => (
            <li key={index}>
              {exp.year} - {exp.company}, {exp.role}
            </li>
          ))}
        </ul>
      </div>


      <div className="right" />
      <div id="footer">
        <h2 id="name">{name}</h2>
      </div>
    </>
  );
}

export default Resume;
