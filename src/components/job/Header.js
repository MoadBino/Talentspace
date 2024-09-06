import React from "react";
import FullTime from "../assets/FullTime";
import Hybrid from "../assets/Hybrid";
import Years from "../assets/Years";
import Eye from "../assets/Eye";
import { useNavigate } from "react-router-dom";
const Header = ({ setShowJobDescrption, jobTitle }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center p-4 w-full  bg-main rounded-[12px]">
      <div>
        <h2 className="text-white text-[16.9px] font-[600]">
          {jobTitle.job_title}
        </h2>
        <div className="flex items-center text-gray-400 mt-[13px]">
          <span className=" flex gap-2 items-center mr-4 border-border border-[1px] font-[500]  py-1 px-1 text-white">
            <FullTime />
            Full time
          </span>
          <span className=" flex gap-2 items-center mr-4 border-border border-[1px]  font-[500] text-[12px]  text-white py-1 px-1 ">
            <Hybrid />
            Hybrid
          </span>
          <span className="mr-4 flex gap-2 items-cente border-border border-[1px]  font-[500]  text-[12px] text-white py-1 px-1 ">
            <Years />1 - 2 years
          </span>
        </div>
      </div>
      <button
        onClick={() => {
          setShowJobDescrption(true);
        }}
        className=" text-white px-4 py-2 rounded-lg flex items-center gap-2 "
      >
        <span>
          <Eye />
        </span>
        View Job description
      </button>
    </div>
  );
};

export default Header;
