function Task3() {

  function handleKeyPress(event) {
    console.log(event.key); // Shows which key is pressed.

    if (event.key == "Enter") alert("Enter Key Pressed");
  }
  
  return (
    <>
      <div className="container">
        <h1>Task 3</h1>

        <input
          type="text"
          className="input "
          placeholder="enter text here"
          onKeyDown={handleKeyPress}
        />
      </div>
    </>
  );
}

export default Task3;
