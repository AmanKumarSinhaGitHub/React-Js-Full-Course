import "./App.css";
import VideoContainer from "./components/VideoContainer";
import videosDB from "./data/videosDB";
import PlayButton from "./components/PlayButton";
import IncrementDecrement from "./components/IncrementDecrement";
import { useState } from "react";

function App() {

  console.log("Rendering APP")

  const [videos, setVideos] = useState(videosDB);

  function handleClick() {

    setVideos([...videos, {
      id: videos.length + 1,
      title: 'MongoDb JS tutorial',
      views: '1M',
      time: '1 month ago',
      channel: 'Coder Dost',
      verified: true
    }])
  }

  return (

    <>

      <div className="addNewVideos">

        <button onClick={handleClick}>Add Video</button>
      </div>

      <div className="App">

        {videos.map((video) => (

          <VideoContainer
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

          </VideoContainer>
        ))}

        <IncrementDecrement />
      </div>
    </>
  );
}

export default App;
