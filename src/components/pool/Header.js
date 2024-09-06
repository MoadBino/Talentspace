import React from "react";
import Details from "../assets/Details";
import File from "../assets/File";
import JobIcon from "../assets/Job";
import { useNavigate } from "react-router-dom";
const Header = ({ profile, setPage }) => {
  const navigate = useNavigate();
  const personal = profile?.personal;
  return (
    <div className="bg-main rounded-lg ">
      <div className="p-5 flex  gap-[10px]">
        <img
          src={personal?.picture}
          className="w-[50px] h-[50px] rounded-full "
        />
        <div className="">
          <p className="text-[18px[ font-[600]">{`${personal?.first_name} ${personal?.last_name}`}</p>
          <p className="text-[13.91px] font-[500] text-[#9A9CAE]">
            {personal?.job_title}
          </p>
          <p className="text-[13px] font-[600] text-[#9A9CAE]">
            6551dfef88a1950334b8710d
          </p>
        </div>
      </div>
      <hr />
      <div className="flex gap-[8px] py-[13px]">
        <button
          onClick={() => {
            setPage(false);
          }}
          className="flex items-center p-[9px] gap-[8px]"
        >
          <span>
            <Details />
          </span>
          Details
        </button>
        <button
          onClick={() => {
            setPage("file");
          }}
          className="flex items-center p-[9px] gap-[8px]"
        >
          <span>
            <File />
          </span>
          Files
        </button>
        <button
          onClick={() => {
            setPage("jobs");
          }}
          className="flex items-center p-[9px] gap-[8px]"
        >
          <span>
            <JobIcon />
          </span>
          Jobs
        </button>
      </div>
    </div>
  );
};

export default Header;
