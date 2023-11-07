// Importing the necessary CSS file for styling.
import "./App.css";

// Importing the Thumbnail component to use in this App.
import Thumbnail from "./components/Thumbnail";

// The main App component.
function App() {
  return (
    <>
      <div>
        <h1>Welcome to YouTube</h1>
      </div>

      <div className="thumbnail-container">
      
        {/* Displaying video thumbnails using the Thumbnail component and passing props. */}
        <Thumbnail
          videoLink={"https://picsum.photos/id/1/320/180"}
          title={"React Full Course"}
          views={983}
          timeDuration={"5 Hours Ago"}
        />
        <Thumbnail
          videoLink={"https://picsum.photos/id/2/320/180"}
          title={"Backend Full Course"}
          views={567}
          timeDuration={"2 Days Ago"}
        />
        <Thumbnail
          videoLink={"https://picsum.photos/id/3/320/180"}
          title={"MongoDB Full Course"}
          views={896}
          timeDuration={"1 Month Ago"}
        />
        
      </div>
    </>
  );
}

// Exporting the App component for use in other parts of the application.
export default App;