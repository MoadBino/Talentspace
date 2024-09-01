import React from "react";
import Search from "../assets/Search";
const CandidateList = ({ setJobsPage }) => {
  const candidates = [
    {
      name: "Kareem Saad",
      role: "Computer Software",
      experience: "1 - 2 years",
      fit: 95,
      stage: "Sourced",
    },
    {
      name: "Software engineering (2)",
      role: "Information Technology",
      experience: "Fresh",
      fit: 95,
      stage: "Sourced",
    },
    {
      name: "Software engineering (3)",
      role: "Designing",
      experience: "Fresh",
      fit: 95,
      stage: "Sourced",
    },
  ];

  return (
    <div className="bg-main  rounded-lg">
      <h3 className="text-white p-4">
        Sourced candidates <span className="text-gray-400">6</span>
      </h3>
      <hr className="border-border" />
      <div className="overflow-x-auto h-[69vh]">
        <table className="w-full text-left text-white  text-[15px]">
          <thead>
            <tr className="border-b border-border h-[60px]">
              <th className="px-4 py-2 font-[600]">PROFILE</th>
              <th className="px-4 py-2 font-[600]">EXPERIENCE</th>
              <th className="px-4 py-2 font-[600]">FIT</th>
              <th className="px-4 py-2 font-[600]">HIRING STAGE</th>
              <th className="px-4 py-2 font-[600]">...</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="px-4 py-2 flex items-center">
                  <input type="checkbox" className="mr-4" />
                  <img
                    src="https://via.placeholder.com/40"
                    alt={candidate.name}
                    className="rounded-full mr-4 w-[50px] h-[50px]"
                  />
                  <div>
                    <p>{candidate.name}</p>
                    <p className="text-xs">{candidate.role}</p>
                  </div>
                </td>
                <td className="px-4 py-2">{candidate.experience}</td>
                <td className="px-4 py-2">
                  <div className="relative pt-1">
                    <p className="text-[12px] leading-6">98%</p>
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                      <div
                        style={{ width: `${candidate.fit}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-2 w-[150px]">
                  <button className="bg-[#45435FBF]  text-white h-[32px] justify-center items-center  px-1 rounded-[4px] flex ">
                    <Search />
                    {candidate.stage}
                  </button>
                </td>
                <td className="px-4 py-2"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateList;
