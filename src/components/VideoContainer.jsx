import "./VideoContainer.css";

function VideoContainer({ title, id, channel = "Coder Dost", views, time, verified, children }) {
  return (
    <>
      {console.log("Rendering VIDEOS")}
      <div className="container">
        <div className="pic">
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
          {views} views<span>•</span>{time}
        </div>
        {/* Rendering "PlayButton" component as children  */}
        {children}
      </div>

     
    </>
  );
}

export default VideoContainer;
