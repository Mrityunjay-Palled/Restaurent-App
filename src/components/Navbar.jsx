import React, { useState, useEffect } from "react";
import LobsterIcon from "../assets/Lobster-Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleToggle = () => {
    setToggleDrawer(!toggleDrawer);
    setCloseMenu(!closeMenu);
  };

  return (
    <nav className="my-4 h-[4rem] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.56)] sm:flex justify-between">
      <div className="h-full flex items-center justify-between">
        <img
          className="rotate-90 h-full"
          src={LobsterIcon}
          alt="lobster_logo"
        />
        <p className="font-merienda text-3xl ml-[3rem] text-red-600 font-extrabold">
          RED LOBSTER
        </p>
        <span
          className="text-3xl mx-[15px] text-red-600  visible sm:hidden"
          onClick={handleToggle}
        >
          {closeMenu ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </span>
      </div>
      <div className="sm:flex items-center sm:w-[40%] w-full">
        {!activeMenu ? (
          <div
            className={`sm:flex w-full justify-around text-red-600 font-merienda font-bold flex-wrap mt-[0px] h-[50vh] sm:h-[0px] sm:mt-[0px] leading-[80px] sm:leading-[0px] bg-white z-0 relative sm:opacity-100 ${
              !toggleDrawer ? "-translate-x-[415px]" : "translate-x-0"
            }`}
          >
             <p
              className="mx-[40px] sm:mx-[0px] cursor-pointer"
              onClick={handleToggle}
            >
              <Link to="/">HOME</Link>
            </p>
            <p
              className="mx-[40px] sm:mx-[0px] cursor-pointer"
              onClick={handleToggle}
            >
              <Link to="/menu">MENU </Link>
            </p>
            <p
              className="mx-[40px] sm:mx-[0px] cursor-pointer"
              onClick={handleToggle}
            >
              <Link to="/specials">SPECIALS</Link>
            </p>
            <p
              className="mx-[40px] sm:mx-[0px] cursor-pointer"
              onClick={handleToggle}
            >
              <Link to="/awards">AWARDS</Link>
            </p>
            <p
              className="mx-[40px] sm:mx-[0px] cursor-pointer"
              onClick={handleToggle}
            >
              <Link to="/story">OUR STORY</Link>
            </p>
          </div>
        ) : (
          <div
            className={`sm:flex w-full justify-around text-red-600 font-merienda font-bold flex-wrap mt-[0px] h-[50vh] sm:h-[0px] sm:mt-[0px] leading-[80px] sm:leading-[0px] bg-white z-0 relative sm:opacity-100`}
          >
            <p className="mx-[40px] sm:mx-[0px] cursor-pointer">
              <Link to="/">HOME</Link>
            </p>
            <p className="mx-[40px] sm:mx-[0px] cursor-pointer">
              <Link to="/menu">MENU </Link>
            </p>
            <p className="mx-[40px] sm:mx-[0px] cursor-pointer">
              <Link to="/specials">SPECIALS</Link>
            </p>
            <p className="mx-[40px] sm:mx-[0px]  cursor-pointer">
              <Link to="/awards">AWARDS</Link>
            </p>
            <p className="mx-[40px] sm:mx-[0px] cursor-pointer">
              <Link to="/story">OUR STORY</Link>
            </p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
