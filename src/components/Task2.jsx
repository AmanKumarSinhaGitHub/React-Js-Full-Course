function Task2() {

  function handleSubmit(e) {
    // Prevents the default form submission behavior i.e reloading the webpage
    e.preventDefault(); 

    // Custom logic for handling form submission
    alert("Form submitted!");
  }
  return (
    <>
      <div className="container" onSubmit={handleSubmit}>
        <h1>Task 2</h1>
        <form>
          <input type="text" className="input " placeholder="enter text here" />

          <button className="btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Task2;
