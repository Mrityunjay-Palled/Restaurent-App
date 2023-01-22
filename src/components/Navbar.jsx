import React from "react";

const Navbar = () => {
  return (
    <nav className="my-4 h-[4rem] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.56)] flex justify-between">
      <div className="h-full flex items-center">
        <img
          className="rotate-90 h-full"
          src="https://assets.webiconspng.com/uploads/2017/09/Lobster-PNG-Image-34493.png"
          alt="lobster_logo"
        />
        <p className="font-merienda text-3xl ml-[3rem] text-red-600 font-extrabold">
          RED LOBSTER
        </p>
      </div>
      <div className="flex items-center w-[60%]">
        <div className="flex w-full justify-around text-red-500 font-merienda font-bold">
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
