import React from "react";
import Background_Image from "../assets/Background_Image.jpg";

const Specials = () => {
  return (
    <div className="grid sm:grid-cols-2">
      <div
        style={{ backgroundImage: `url(${Background_Image})` }}
        className="text-[40px] sm:text-[55px] h-[30vh] sm:h-auto"
        
      >
        <p className="relative top-10 sm:top-20 left-[4rem] sm:left-[22rem] font-bold">LOBSTERFEST</p>
        <button className="bg-[#DF2140] py-[10px] px-[40px] rounded-[10px] text-[18px] font-[600] cursor-pointer relative top-12 sm:top-24 left-[7rem] sm:left-[33rem] text-[#fff]">
          Order Now
        </button>
      </div>
      <div className="h-[30vh] sm:h-auto">
        <img
          className="h-full"
          src="https://www.redlobster.com/images/default-source/images/events/2023/01_lobsterfest/specials_900x447-us_r3.png"
          alt="01_lobsterfest"
        />
      </div>
      <div className="h-[30vh] sm:h-auto flex flex-col-reverse">
        <img
          className="h-full"
          src="https://www.redlobster.com/images/default-source/images/specials/2021/rdl_rrc_specialsdesktop-v2_minified.png"
          alt="01_lobsterfest"
        />
      </div>
      <div
        style={{ backgroundImage: `url(${Background_Image})` }}
        className="text-[20px] sm:text-[55px] h-[30vh] sm:h-auto"
        
      >
        <p className="relative top-16 sm:top-20 left-[1rem] sm:left-[1rem] font-bold">
          GET ALL YOUR SEAFOOD IN A SNAP
        </p>
        <button className="bg-[#DF2140] py-[10px] px-[40px] rounded-[10px] text-[18px] font-[600] cursor-pointer relative top-20 sm:top-24 left-[7rem] sm:left-[1rem] text-[#fff]">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Specials;
