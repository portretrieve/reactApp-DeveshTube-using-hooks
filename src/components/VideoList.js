import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, setSelectedVideo }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem video={video} setSelectedVideo={setSelectedVideo} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
