import React from "react";
import LeftArrow from "../assets/LeftArrow";
import Add from "../assets/Add";
const Sidebar = ({ setJobsPage, setIsAdd }) => {
  return (
    <div className="bg-main h-[87vh] w-[406px] rounded-[12px] ">
      <div className="p-4 flex justify-between items-center">
        <button
          onClick={() => {
            setJobsPage(false);
          }}
        >
          <LeftArrow />
        </button>
        <h2 className="text-white text-[16px]">
          Jobs <span className=" ml-[8px] text-white py-1 px-1  text-[12px]  rounded-sm bg-border">50</span>
        </h2>
        <button
          onClick={() => {
            setJobsPage(false)
            setIsAdd(true);
          }}
        >
          <Add />
        </button>
      </div>
      <hr className="border-border" />
      <div className="text-gray-400 p-4">
        <div className="mb-4">
          <h3 className="text-white font-[600] ">Software engineering</h3>
          <p className="text-[13px]">Recently</p>
        </div>
        <div className="mb-4">
          <h3 className="text-white font-[600]">
            UI/UX Designer
            <span className="inline-block ml-2 text-white">&#xe800;</span>
          </h3>
          <p className="text-[13px]">30 min ago</p>
        </div>
        <div className="mb-4">
          <p className="text-white font-[600]">
            Computer engineering
            <span className="inline-block ml-2 text-white">&#xe800;</span>
          </p>
          <p className="text-[13px]">30 min ago</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
