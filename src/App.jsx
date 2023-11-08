import "./App.css";
import Resume from "../components/Resume";

function App() {

  const details = {
    name: "Aman Kumar Sinha",
    experience: 
    [
      { 
        year: 2023, company: "xyz", role: "Frontend Developer" 
      },

      {
        year: 2022, company: "abc", role: "Backend Developer"
      }
    ],
    education: [
      {
        year: 2020, college: "Sahyogi High School"
      },

      {
        year: 2023, college: "R.N. College"
      },
    ],
    skills: ["react js", "node js", "express", "mongodb"],
  };

  return (
    <>
      <Resume {...details} />
    </>
  );
}

export default App;
