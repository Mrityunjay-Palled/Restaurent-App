import React, { useState } from "react";
import LobsterIcon from "../assets/Lobster-Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="my-4 h-[4rem] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.56)] sm:flex justify-between">
      <div className="h-full flex items-center">
        <img
          className="rotate-90 h-full"
          src={LobsterIcon}
          alt="lobster_logo"
        />
        <p className="font-merienda text-3xl ml-[3rem] text-red-600 font-extrabold invisible sm:visible">
          RED LOBSTER
        </p>
        <span
          className="text-3xl mx-[15px] text-red-600  visible sm:hidden"
          onClick={() => setIsMobile((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </span>
      </div>
      <div className="sm:flex items-center sm:w-[40%] w-full">
        <div className="sm:flex w-full justify-around text-red-600 font-merienda font-bold flex-wrap mt-[0px] h-[50vh] sm:h-[0px] sm:mt-[0px] leading-[80px] sm:leading-[0px] bg-white z-0 relative">
          <p className="mx-[40px] sm:mx-[0px] hover:animate-bounce cursor-pointer">
            MENU
          </p>
          <p className="mx-[40px] sm:mx-[0px] hover:animate-bounce cursor-pointer">
            SPECIALS
          </p>
          <p className="mx-[40px] sm:mx-[0px] hover:animate-bounce cursor-pointer">
            AWARDS
          </p>
          <p className="mx-[40px] sm:mx-[0px] hover:animate-bounce cursor-pointer">
            OUR STORY
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
