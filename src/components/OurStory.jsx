import React from "react";
import LobsterFest from "../assets/LobsterFest.jpg"
import LobsterWine from "../assets/LobsterWine.jpg"
import LobsterFest_Secondary from "../assets/LobsterFest_Secondary.jpg"

const OurStory = () => {
  return (
    <div className="grid grid-col-1 sm:grid-cols-3 gap-4 content-center pl-5 sm:pl-[5rem] pr-5 sm:pr-[5rem]">
       <img className="h-full sm:col-span-2" src={LobsterFest} alt="LobsterFest"/>
       <div className="grid gap-4">
       <img src={LobsterWine} alt="LobsterWine"/>
       <img src={LobsterFest_Secondary} alt="LobsterFest_Secondary"/>
       </div>
    </div>
  );
};

export default OurStory;
