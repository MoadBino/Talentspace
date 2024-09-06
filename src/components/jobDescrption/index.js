import React, { useEffect, useState } from "react";
import Full from "../assets/Full";
import { getApi } from "../../Axios";
import { useParams } from "react-router-dom";
import UK from "../assets/UK";
import Profile from "../assets/Profile";
import Requirements from "../assets/Requirements";
import WorkType from "../assets/WorkType";
import Experience from "../assets/Experience";
import Requirementskills from "../assets/Requirementskills";
import Locations from "../assets/Locations";
import ExclamationMark from "../assets/ExclamationMark";
import Descrption from "../assets/Descrption";
import ThreeDots from "../assets/ThreeDots";
const JobDescrption = ({ description, setShowJobDescrption }) => {
  console.log(5555, description);

  return (
    <div className=" text-white rounded-lg w-full mb-[25px]">
      <div className="flex justify-between items-center mb-4 bg-main  py-[19px] px-[19px] rounded-[12px]">
        <div className="">
          <h3 className="text-xl font-semibold  ">{description?.job_title}</h3>
          <p>Orange</p>
        </div>
        <button
          onClick={() => {
            setShowJobDescrption(false);
          }}
          className="text-gray-400"
        >
          Back
        </button>
      </div>
      <div className="bg-main pt-[20px] rounded-[12px]">
        <p className="flex gap-2 items-center px-5 pb-[16px] ">
          <span>
            <ExclamationMark />
          </span>
          job Info
        </p>
        <hr className="border-border" />
        <div className="">
          <div className="grid grid-cols-4 JobInfoP ">
            <div className=" flex  gap-[10px] p-4 border-2 border-border">
              <Experience />
              <div>
                <p>Working Environment</p>
                <h6>Full-time</h6>
              </div>
            </div>
            <div className=" flex gap-[10px] p-4 border-2 border-border">
              <WorkType />
              <div>
                <p>Working Environment</p>
                <h6>Hybrid</h6>
              </div>
            </div>
            <div className=" flex gap-[10px] p-4 border-2 border-border">
              <Experience />
              <div>
                <p>Experience</p>
                <h6>1 - 2 Years</h6>
              </div>
            </div>
            <div className=" flex   gap-[10px] p-4 border-2 border-border">
              <Profile />
              <div>
                <p>Sourced Candidates</p>
                <h6>6</h6>
              </div>
            </div>

            <div className="col-span-4  flex ">
              <div className="  border-r-2 border-r-border w-[50%]">
                <div className="flex flex-col gap-[10px]  p-5  ">
                  <div className="flex items-center gap-[10px] ">
                    <Requirementskills />

                    <h6 className="">Requirement skills</h6>
                  </div>
                  <div>
                    <div className="flex gap-2  flex-wrap   w-full mb-[20px] mt-[8px] ml-[30px]  text-white ">
                      {description?.skills?.essential.map((element) => {
                        return (
                          <div className="bg-[#45435FBF] rounded-[7px]">
                            <h5 className=" flex p-[7px] text-[13.91px] ">
                              {element}
                              <span>
                                <ThreeDots />
                              </span>
                            </h5>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex p-5 w-[50%]">
                <Locations />
                <div>
                  <p>Locations</p>
                  <div className="bg-[#45435FBF] p-[7px] gap-2 flex items-center justify-center rounded-md">
                    <UK />
                    <h4 className="text-[13.91px] text-white">UK</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="p-5">
          <h4 className=" pb-5 text-[13px] text-[#9A9CAE] flex gap-2">
            <span>
              <Descrption />
            </span>
            Job Description
          </h4>
          <p className="text-[13px]">
            <div
              dangerouslySetInnerHTML={{ __html: description?.job_description }}
            />
            {}
          </p>
        </div>
        <hr />
        <div className="p-5">
          <p className="pb-5 text-[13px] text-[#9A9CAE] flex gap-2">
            <span>
              <Requirements />
            </span>
            Requirements
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex text-[13px] font-[400]">
              <p className="pr-[10px] w-">Skills: </p>
              <div className="flex  flex-wrap gap-2">
                {[
                  ...description?.skills?.essential,
                  ...description?.skills?.optional,
                ].map((element) => {
                  return <p> {element},</p>;
                })}
              </div>
            </div>
            <div className="flex text-[13px] font-[400]">
              <p className="pr-[10px] w-">education title: </p>
              <div className="flex  flex-wrap gap-2">
                {description?.education_title.map((element) => {
                  return <p> {element},</p>;
                })}
              </div>
            </div>
            <div className="flex text-[13px] font-[400]">
              <p className="pr-[10px] w-">education degree: </p>
              <div className="flex  flex-wrap gap-2">
                {description?.education_degree.map((element) => {
                  return <p> {element},</p>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescrption;
