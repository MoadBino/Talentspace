import React, { useEffect, useState } from "react";
import Search from "../assets/Search";
import { getApi } from "../../Axios";
import Arrows from "../assets/Arrows";
import InputSearch from "../assets/InputSearch";
import Experience from "../assets/Experience";
const CandidateList = ({ candidates }) => {
  return (
    <div className="bg-main  rounded-lg ">
      <div className=" flex justify-between items-center px-5 py-4 LIT">
        <h3 className="">
          Sourced candidates <span className="text-gray-400">6</span>
        </h3>
        <div className="relative">
          <input
            placeholder="search"
            className="bg-main border-border border-2 text-[12px] w pl-[35px] rounded-[6px] w-[250px] h-[12px] py-[16px]"
          />
          <div className="absolute left-[12px] top-[10px]">
            <InputSearch />
          </div>
        </div>
      </div>
      <hr className="border-border" />
      <div className=" ">
        <div className="grid THT gap-4 jobs grid-cols-[minmax(100px,_500px)_150px_250px_170px_1fr]">
          <div className=" flex  p-4">
            <input type="checkbox" className="mr-4 w-[24px] h-[24px] " />
            <p className="flex gap-2 items-center">
              PROFILE
              <span>
                <Arrows />
              </span>
            </p>
          </div>
          <div className=" p-4">EXPERIENCE</div>
          <div className=" flex gap-2 items-center p-4">
            Fit
            <span>
              <Arrows />
            </span>
          </div>
          <div className=" p-4 text-end">
            <p>HIRING STAGE</p>
          </div>
          <div className="text-end p-4">...</div>
        </div>
      </div>
      <hr className="border-border" />

      <div>
        {candidates &&
          candidates?.elements?.map((element, index) => {
            return (
              <>
                <div className=" TBT jobs grid gap-4 grid-cols-[minmax(100px,_500px)_170px_250px_150px_1fr]">
                  <div className="  py-[5.75px] ">
                    <div className="px-4 py-2 flex items-center">
                      <input
                        type="checkbox"
                        className="mr-4 w-[24px] h-[24px] "
                      />
                      <img
                        src={element.picture}
                        alt={element.name}
                        className="rounded-full mr-4 w-[50px] h-[50px]"
                      />
                      <div>
                        <p>{element.name}</p>
                        <p className="text-xs">{element.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className=" p-4 flex items-center gap-2">
                    <Experience />
                    <p>{element.experience}</p>
                  </div>
                  <div className="relative  flex flex-col justify-center">
                    <p className="text-[12px] leading-6">{element.score}%</p>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                      <div
                        style={{ width: `${element.score}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                  <div className="text-end flex justify-center items-center p-4">
                    <button className="bg-[#45435FBF]   text-white h-[32px] justify-between items-center  px-2 rounded-[4px] flex text-[12px] font-[500]">
                      <Search />
                      Sourced
                    </button>
                  </div>
                </div>
                <hr className="" />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default CandidateList;
