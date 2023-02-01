import React from "react";
import ReactPlayer from "react-player";
import Marquee from "react-fast-marquee";

const VideoSection = () => {
  return (
    <>
      {/* <p align="center" className="py-6 text-xs sm:text-2xl font-bold font-merienda text-red-600">
        Traceable, sustainable and responsible applies to so much more than how
        we catch our seafood.
      </p> */}
      <Marquee speed="40">
        <p
          className="py-4 sm:py-6 text-xs sm:text-2xl font-bold font-merienda text-red-600"
        >
          Traceable, sustainable and responsible applies to so much more than
          how we catch our seafood.
        </p>
      </Marquee>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 pt-0">
          <ReactPlayer
            width="100%"
            height="15rem"
            url="https://youtu.be/w7_wnwjG_yQ"
          />
          <p align="center" className="text-xl pt-2 font-merienda text-white bg-red-400">
            GEAR MARKING
          </p>
        </div>
        <div className="p-5 pt-0">
          <ReactPlayer
            width="100%"
            height="15rem"
            url="https://youtu.be/6gtu0IJyoLQ"
          />
          <p align="center" className="text-xl pt-2 font-merienda text-white bg-red-400">
            LOBSTERMANIA-2
          </p>
        </div>
        <div className="p-5 pt-0">
          <ReactPlayer
            width="100%"
            height="15rem"
            url="https://youtu.be/fLzTkPSQnKI"
          />
          <p align="center" className="text-xl pt-2 font-merienda text-white bg-red-400">
            MASTER CHEF
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
