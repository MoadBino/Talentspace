import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-main rounded-xl mb-[26px] mt-[6px]">
      <div className="flex items-center gap-[12px] py-3 pl-2">
        <img src="/logo.png" className="w-[44px] h-[44px]"></img>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-white"
        >
          Jobs
        </button>
        <button
          onClick={() => {
            navigate("/Candidate");
          }}
          className="text-[#636674]"
        >
          Talent pool
        </button>
      </div>
    </div>
  );
};

export default Navbar;
