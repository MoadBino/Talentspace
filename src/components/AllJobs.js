import React, { useState } from "react";
import AddJob from "./AddJob";
import Add from "./assets/Add";
import Sidebar from "./Candidate/Sidebar";
import Header from "./Candidate/Header";
import CandidateList from "./Candidate/CandidateList";
const JobList = () => {
  const [isAdd, setIsAdd] = useState(false);
  const [jobsPage, setJobsPage] = useState(false);
  const jobs = [
    {
      title: "UI/UX Designer",
      type: "Full-time",
      workType: "Hybrid",
      experience: "1 - 2 years",
      postedTime: "30 days ago",
      countries: ["Jordan"],
      candidates: 6,
      status: "Active",
    },
    {
      title: "Computer engineering",
      type: "Part-time",
      workType: "Hybrid",
      experience: "1 - 2 years",
      postedTime: "30 days ago",
      countries: ["Jordan", "Saudi Arabia"],
      candidates: 7,
      status: "Active",
    },
    {
      title: "Software engineering",
      type: "Full-time",
      workType: "Hybrid",
      experience: "2 - 3 years",
      postedTime: "Recently",
      countries: ["Jordan", "Egypt"],
      candidates: 6,
      status: "Active",
    },
  ];

  return (
    <>
      {jobsPage ? (
        <div className="flex gap-[8px]">
          <Sidebar setJobsPage={setJobsPage} setIsAdd={setIsAdd} />
          <div className="flex flex-col w-full gap-[9px]">
            <Header />
            <CandidateList />
          </div>
        </div>
      ) : isAdd ? (
        <div className="fixed overflow-y-auto left-0 top-0 bg-[#2B2863] w-full max-h-[95vh]">
          <div className="flex justify-center items-center mt-[25px]  h-full">
            <AddJob setIsAdd={setIsAdd} />
          </div>
        </div>
      ) : (
        <div className="p-4 jobs bg-main text-white rounded-[12px] h-[80vh]">
          <div className="flex justify-between items-center mb-[9px] h-[48.75px]">
            <div className="">
              <h2 className="w-full">All jobs ({jobs.length})</h2>
            </div>
            <button
              onClick={() => {
                setIsAdd(true);
              }}
              className="bg-[#560DF5] text-white gap-2 py-2 px-4 rounded-md flex justify-center items-center"
            >
              <span>
                <Add />
              </span>
              Add job
            </button>
          </div>
          <hr className="border-gray-700" />
          <table className="w-full text-left mt-[10px]">
            <thead>
              <tr className="text-gray-300 mb-[16px]">
                <th className="p-2 border-b border-gray-700">
                  <div className="flex items-center gap-[16px] h-[16px] mb-[10px] ">
                    <input
                      type="checkbox"
                      className="w-[24px] my-[24px] h-[24px]"
                    />
                    <span>JOB</span>
                  </div>
                </th>
                <th className="p-2 border-b border-gray-700">COUNTRIES</th>
                <th className="p-2 border-b border-gray-700">CANDIDATES</th>
                <th className="p-2 border-b border-gray-700">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700  hover:cursor-pointer "
                  onClick={() => {
                    setJobsPage(true);
                  }}
                >
                  <td className="p-2 flex  gap-4 items-center h-[80px]">
                    <input type="checkbox" className="w-[24px] h-[24px] " />
                    <div className="flex flex-col ">
                      <span className="block font-medium">{job.title}</span>
                      <div className=" text-gray-400 text-sm flex gap-[8px]">
                        <div>{job.type}</div>
                        <div>
                          {job.workType} · {job.experience}
                        </div>
                        <div>{job.postedTime}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex space-x-2">
                      {job.countries.map((country, i) => (
                        <span
                          key={i}
                          className="flex items-center border-[1px] p-1 border-[#FCFCFC33]"
                        >
                          <img
                            src={`path_to_flag_${country.toLowerCase()}.png`}
                            alt={country}
                            className="w-5 h-5 rounded-full"
                          />
                          <span className="ml-1">{country}</span>
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-2 flex items-center">
                    <span className="mr-2">👤</span> {job.candidates}
                  </td>
                  <td className="p-2">
                    <button className="bg-[#50CD89] bg-opacity-[20%] text-[#0FEA9A] py-1 px-2 rounded-[4px]">
                      {job.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {}
    </>
  );
};

export default JobList;
