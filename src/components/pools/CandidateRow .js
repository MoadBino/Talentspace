import React, { useEffect, useState } from "react";
import Add from "../assets/Add";
import { getApi } from "../../Axios";
import { useNavigate } from "react-router-dom";
import Experience from "../assets/Experience";
const TalentPool = ({ setAdd }) => {
  const navigate = useNavigate();
  const [pools, setPools] = useState("");
  useEffect(() => {
    const data = getApi("pool?count=10&start=0")
      .then((result) => {
        setPools(result);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="bg-main rounded-lg shadow-lg  min-h-[70vh] w-full">
      <div className="flex justify-between  w-full p-6">
        <h2 className="text-white text-xl font-semibold ">
          Orange’s talent pool {pools?.elements?.length}
        </h2>
        <button
          onClick={() => {
            setAdd(true);
          }}
          className="bg-[#560DF5] rounded-[6px] gap-[8px] flex justify-center items-center py-[9px] px-[12px]"
        >
          <span>
            <Add />
          </span>
          Add candidates
        </button>
      </div>
      <hr className="border-border jobs w-full" />
      <div className="overflow-x-auto jobs w-full px-5">
        <div className="grid THT  grid-cols-[minmax(100px,_600px)_150px_400px_1fr] w-full ">
          <div className="   flex items-center gap-4">
            <input type="checkbox" className="w-[24px] h-[24px]  " />
            <p>PROFILE</p>
          </div>
          <div className="p-4">EXPERIENCE</div>
          <div className="p-4">SKILLS</div>
          <div className="p-4  text-end">...</div>
        </div>
      </div>
      <hr />
      {pools?.elements?.map((element, index) => {
        return (
          <>
            <div
            
              key={index}
              onClick={() => {
                navigate(`/pool/${element.profile_id}`);
              }}
              className="grid THT hover:cursor-pointer hover:bg-[#6E1EF74D]  grid-cols-[minmax(100px,_620px)_150px_600px_1fr] w-full px-5 py-[10px] "
            >
              <div className="  flex items-center gap-2">
                <div className=" jobs flex items-center flex-col gap-2  sm:flex-row lg:w-[500px]">
                  <input type="checkbox" className="w-[24px] mr-2 h-[24px]" />
                  <img
                    className="w-[50px] h-[50px] rounded-full"
                    src={element.picture}
                  />
                  <div className="w-full sm:w-auto">
                    <p>{element.name}</p>
                    <p className="text-sm text-gray-400">{element.role}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start items-center gap-3">
                <span>
                  <Experience />
                </span>
                <p>{element.total_experience} years</p>
              </div>
              <div className="flex flex-wrap">
                {element.skills.map((skill, i) => (
                  <p
                    key={i}
                    className="bg-main border-[1px] flex items-center  border-border text-sm  h-[35px] px-2 rounded mr-2 mb-2"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default TalentPool;
