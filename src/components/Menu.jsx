import React, { useState } from "react";
import Background_Image from "../assets/Background_Image.jpg";
import _placeholder from "../assets/_placeholder.jpg";
import { data } from "./data";
import CustomSelect from "../Library";
const Menu = () => {
  const [selected, setSelected] = useState("LobsterFest");
  const options = [
    { value: "LobsterFest", label: "NEW! Lobsterfest®" },
    { value: "Feasts", label: "Platters And Feasts" },
    { value: "Starters", label: "Starters" },
    { value: "Beverages", label: "Beverages" },
    { value: "Sandwich", label: "Bowls & Sandwiches" },
    { value: "Classics", label: "Classics" },
    { value: "Deserts", label: "Deserts" },
  ];
  const handleChange = (event) => {
    setSelected(event.value);
  };

  const _menu = data[selected];
  return (
    <div style={{ backgroundImage: `url(${Background_Image})` }}>
      <div className="flex items-center justify-center pt-3">
        <CustomSelect options={options} onChange={handleChange} />
      </div>

      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-4">
        {_menu.map((item) => (
          <div className="bg-white w-[20rem] h-[20rem] sm:h-[25rem] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.56)] m-5">
            <img
              src={item.img === "" ? _placeholder : item.img}
              alt=""
              className="h-[40%] w-[100%]"
            />
            <div className="p-3 h-[35%] sm:h-[30%]">
              <p
                align="center"
                className="font-bold text-xl whitespace-nowrap overflow-hidden overflow-ellipsis"
              >
                {item.title}
              </p>
              <p
                align="center"
                className="text-gray-500 font-[15px] leading-[15px]"
              >
                {item.description !== ""
                  ? item.description.length >= 190
                    ? item.description.substring(0, 190) + "..."
                    : item.description
                  : ""}
              </p>
            </div>
            <div
              align="center"
              className="mt-[1rem] sm:mt-[4rem] px-[1rem] flex flex-col justify-end"
            >
              <button className="bg-[#DF2140] py-[10px] px-[40px] rounded-[10px] text-[18px] font-[600] cursor-pointer text-[#fff] w-[100%]">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
