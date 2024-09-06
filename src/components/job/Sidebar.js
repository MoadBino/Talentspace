import React, { useEffect } from "react";
import LeftArrow from "../assets/LeftArrow";
import Add from "../assets/Add";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ setJobsPage, setIsAdd, jobs, setJobId }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-main h-[87vh] w-[325px] rounded-[12px] ">
      <div className="p-4 flex justify-between items-center">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <LeftArrow />
        </button>
        <h2 className="text-white text-[16px]">
          Jobs
          <span className=" rounded-[4px] ml-[8px] text-white py-1 px-1  text-[12px]   bg-border">
            {jobs?.pagination?.total}
          </span>
        </h2>
        <button onClick={() => {}}>
          <Add />
        </button>
      </div>
      <hr className="border-border mb-5" />
      <div className="flex flex-col justify-center">
        {jobs &&
          jobs?.elements?.map((element, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setJobId(element.id);
                }}
                className="text-gray-400 SideBarText flex pt-2 items-center px-5  mb-[16px] hover:cursor-pointer hover:bg-[#6E1EF74D] transition-all"
              >
                <div className="mb-4">
                  <h3 className="text-white font-[600] ">
                    {element.job_title}
                  </h3>
                  <p className="text-[13px] text-[#9A9CAE]  font-[500]">
                    {element.posted_for}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
