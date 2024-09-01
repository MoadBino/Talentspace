import React from "react";
import LinkedIn from "../assets/LinkedIn";
import Bayt from "../assets/Bayt";
const HiringAndPublishing = () => {
  return (
    <div className="">
      <hr className="border-border mb-[10px] " />

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Select hiring agent <span className="text-red-500">*</span>
        </label>
        <select className="w-full p-2.5 bg-main border border-[#392164] rounded-lg text-white focus:outline-none">
          <option>Software engineering (Med)</option>
        </select>
      </div>

      <div className="mb-[16px]">
        <label className="block text-sm font-medium mb-2">
          Select where to publish your job application{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-4 mt-[20px]">
          {[
            {
              name: "LinkedIn",
              email: "mylinkedinaccount@email.com",
              icon: <LinkedIn />,
            },
            { name: "Bayt", email: "mybayt@email.com", icon: <Bayt/> },
            { name: "Indeed", email: "mybayt@email.com", icon: "🔍" },
            {
              name: "Glassdoor",
              email: "mylinkedinaccount@email.com",
              icon: "🟩",
            },
            { name: "Akhtaboot", email: "myakhtaboot@email.com", icon: "🐙" },
          ].map((platform, index) => (
            <div
              key={index}
              className="flex items-center p-4  border-[3px] border-[#5E6278] border-dotted rounded-lg"
            >
              <div className="text-4xl mr-4">{platform.icon}</div>
              <div>
                <div className="font-semibold">{platform.name}</div>
                <div className="text-sm text-gray-400">{platform.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringAndPublishing;
