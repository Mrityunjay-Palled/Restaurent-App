import React from "react";
import LobsterIcon from "../assets/Lobster-Logo.png"
const Navbar = () => {
  return (
    <nav className="my-4 h-[4rem] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.56)] flex justify-between">
      <div className="h-full flex items-center">
        <img
          className="rotate-90 h-full"
          src={LobsterIcon}
          alt="lobster_logo"
        />
        <p className="font-merienda text-3xl ml-[3rem] text-red-600 font-extrabold">
          RED LOBSTER
        </p>
      </div>
      <div className="flex items-center w-[40%]">
        <div className="flex w-full justify-around text-red-600 font-merienda font-bold">
          <p>MENU</p>
          <p>SPECIALS</p>
          <p>AWARDS</p>
          <p>OUR STORY</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
