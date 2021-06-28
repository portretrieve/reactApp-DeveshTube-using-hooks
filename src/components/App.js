import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoList, onSearch] = useVideos("Water Fasting");

  useEffect(() => {
    setSelectedVideo(videoList[0]);
  }, [videoList]);

  return (
    <div className="ui container">
      <h1>Welcome to DeveshTube</h1>
      <SearchBar onSearch={onSearch} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videoList} setSelectedVideo={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
