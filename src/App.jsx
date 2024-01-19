import "./App.css";
import videosDB from "./data/videosDB";
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  console.log("Rendering APP");

  const [editableVideo, setEditableVideo] = useState(null);

  const [videos, dispatch] = useReducer(videosReducer, videosDB);

  // const [videos, setVideos] = useState(videosDB);

  function videosReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const vdeo = [...videos];
        vdeo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return vdeo;
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      default:
        return videos;
    }
  }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  // Render the main application
  return (
    <>
      {/* Component for adding new videos */}
      <AddVideo dispatch={dispatch} editableVideo={editableVideo} />

      <div className="App">
        {/* Component for displaying the list of videos */}
        <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos} />
      </div>
    </>
  );
}

export default App;
