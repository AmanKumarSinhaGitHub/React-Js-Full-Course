import "./App.css";
import Video from "./components/Video";
import videos from "./data/videoDetails";
import PlayButton from "./components/PlayButton";

function App() {
  return (
    // Here onClick function on App caused event bubbling. So to stop this use "e.stopPropogation" in "handleClick" function that is written in "PlayButton.jsx"
    <div className="App" onClick={()=>alert("App")}>
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
        >

          {/*PlayButton component is children of 'Video' component*/}
          <PlayButton
            myCustomOnPlayFunc={() => alert(`Video Played: ${video.title}`)}
            myCustomOnPauseFunc={() => alert(`Video Paused: ${video.title}`)}
          >
            {/* "<strong>Status</strong>" is children of 'PlayButton' component */}
            <strong>Status</strong>
          </PlayButton>

        </Video>
      ))}
    </div>
  );
}

export default App;
