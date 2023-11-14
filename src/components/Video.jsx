import "./Video.css";

function Video({ title, id, channel = "Coder Dost", views, time, verified, children }) {
  return (
    <>
      <div className="container">
        <div className="pic">
          <img
            src={`https://picsum.photos/id/${id}/160/90`}
            alt="Random Image"
          />
        </div>
        <div className="title">{title}</div>
        <div className="channel">
          {channel} {verified && "✅"}{" "}
        </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        {/* Rendering "PlayButton" component as children  */}
        {children}
      </div>
    </>
  );
}

export default Video;
