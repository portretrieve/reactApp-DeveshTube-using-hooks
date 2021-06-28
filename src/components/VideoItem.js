import React from "react";
import "./VideoItem.css";

function Item({ setSelectedVideo, video }) {
  return (
    <div
      className="video-item item"
      onClick={() => {
        setSelectedVideo(video);
      }}
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div class="content">
        <div class="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}

export default Item;
