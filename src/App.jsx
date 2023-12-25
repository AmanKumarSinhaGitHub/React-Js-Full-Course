import "./App.css";
import videosDB from "./data/videosDB";
import { useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {

  console.log("Rendering APP");

  // State to manage the list of videos
  const [videos, setVideos] = useState(videosDB);

  // Function to add a new video to the list
  function addNewVideos(newVideo) {
    setVideos([...videos, { ...newVideo, id: videos.length + 1 }]);
  }

  // Function to add a new video to the list
  function deleteVideo(id) {

    setVideos(videos.filter(video=>video.id!==id))
 
  }


  // Render the main application
  return (
    <>
      {/* Component for adding new videos */}
      <AddVideo addNewVideos={addNewVideos} />

      <div className="App">
        {/* Component for displaying the list of videos */}
        <VideoList deleteVideo={deleteVideo} videos={videos} />
      </div>
    </>
  );
}

export default App;
