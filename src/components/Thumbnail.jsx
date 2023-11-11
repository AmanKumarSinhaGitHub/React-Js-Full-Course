// Import the CSS styles for the Thumbnail component
import "./Thumbnail.css";

// Define the Thumbnail component, which accepts props for videoLink, title, views, and timeDuration
function Thumbnail({ videoID, title, views, timeDuration, channelName, isVarified}) {

  return (
    <>
      <div className="thumbnail-container">
  
        <div className="imgContainer">
          {/* Display a random image with alt text */}
          <img className="image" src={`https://picsum.photos/id/${videoID}/320/180`} alt="random-img" />
        </div>

        <div className="textContainer">

          {/* Display the title using the 'title' prop */}
          <h2>{title}</h2>

          {/* Display a channel name using the 'channelName' prop */}
          {/* If channel is varified (isVarified=true) then add ✅ varified mark also  */}
          <p>{channelName} {isVarified && '✅'}</p>

          {/* Display the number of views and the time duration using 'views' and 'timeDuration' props */}
          <p>
            <span>{views}k views</span> • {timeDuration}
          </p>

        </div>
        
      </div>
    </>
  );
}

// Export the Thumbnail component for use in other parts of your application
export default Thumbnail;
