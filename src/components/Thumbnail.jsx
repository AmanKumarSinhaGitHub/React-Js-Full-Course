import "./thumbnail.css";

function Thumbnail() {
  return (
    <>
      <div className="container">
        <div className="imgContainer">
          <img src="https://picsum.photos/id/1/320/180" alt="random-img" />
        </div>

        <div className="textContainer">
            <h2 className="videoTitle">React Full Course</h2>
            <p className="videoDesc">Welcome to Full React Course</p>
            <p><span>360k views</span> • 5 Days Ago</p>
        </div>
      </div>
    </>
  );
}

export default Thumbnail;
