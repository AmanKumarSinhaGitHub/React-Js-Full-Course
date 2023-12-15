import React, { useState, useEffect } from "react";
import "./App.css";
import TaskInputForm from "./components/TaskInputForm";
import Todos from "./components/Todos";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(null); // Set initial state to null
  const [inputError, setInputError] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

    // Set the taskList state only if it's null
    if (taskList === null) {
      setTaskList(storedTaskList);
    }
  }, [taskList]);

  // Save tasks to localStorage whenever taskList changes
  useEffect(() => {
    if (taskList !== null) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }, [taskList]);

  function handleClickTaskAdd() {
    const formattedTask = task.trim().toLowerCase();

    if (formattedTask === "") {
      setInputError(true);

      setTimeout(() => {
        setInputError(false);
      }, 500);

      return;
    }

    if (taskList.some((t) => t.text.toLowerCase() === formattedTask)) {
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 1500);

      setTask("");

      return;
    }

    // Update taskList state and localStorage
    const updatedTaskList = [...(taskList || []), { text: task, isChecked: false }];
    setTaskList(updatedTaskList);
    setTask("");
  }

  function handleChange(e) {
    setTask(e.target.value);
  }

  return (
    <>
      <Header />

      <main>
        <TaskInputForm
          inputError={inputError}
          task={task}
          handleChange={handleChange}
          handleClickTaskAdd={handleClickTaskAdd}
        />

        <Todos taskList={taskList || []} setTaskList={setTaskList} />

        {showPopup && (
          <div className="popup">
            <p>Task already exists!</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
