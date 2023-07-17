import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "../videoElements/videoPlayer";

const VideoItems = ({
  thumbnail,
  creatorName,
  creatorPic,
  title,
  description,
  videoUrl,
}) => {
  return (
    <>
      <div className="w-72 md:w-[700px]  m-3 flex flex-col md:flex-row mx-auto md:mx-0 text-white  ">
        <Link to="/videoPlayer" state={videoUrl}>
          <div className="mx-5 my-2 ">
            <img src={thumbnail} alt="" className="w-32  rounded-md" />
          </div>
        </Link>

        <div className="flex  flex-col   ">
          <h1 className="text-xl font-bold mt-2">{title}</h1>
          <div className="flex flex-row items-center my-2">
            <img
              src={creatorPic}
              alt=""
              className="w-8 h-8 mr-2 rounded-full"
            />
            <h1 className="text-gray-300 text-sm">{creatorName}</h1>
          </div>
          <div className="mt-4 hidden md:block">
            <p className="text-gray-200 text-md">
              {description.substring(0, 100)}{" "}
              {description.length >= 100 && "..."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoItems;
