import React from "react";
import PDF from "../assets/PDF";
import Download from "../assets/Download";
import Add from "../assets/Add";

const PoolFile = () => {
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

      <div className="grid gap-4 jobs  grid-cols-[minmax(100px,_320px)_1fr_150px]  THT">
        <div className=" flex p-5  gap-2">
          <input type="checkbox" className="w-[24px] h-[24px]  " />
          <p className="">File</p>
        </div>
        <div className="p-4">ADDED</div>
        <div className="p-4 text-end">OPTIONS</div>
      </div>
      <hr />
      <div className="grid gap-4 grid-cols-[minmax(100px,_300px)_1fr_150px] px-5 py-[10px] FLT">
        <div className=" flex items-center  jobs gap-2">
          <input type="checkbox" className="w-[24px] h-[24px]  " />
          <p>
            <PDF />
          </p>
        </div>
        <div className="p-4 flex items-center">
          <p>3 days ago</p>
        </div>
        <div className=" flex justify-end  py-5  ">
          <button className="flex justify-center   gap-2 h-[35px] rounded-md p-[12px]  items-center bg-[#212D4E]  ">
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

export default PoolFile;
