import React from "react";
import Full from "../assets/Full";
const JobInfoPage = () => {
  return (
    <div className=" text-white rounded-lg w-[1026px]">
      <div className="flex justify-between items-center mb-4 bg-main  py-[19px] px-[19px] rounded-[12px]">
        <div className="">
          <h3 className="text-xl font-semibold  ">Software Engineering</h3>
          <p>Orange</p>
        </div>
        <button className="text-gray-400">Back</button>
      </div>
      <div className="bg-main pt-[20px] rounded-[12px]">
        <p className=" px-6 pb-[16px] ">job Info</p>
        <hr className="border-border" />
        <div className="grid grid-cols-4 gap-4 mb-4 border-[1px] border-border ">
          <div className=" flex items-center justify-center border-r-2 px-6 h-[64px] border-border ">
            <Full />
            <div className="">
              <h4 className="text-gray-400">Employment Type</h4>
              <p>Full-time</p>
            </div>
          </div>
          <div className="col-span-1 border-r-[1px]   h-[64px] border-border px-6 boxs">
            <h4 className="text-gray-400">Working Environment</h4>
            <p>Hybrid</p>
          </div>
          <div className="col-span-1 border-r-[1px] px-6 h-[64px] border-border boxs">
            <h4 className="text-gray-400">Experience</h4>
            <p>1 - 2 Years</p>
          </div>
          <div className="col-span-1  h-[64px] border-border boxs px-6">
            <h4 className="text-gray-400">Experience</h4>
            <p>1 - 2 Years</p>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between">
          <div className="mb-4">
            <h4 className="text-gray-400">Requirement Skills</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700 px-3 py-1 rounded-full">
                ASP.NET
              </span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">C++</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">C#</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">
                Node.js
              </span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">
                JavaScript
              </span>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-gray-400">Locations</h4>
            <div className="flex gap-2">
              <span className="flex items-center gap-1">
                <img
                  src="path/to/jordan-flag.png"
                  alt="Jordan"
                  className="w-5 h-5"
                /> 
                Jordan
              </span>
              <span className="flex items-center gap-1">
                <img src="path/to/uk-flag.png" alt="UK" className="w-5 h-5" />
                UK
              </span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-gray-400">Job Description</h4>
          <p>
            Bachelor's degree in visual design or a related field. 4+ years of
            experience in relevant positions. Experience in designing websites
            and mobile apps...
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobInfoPage;
