import { useState } from "react";
import "./Resume.css";

function Resume({ name, experience, education, skills, hobbies, interests }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  function handleClickByPrinting() {
    window.print();
  }

  return (
    <>
      <div className={`${isDarkMode ? "dark-theme" : "light-theme"}`}>
        <div id="header" />
        <div className="left" />
        <div className="stuff">
          <br />
          <br />

          <h1 className="title">Resume</h1>

          <button className="btn print" onClick={handleClickByPrinting}>
            PRINT
          </button>

          {/* When button is click, change theme */}
          <button className="btn mode" onClick={toggleDarkMode}>
            Switch to {`${isDarkMode ? "Light Mode" : "Dark Mode"}`}
          </button>

          <h2>{name}</h2>
          <hr />
          <br />

          {skills.length > 0 && skills.length <= 10 && (
            <>
              <div className="section">
                <p className="head">Skills</p>
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {education.length > 0 && education.length <= 10 && (
            <>
              <div className="section">
                <p className="head">Education</p>
                <ul>
                  {education.map((edu, index) => (
                    <li key={index}>
                      {edu.college} - {edu.year}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {experience.length > 0 && experience.length <= 10 && (
            <>
              <div className="section">
                <p className="head">Experience</p>
                <ul>
                  {experience.map((exp, index) => (
                    <li key={index}>
                      {exp.year} - {exp.company}, {exp.role}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {hobbies.length > 0 && hobbies.length <= 10 && (
            <>
              <div className="section">
                <p className="head">Hobbies</p>
                <ul>
                  {hobbies.map((hobbie, index) => (
                    <li key={index}>{hobbie}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {interests.length > 0 && interests.length <= 10 && (
            <>
              <div className="section">
                <p className="head">Interests</p>
                <ul>
                  {interests.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        <div className="right" />
        <div id="footer">
          <h2 id="name">{name}</h2>
        </div>
      </div>
    </>
  );
}

export default Resume;
