import React from "react";
import { useLocation } from "react-router-dom";

const VideoPlayer = () => {
  const location = useLocation();
  const videoUrl = location.state;
  return (
   
      <div className="flex justify-center items-center h-full p-12 bg-black  ">
        <video
        width="320" height="450"
          className="rounded-md mt-5 "
          src={videoUrl}
          controls
        ></video>
      </div>
    
  );
};

export default VideoPlayer;
