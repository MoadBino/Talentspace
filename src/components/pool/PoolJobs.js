import React from "react";
import Add from "../assets/Add";
import Search from "../assets/Search";
import Download from "../assets/Download";
const PoolJobs = () => {
  return (
    <div className="bg-main rounded-md">
      <div className="flex justify-between items-center pb-[18.75px] pt-5 px-5 ">
        <p className="DTH">
          Total files <span>3</span>{" "}
        </p>
        <button className="bg-[#560DF5] py-[9px] flex items-center gap-2 px-[12px] rounded-md ">
          <span>
            <Add />
          </span>
          Upload files
        </button>
      </div>
      <hr />

      <div className="grid gap-4 jobs  grid-cols-[minmax(100px,_320px)_150px_1fr_1fr]  THT">
        <div className=" flex p-5  gap-2">
          <input type="checkbox" className="w-[24px] h-[24px]  " />
          <p className="">Job</p>
        </div>
        <div className="p-4">FIT</div>
        <div className="p-4 text-end">HIRING STAGE</div>
        <div className="p-4 text-end">OPTIONS</div>
      </div>
      <hr />
      <div className="grid gap-4  grid-cols-[minmax(100px,_300px)_170px_1fr_1fr] px-5 py-[10px] FLT">
        <div className=" flex items-center jobs gap-2">
          <input type="checkbox" className="w-[24px] h-[24px]  " />
          <div className="flex gap-2">
            <p>
              <img src="/LoginLogo.png" className="w-[50px] h-[50px]" />
            </p>
            <div>
              <p className="pb-2 text-[14.95px] font-[600]">UI/UX Designer</p>
              <p className="text-[13.91px] font-[500] text-[#9A9CAE]">
                Talentspace
              </p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="relative  flex flex-col justify-center">
            <p className=" mb-[9px] font-[500] text-[13.91px] leading-6">60%</p>
            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
              <div
                style={{ width: `60%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div>
        </div>
        <div className="p-4 flex justify-end ">
          <button className="flex justify-center gap-2 h-[35px] rounded-md px-[12px]  items-center bg-[#212D4E]  ">
            <span>
              <Search small={true} />
            </span>
            Sourced
          </button>
        </div>
        <div className="p-4 flex justify-end ">
          <button className="flex justify-center gap-2 h-[35px] rounded-md px-[12px]  items-center bg-[#212D4E]  ">
            <span>
              <Download small={true} />
            </span>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoolJobs;
