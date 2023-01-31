import React from "react";
import LobsterFest from "../assets/LobsterFest.png"
import LobsterWine from "../assets/LobsterWine.jpg"

const OurStory = () => {
  return (
    <div className="grid grid-col-1 sm:grid-cols-3 gap-4 content-center">
       <img className="h-full sm:col-span-2" src={LobsterFest} alt="LobsterFest"/>
       <img className="h-full" src={LobsterWine} alt="LobsterWine"/>
    </div>
  );
};

export default OurStory;
