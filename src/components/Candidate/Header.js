import React from "react";
import FullTime from "../assets/FullTime";
import Hybrid from "../assets/Hybrid";
import Years from "../assets/Years";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-main rounded-[12px]">
      <div>
        <h2 className="text-white text-2xl">Software Engineering</h2>
        <div className="flex items-center text-gray-400 mt-2">
          <span className=" flex gap-2 items-center mr-4 border-border border-[1px] py-1 px-1 text-white">
            <FullTime />
            Full time
          </span>
          <span className=" flex gap-2 items-center mr-4 border-border border-[1px] text-[12px]  text-white py-1 px-1 ">
            <Hybrid />
            Hybrid
          </span>
          <span className="mr-4 flex gap-2 items-cente border-border border-[1px]  text-[12px] text-white py-1 px-1 ">
            <Years />1 - 2 years
          </span>
        </div>
      </div>
      <button className=" text-white px-4 py-2 rounded-lg">
        View Job description
      </button>
    </div>
  );
};

export default Header;
