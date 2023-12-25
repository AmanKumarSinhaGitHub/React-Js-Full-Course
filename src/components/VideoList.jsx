import PlayButton from "./PlayButton";
import VideoContainer from "./VideoContainer";

// Component for displaying a list of videos
function VideoList({ videos, deleteVideo}) {
  return (
    <>

      {/* Iterate over the list of videos and render VideoContainer */}

      {videos.map((video) => (
        <VideoContainer
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          deleteVideo={deleteVideo}
        >
       
          <PlayButton
            myCustomOnPlayFunc={() => alert(`Video Played: ${video.title}`)}
            myCustomOnPauseFunc={() => alert(`Video Paused: ${video.title}`)}
          >
           
            <strong>Status</strong>
          </PlayButton>
        </VideoContainer>
      ))}
      
    </>
  );
}

export default VideoList;
