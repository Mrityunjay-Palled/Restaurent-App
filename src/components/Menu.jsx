import React from "react";
import Background_Image from "../assets/Background_Image.jpg";
import Menu_1 from "../assets/Menu_1.jpg"

const Menu = () => {
  return (
    <div style={{ backgroundImage: `url(${Background_Image})` }}>
      <div className="bg-white w-[20rem] h-[20rem] sm:h-[25rem] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.56)] m-5">
        <img src={Menu_1} alt="" className="h-[40%] w-[100%]"/>
        <div className="p-3">
        <p align="center" className="font-bold text-xl">Lobster Lover's Dream®</p>
        <p align="center" className="text-gray-500 font-[15px] leading-[15px]">Roasted rock and Maine lobster tails paired with lobster-and-shrimp linguini in a creamy lobster sauce. Served with choice of two sides</p>
        </div>
        <div align="center" className="mt-[1rem] sm:mt-[4rem] px-[1rem]">
          <button className="bg-[#DF2140] py-[10px] px-[40px] rounded-[10px] text-[18px] font-[600] cursor-pointer text-[#fff] w-[100%]">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
