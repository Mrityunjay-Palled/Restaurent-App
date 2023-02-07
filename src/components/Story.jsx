import React from "react";
import Background_Image from "../assets/Background_Image.jpg";

const Story = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#041120] to-[#035e85] h-fit flex flex-col justify-between">
        <p
          className="text-white text-4xl font-extrabold mt-[30px]"
          align="center"
        >
          OUR STORY
        </p>
        <div className="h-[80%] text-3xl text-white">
          <div className="p-8">
            <p align="center">
              Everything we do is a celebration of seafood-from how we source
              our fish and
            </p>
            <p align="center">
              shellfish to serving up new ways for you to enjoy it.Since 1968
              we've been
            </p>
            <p align="center">
              committed to bringing you a seafood experience you won't find
              anywhere else.
            </p>
            <p align="center">That's how we Sea Food Differently</p>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2">
        <div
          style={{ backgroundImage: `url(${Background_Image})` }}
          className="text-[20px] sm:text-[30px] h-[30vh] sm:h-auto"
        >
          <p className="relative top-10 sm:top-24 left-[1rem] sm:left-[1rem] font-bold">
            Our commitment to bringing you the best means that all of the
            seafood we serve is sourced in ways that are traceable, sustainable,
            and responsible. <span className="text-red-600">Learn more</span>
          </p>
          {/* <button className="bg-[#DF2140] py-[10px] px-[40px] rounded-[10px] text-[18px] font-[600] cursor-pointer relative top-12 sm:top-24 left-[7rem] sm:left-[33rem] text-[#fff]">
          Order Now
        </button> */}
        </div>
        <div className="h-[30vh] sm:h-auto">
          <img
            className="h-full"
            src="https://www.redlobster.com/images/default-source/images/our-story/-0498a1c52fd36f18be94ff4100d9e22d.jpg"
            alt="01_lobsterfest"
          />
        </div>
        <div className="h-[30vh] sm:h-auto">
          <img
            className="h-full"
            src="https://www.redlobster.com/images/default-source/images/our-story/-2798a1c52fd36f18be94ff4100d9e22d.jpg"
            alt="01_lobsterfest"
          />
        </div>
        <div
          style={{ backgroundImage: `url(${Background_Image})` }}
          className="text-[20px] sm:text-[30px] h-[30vh] sm:h-auto"
        >
          <p className="relative top-16 sm:top-24 left-[1rem] sm:left-[1rem] font-bold">
            We started off as a single, family-owned restaurant in Lakeland,
            Florida, but our goal of sharing our passion for seafood didn't stop
            there. <span className="text-red-600">Find our history here</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Story;
