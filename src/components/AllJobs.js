import React, { useState, useEffect } from "react";
import AddJob from "./AddJob";
import Add from "./assets/Add";
import Sidebar from "./job/Sidebar";
import Candidates from "./assets/Candidates";
import Header from "./job/Header";
import CandidateList from "./job/CandidateList";
import { getApi } from "../Axios";
import { useNavigate } from "react-router-dom";
const JobList = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const getJobs = async () => {
    try {
      const data = await getApi("jobs?count=10&start=0");

      setJobs(data.elements);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getJobs();
  }, []);

  return (
    <>
      {isAdd ? (
        <div className="fixed overflow-y-auto left-0 top-0 bg-[#2B2863] w-full max-h-[95vh]">
          <div className="flex justify-center items-center mt-[25px]  h-full">
            <AddJob setIsAdd={setIsAdd} />
          </div>
        </div>
      ) : (
        <div className="bg-main jobs rounded-[12px] min-h-[70vh] ">
          <div className="flex justify-between items-center mb-[9px] px-5 pt-5">
            <div className=" ">
              <h2 className="w-full DTH ">
                All jobs{" "}
                <span className="bg-[#45435FBF]  px-[10px] py-[3px]  rounded-md">
                  {jobs.length}
                </span>
              </h2>
            </div>
            <button
              onClick={() => {
                setIsAdd(true);
              }}
              className="bg-[#560DF5] text-white gap-2 py-2 px-4 rounded-md flex justify-center items-center mb-2"
            >
              <span>
                <Add />
              </span>
              Add job
            </button>
          </div>
          <hr />
          <div className="grid gap-4  grid-cols-[minmax(100px,_500px)_minmax(100px,_500px)_200px_250px_1fr] px-5">
            <div className=" THT flex items-center">
              <input type="checkbox" className="w-[24px] h-[24px]  " />
              <p className="THT p-4">JOB</p>
            </div>
            <div className=" THT p-4 pt-[17px]">COUNTRIES</div>
            <div className=" THT p-4">CANDIDATES</div>
            <div className=" THT p-4">STATUS</div>
            <div className=" THT p-4">...</div>
          </div>
          <hr className="w-full " />
          {jobs.map((element, index) => {
            return (
              <>
                <div
                  onClick={() => {
                    navigate(`/job/${element.id}`);
                  }}
                  className="hover:cursor-pointer hover:bg-[#6E1EF74D] transition-all tr grid gap-4 grid-cols-[minmax(100px,_500px)_minmax(100px,_500px)_200px_250px_1fr] px-5 "
                >
                  <div className=" flex THT  gap-4 items-center jobs h-[80px]">
                    <input type="checkbox" className="w-[24px] h-[24px] " />
                    <div className="flex flex-col gap-[9px]">
                      <span className="block font-medium">
                        {element?.job_title}
                      </span>
                      <div className=" text-gray-400 text-sm flex ">
                        <div>{element?.type}</div>
                        <div>
                          <p>Full-time • Hybrid • 1 - 2 years </p>
                        </div>
                        <div>{element?.posted_for}</div>
                      </div>
                    </div>
                  </div>
                  <div className=" THT p-4">
                    <div className="p-2">
                      <div className="flex space-x-2">
                        {element?.countries.map((country, i) => (
                          <span
                            key={i}
                            className="flex items-center border-[1px] p-1 border-[#FCFCFC33]"
                          >
                            <svg
                              width="15"
                              height="25"
                              viewBox="0 0 15 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.5485 12.5057C14.6815 12.3957 14.6815 12.1043 14.5485 11.9943L0.375 0.25V24.25L14.5485 12.5057Z"
                                fill="#FF4B55"
                              />
                            </svg>

                            <span className="ml-1">{country}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" THT p-4">
                    <div className="p-2 flex items-center">
                      <span className="mr-2">
                        <Candidates />
                      </span>
                      {element?.candidate_count}
                    </div>
                  </div>
                  <div className=" THT p-4">
                    <button className="bg-[#50CD89] bg-opacity-[20%] text-[#0FEA9A] py-1 px-2 rounded-[4px]">
                      {!element?.deleted ? "Active" : ""}
                    </button>
                  </div>
                  <div className=" THT px-5"></div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default JobList;
