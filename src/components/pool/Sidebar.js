import React, { useState } from "react";
import LeftArrow from "../assets/LeftArrow";
import CloseArrow from "../assets/CloseArrow";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ allProfile, setPoold }) => {
  const navigate = useNavigate();
  const [close, setClose] = useState("");
  return (
    <div
      className={`bg-main transition-all h-[87vh]${
        close ? "w-[85px]" : " w-[425px]"
      }  rounded-[12px] `}
    >
      <div
        className={`p-4 flex justify-between items-center  ${
          close ? "flex-col-reverse gap-1" : ""
        }`}
      >
        <button
          className={`${close ? "flex items-center gap-2" : ""}`}
          onClick={() => {
            navigate("/Pools");
          }}
        >
          <LeftArrow />
          {close ? "Back" : ""}
        </button>
        {close ? (
          ""
        ) : (
          <h2 className="text-white text-[16px]">
            Profiles
            <span className=" rounded-[4px] ml-[8px] text-white py-1 px-1  text-[12px]   bg-border">
              {allProfile?.pagination?.total}
            </span>
          </h2>
        )}

        <button
          className={`${close ? "rotate-180" : ""}`}
          onClick={() => {
            setClose(close ? false : true);
          }}
        >
          <CloseArrow />
        </button>
      </div>
      <hr className="border-border mb-5" />
      <div className="flex flex-col gap-1">
        {allProfile &&
          allProfile?.elements?.map((element, index) => {
            console.log(index,element);
            
            return (
              <div
                onClick={() => setPoold(element.profile_id)}
                key={index}
                className="hover:cursor-pointer hover:bg-[#6E1EF74D] rounded flex pt-2 items-center"
              >
                {close ? (
                  <div className="text-gray-400 SideBarText px-5  mb-[16px] flex gap-[13px]">
                    <img
                      src={element.picture}
                      className="w-[50px] h-[50px] rounded-full"
                    />
                  </div>
                ) : (
                  <div className="text-gray-400 SideBarText px-5  mb-[16px] flex gap-[13px]">
                    <img
                      src={element.picture}
                      className="w-[50px] h-[50px] rounded-full"
                    />
                    <div>
                      <p className="text-[14.95px] mb-1 font-[600]">
                        {element.name}
                      </p>
                      <p className="text-[13.91px] text-[#9A9CAE]">
                        {element.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
