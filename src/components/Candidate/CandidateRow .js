import React from "react";
import Add from "../assets/Add";
const candidates = [
  {
    name: "Sadeeq Mofeed",
    role: "UI/UX Designer",
    experience: "1 - 2 years",
    skills: ["Figma", "Wireframing", "Prototyping", "User research"],
  },
  {
    name: "Omar Farooq",
    role: "Computer engineer",
    experience: "Fresh",
    skills: ["Architecture", "CPU", "Repairing", "AutoCAD"],
  },
  {
    name: "Eslam Khader",
    role: "Software Engineer",
    experience: "3 - 5 years",
    skills: ["ASP.NET", "C++", "C#", "node.JS", "JS"],
  },
];

const TalentPool = ({ setAdd }) => {
  return (
    <div className="bg-main rounded-lg shadow-lg p-6 h-[70vh]">
      <div className="flex justify-between mb-[16px]">
        <h2 className="text-white text-xl font-semibold mb-4">
          Orange’s talent pool
        </h2>
        <button
          onClick={() => {
            setAdd(true);
          }}
          className="bg-[#560DF5] rounded-[6px] gap-[8px] flex justify-center items-center px-[12px]"
        >
          <span>
            <Add />
          </span>
          Add candidates
        </button>
      </div>
      <hr className="border-border mb-[17px]" />
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-white">
          <thead className="relative ">
            <tr>
              <th className="pb-4">
                <div className="jobs items-center gap-2 flex h-[20px]">
                  <input
                    type="checkbox"
                    className="w-[24px] my-[24px] h-[24px]"
                  />
                  Profile
                </div>
              </th>
              <th className="pb-4">Experience</th>
              <th className="pb-4">Skills</th>
              <th className="pb-4">Options</th>
            </tr>
            <hr className="absolute w-full border-border" />
          </thead>

          <tbody>
            {candidates.map((candidate, index) => (
              <tr key={index} className="border-b border-[#3E2A85]">
                <td className="py-4 jobs flex items-center flex-col  sm:flex-row lg:w-[500px]">
                  <input type="checkbox" className="w-[24px] mr-2 h-[24px]" />
                  <div className="rounded-full bg-gray-600 h-10 w-10 mr-4 mb-2 sm:mb-0"></div>
                  <div className="w-full sm:w-auto">
                    <p>{candidate.name}</p>
                    <p className="text-sm text-gray-400">{candidate.role}</p>
                  </div>
                </td>
                <td className="py-4">{candidate.experience}</td>
                <td className="py-4 flex flex-wrap">
                  {candidate.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-main border-[1px] border-border text-sm py-1 px-2 rounded mr-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </td>
                <td className="py-4">
                  <button className="bg-[#212D4E] w-[80px] flex gap-[10px] justify-center items-center h-[44px]  text-white rounded-lg">
                    View
                    <span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.43828 10.3078C7.36151 10.3082 7.2854 10.2935 7.21433 10.2645C7.14326 10.2354 7.07862 10.1927 7.02411 10.1386L3.52411 6.63859C3.46944 6.58436 3.42604 6.51984 3.39643 6.44876C3.36681 6.37767 3.35156 6.30143 3.35156 6.22442C3.35156 6.14741 3.36681 6.07117 3.39643 6.00008C3.42604 5.929 3.46944 5.86448 3.52411 5.81025C3.63341 5.70161 3.78125 5.64062 3.93536 5.64063C4.08947 5.64062 4.23732 5.70161 4.34661 5.81025L7.43828 8.90192L10.5241 5.81025C10.6334 5.70161 10.7813 5.64063 10.9354 5.64063C11.0895 5.64063 11.2373 5.70161 11.3466 5.81025C11.4013 5.86448 11.4447 5.929 11.4743 6.00008C11.5039 6.07117 11.5192 6.14741 11.5192 6.22442C11.5192 6.30143 11.5039 6.37767 11.4743 6.44876C11.4447 6.51984 11.4013 6.58436 11.3466 6.63859L7.84661 10.1386C7.73796 10.2464 7.59131 10.3071 7.43828 10.3078Z"
                          fill="#FCFCFC"
                        />
                      </svg>
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TalentPool;
