import { useState, useEffect } from "react";
import youtube from "../apis/youTube";

function useVideos(defaultSearchTerm) {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    onSearch(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const onSearch = async (textInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: textInput
      }
    });

    setVideoList(response.data.items);
  };

  return [videoList, onSearch];
}

export default useVideos;
