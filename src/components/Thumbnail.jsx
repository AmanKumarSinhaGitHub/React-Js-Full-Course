// Import the CSS styles for the Thumbnail component
import "./thumbnail.css";

// Define the Thumbnail component, which accepts props for videoLink, title, views, and timeDuration
function Thumbnail({ videoLink, title, views, timeDuration }) {

  return (
    <>
      <div className="container">
  
        <div className="imgContainer">
          {/* Display a random image with alt text */}
          <img src={videoLink} alt="random-img" />
        </div>

        <div className="textContainer">

          {/* Display the title using the 'title' prop */}
          <h2>{title}</h2>

          {/* Display a welcoming message using the 'title' prop */}
          <p>Welcome to {title}</p>

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
