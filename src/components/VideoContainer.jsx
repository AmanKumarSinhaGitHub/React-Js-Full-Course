import "./VideoContainer.css";

// VideoContainer component to display video details
function VideoContainer({ title, id, channel = "Coding", views, time, verified, children, deleteVideo}) {

  return (
    <>
      {console.log("Rendering VIDEOS")}
      <div className="container">
        <div className="pic">
        <button className="close" onClick={()=>deleteVideo(id)}>X</button>
          <img
            src={`https://picsum.photos/id/${id}/300/200`}
            alt="Random Image"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}{" "}
        </div>
        <div className="views">
          {views} views<span>•</span>
          {time}
        </div>
        {/* Rendering "PlayButton" component as children  */}
        {children}
      </div>
    </>
  );
}

export default VideoContainer;
