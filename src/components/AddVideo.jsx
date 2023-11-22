import { useState } from "react";
import "./AddVideo.css";

// Initial state for a new video
const initialState = {
  time: "1 month ago",
  channel: "Coder Dost",
  verified: true,
  title: "",
  views: ""
}

// Component for adding new videos
function AddVideo({ addNewVideos }) {
  // State to manage input values for a new video
  const [videos, setVideos] = useState(initialState);

  // Handle input change for title and views
  function handleChange(event) {
    setVideos({
      ...videos,
      [event.target.name]: event.target.value,
    });
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    // Call the parent component's function to add the new video
    addNewVideos(videos);
    // Reset form fields to initial state
    setVideos(initialState)
  }

  // Render the form for adding a new video
  return (
    <>
      <div className="formContainer">
        <form>
          {/* Input fields for title and views */}
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Enter Title"
            value={videos.title}
          />
          <input
            onChange={handleChange}
            type="text"
            name="views"
            placeholder="Enter Views"
            value={videos.views}
          />

          {/* Button to submit the form */}
          <div className="addNewVideos">
            <button onClick={handleSubmit}>Add Video</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddVideo;
