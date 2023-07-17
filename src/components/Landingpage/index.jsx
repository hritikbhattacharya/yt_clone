import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoItems from "./videoitems";
import VideoPlayer from "../videoElements/videoPlayer";

function Landing() {
  const [videos, setVideos] = useState();
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get(
        `https://internship-service.onrender.com/videos?page=${page}`
      );

      setVideos(response.data.data.posts);
    };
    getVideos();
  }, [page]);

  return (
    <div className="w-full h-full  flex flex-col item-center justify-center p-10 md:p-0 bg-black">
      <div className="mt-10 text-white flex flex-row justify-center items-center ">
        <button
          className="mx-1 md:mx-6 border border-white w-5 rounded-lg "
          onClick={() => {
            setPage(0);
          }}
        >
          1
        </button>
        <button
          className="mx-1 md:mx-6 border border-white w-5 rounded-lg "
          onClick={() => {
            setPage(1);
          }}
        >
          2
        </button>
        <button
          className="mx-1 md:mx-6 border border-white w-5 rounded-lg "
          onClick={() => {
            setPage(2);
          }}
        >
          3
        </button>
        <button
          className="mx-1 md:mx-6 border border-white w-5 rounded-lg "
          onClick={() => {
            setPage(3);
          }}
        >
          4
        </button>
        <button
          className="mx-1 md:mx-6 border border-white w-5 rounded-lg "
          onClick={() => {
            setPage(4);
          }}
        >
          5
        </button>
        <button
          className="mx-1 md:mx-6 border border-white w-5 rounded-lg "
          onClick={() => {
            setPage(5);
          }}
        >
          6
        </button>
        <button
          className="mx-1 md:mx-6 border border-white w-5 rounded-lg "
          onClick={() => {
            setPage(6);
          }}
        >
          7
        </button>
        <button
          className="mx-1 md:mx-6 border border-white w-5 rounded-lg "
          onClick={() => {
            setPage(7);
          }}
        >
          8
        </button>
        <button
          className="mx-1 md:mx-6 border border-white w-5 rounded-lg "
          onClick={() => {
            setPage(8);
          }}
        >
          9
        </button>
        <button
          className="mx-1 md:mx-6 border border-white w-5 rounded-lg "
          onClick={() => {
            setPage(9);
          }}
        >
          10
        </button>
      </div>
      <div className=" flex flex-col px-20 md:px-0 justify-center items-center mt-3">
        {videos?.map((video, i) => {
          return (
            <VideoItems
              thumbnail={video.submission.thumbnail}
              creatorName={video.creator.name}
              creatorPic={video.creator.pic}
              title={video.submission.title}
              description={video.submission.description}
              videoUrl={video.submission.mediaUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Landing;
