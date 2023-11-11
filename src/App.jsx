import "./App.css";
import PlayButton from "./components/PlayButton";
import Thumbnail from "./components/Thumbnail";
import videos from "./data/videoDetails";

// The main App component.
function App() {
  return (
    <>
      <div>

      <PlayButton message="play"/>
      <PlayButton message="pause"/>

        <h1>Welcome to YouTube</h1>
        
      </div>

      <div className="videos-container">
        {videos.map((video, index) => (
          <Thumbnail
            key={index}
            videoID={index}
            title={video.title}
            views={video.views}
            timeDuration={video.timeDuration}
            channelName={video.channelName}
            isVarified={true}
          />
        ))}
      </div>
    </>
  );
}

export default App;
