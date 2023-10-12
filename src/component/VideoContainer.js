import React, { useEffect, useState } from "react";
// import { YOUTUBE_POPULAR_DATA_API } from "../utils/Constant";
import { youtube_video_api } from "../utils/Constant";
import axios from "axios"
import VideoCard from "./VideoCard";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async() => {
    // const response = await axios.get(YOUTUBE_POPULAR_DATA_API);
    // console.log(response);
    // const response = await axios.get(youtube_video_api);
    const response = await fetch(youtube_video_api);
    const json =await response.json()
    // console.log(json.items);
    setVideos(json.items)
    // setVideos(response?.data?.items);
    // console.log(response?.data?.items);
    // console.log("vidoes form api data",videos);
  }
  return <div className="flex flex-wrap">
     {videos.map((video)=><VideoCard key={video.id} info={video}/>)}

  </div>;
};

export default VideoContainer;
