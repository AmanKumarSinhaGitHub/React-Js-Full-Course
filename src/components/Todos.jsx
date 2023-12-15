import React from "react";
import Checkbox from "@mui/material/Checkbox";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Todos({ taskList, setTaskList }) {
  function handleChangeCheckBox(index) {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].isChecked = !updatedTaskList[index].isChecked;
    setTaskList(updatedTaskList);
  }

  function handleDeleteTask(index) {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  }

  function handleTaskUp(index) {
    if (index !== 0) {
      const updatedTaskList = [...taskList];
      const temp1 = updatedTaskList[index];
      const temp2 = updatedTaskList[index - 1];
      updatedTaskList[index] = temp2;
      updatedTaskList[index - 1] = temp1;
      setTaskList(updatedTaskList);
    }
  }

  function handleTaskDown(index) {
    if (index !== taskList.length - 1) {
      const updatedTaskList = [...taskList];
      const temp1 = updatedTaskList[index];
      const temp2 = updatedTaskList[index + 1];
      updatedTaskList[index] = temp2;
      updatedTaskList[index + 1] = temp1;
      setTaskList(updatedTaskList);
    }
  }

  return (
    <>
      <section className="todoListContainer">
        {taskList.map((task, index) => (
          <div key={index} className="todoItem">
            <div className="container">
              <div className="checkBox">
                <Checkbox
                  sx={{
                    color: "rgba(227, 221, 211, 0.428)",
                  }}
                  checked={task.isChecked}
                  onChange={() => handleChangeCheckBox(index)}
                />
              </div>

              <div className="itemName">
                <p className={task.isChecked ? "strikethrough" : ""}>
                  {task.text}
                </p>
              </div>
            </div>

            <div className="icons">
              <KeyboardArrowUpIcon
                onClick={() => handleTaskUp(index)}
                sx={{
                  cursor: "pointer",
                  fontSize: "2em",
                  transition: "font-size 0.3s",
                  ":hover": {
                    fontSize: "2.05em",
                    color: "#59C2FF",
                  },
                }}
              />

              <KeyboardArrowDownIcon
                onClick={() => handleTaskDown(index)}
                sx={{
                  cursor: "pointer",
                  fontSize: "2em",
                  transition: "font-size 0.3s",
                  ":hover": {
                    fontSize: "2.05em",
                    color: "#59C2FF",
                  },
                }}
              />

              <ClearIcon
                onClick={() => handleDeleteTask(index)}
                sx={{
                  cursor: "pointer",
                  fontSize: "1.7em",
                  transition: "font-size 0.3s",
                  ":hover": {
                    fontSize: "1.75em",
                    color: "#59C2FF",
                  },
                }}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Todos;
