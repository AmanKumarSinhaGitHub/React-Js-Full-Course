import "./App.css";
import Video from "./components/Video";
import videos from "./data/videoDetails";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    <div className="App">
      <div>Videos</div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        ></Video>
      ))}
      <div>
        <PlayButton message="Hello Video Playing">Play</PlayButton>

        <PlayButton message="Hello Video Paused">Paused</PlayButton>
      </div>
    </div>
  );
}

export default App;
