import React, { useState } from "react";
import { DropDown, Input } from "../../shared/Inputs";
import Remove from "../assets/Remove";
import Add from "../assets/Add";

const Candidate = () => {
  const [titleState, setTitleState] = useState([""]);
  const [country, setCountry] = useState([""]);
  const [skills, setSkills] = useState([""]);
  const [Educational, setEducational] = useState([""]);
  const [industries, setIndustries] = useState([""]);
  const handelTitleChange = (e) => {
    const { name, id, value } = e.target;
    titleState[id] = value;
    const newSkills = [...titleState];
    setTitleState(newSkills);
  };

  const handelSkillChange = (e) => {
    const { name, id, value } = e.target;
    skills[id] = value;
    const newSkills = [...skills];
    setSkills(newSkills);
  };

  const handelCountryChange = (e) => {
    const { name, id, value } = e.target;
    titleState[id] = value;
    const newSkills = [...titleState];
    setTitleState(newSkills);
  };

  const onSubmit = () => {};
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className="mb-[16px]">
          <p className="text-[14px] font-[500] ">
            Titles
            <span className="text-[#FD1C1C] pl-2">*</span>
          </p>
          {titleState.map((element, index) => (
            <div key={index} className="flex gap-5 my-[8px]">
              <Input
                placeholder={"Title"}
                value={element}
                required={true}
                id={index}
                onChange={handelTitleChange}
                className={
                  "w-full border-border text-[#A1A5B7] focus:border-border placeholder-[#A1A5B7]"
                }
              />
              <div className="flex gap-2 justify-center items-center">
                <DropDown
                  className={
                    "h-[44px] text-[#A1A5B7] w-[132px] border-border focus:border-border placeholder-[#A1A5B7]"
                  }
                >
                  <option className="text-[#0FEA9A]">High</option>
                  <option className="text-[#00c6ff]">Med</option>
                  <option className="text-[#e8b403]">Low</option>
                </DropDown>
                <button
                  type="button"
                  onClick={() => {
                    titleState.splice(index, 1);
                    const newSkills = [...titleState];
                    setTitleState(newSkills);
                  }}
                >
                  <Remove />
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            className="bg-[#212D4E]  flex justify-center items-center gap-3 text-[12px] mt-[13px]  h-[44px] py-[9px] px-3 rounded-[6px]  "
            onClick={() => setTitleState([...titleState, ""])}
          >
            <span>
              <Add />
            </span>
            Add job title
          </button>
        </div>
        <hr className="w-full border-border mb-[19px]" />
        <div>
          <p className="mb-[10px] text-[14px] font-[500]">
            Experience <span className="text-[#FD1C1C]">*</span>
          </p>
          <DropDown className="w-full h-[44px] text-[#A1A5B7] px-[10px] mb-[19px] border-border focus:border-border placeholder-[#A1A5B7]">
            <option>0 - 2 years</option>
            <option>1-2 years</option>
            <option>+2</option>
          </DropDown>
          <div className="flex justify-between mb-[19.5px]">
            <div className="w-full">
              <p className="mb-[13px]">work type</p>
              <DropDown className="w-full h-[44px] px-[10px] text-[#A1A5B7]  border-border focus:border-border placeholder-[#A1A5B7]">
                <option>full_time</option>
                <option>part time</option>
              </DropDown>
            </div>
            <div className="w-full">
              <p className="mb-[13px]">Enviroment</p>
              <DropDown className="w-full h-[44px] text-[#A1A5B7] px-[10px] border-border focus:border-border placeholder-[#A1A5B7]">
                <option>Hybrid</option>
                <option>onSite</option>
              </DropDown>
            </div>
          </div>
        </div>
        <hr className="mb-[19px] border-border" />
        <div>
          {country.map((element) => (
            <>
              <div className="flex gap-3 mb-[16px]">
                <div className="w-full">
                  <h4 className="mb-[13px]">Country</h4>
                  <DropDown className="w-full h-[44px] text-[#A1A5B7] px-[10px] border-border focus:border-border placeholder-[#A1A5B7]">
                    <option>Saudi Arabia</option>
                    <option>Jordan</option>
                  </DropDown>
                </div>
                <div className="w-full">
                  <h4 className="mb-[13px]">city</h4>
                  <DropDown className="w-full h-[44px] text-[#A1A5B7] px-[10px] border-border focus:border-border placeholder-[#A1A5B7]">
                    <option>Saudi Arabia</option>
                    <option>Saudi Arabia</option>
                    <option>Saudi Arabia</option>
                  </DropDown>
                </div>
              </div>
            </>
          ))}
          <button
            type="button"
            className="bg-[#212D4E] flex justify-center items-center gap-3 text-[14px] my-[19px]  h-[40px] rounded-[4px] py-1 px-2"
            onClick={() => setCountry([...country, ""])}
          >
            <span>
              <Add />
            </span>
            Add country
          </button>
        </div>
        <hr className="mb-[19.5] border-border" />
        <div className="mt-[19px]">
          <p>skills (max15)</p>
          {skills.map((element, index) => {
            return (
              <div key={index} className="flex gap-5 my-[8px]">
                <Input
                  placeholder={"Skills"}
                  value={element}
                  required={true}
                  id={index}
                  onChange={handelSkillChange}
                  className={
                    "w-full border-border text-[#A1A5B7] focus:border-border placeholder-[#A1A5B7]"
                  }
                />
                <div className="flex gap-2 justify-center items-center">
                  <DropDown
                    className={
                      "h-[44px] w-[132px] text-[#A1A5B7] border-border focus:border-border placeholder-[#A1A5B7]"
                    }
                  >
                    <option className="text-[#0FEA9A]">High</option>
                    <option className="text-[#00c6ff]">Med</option>
                    <option className="text-[#e8b403]">Low</option>
                  </DropDown>
                  <button
                    type="button"
                    onClick={() => {
                      skills.splice(index, 1);
                      const newSkills = [...skills];
                      setSkills(newSkills);
                    }}
                  >
                    <Remove />
                  </button>
                </div>
              </div>
            );
          })}
          <button
            type="button"
            className="bg-[#212D4E] flex justify-center items-center gap-3 text-[14px] my-[19px]  h-[40px] rounded-[4px] py-1 px-2"
            onClick={() => setSkills([...skills, ""])}
          >
            <span>
              <Add />
            </span>
            Add skills
          </button>
        </div>
        <hr className="w-full border-border mb-[19px]" />
        <div>
          <div className="flex mb-[10px]">
            <p className="w-[300.5px]">Educational title</p>
            <p className="w-[300.5px]">Degree</p>
            <p className="">Priority</p>
          </div>
          <div>
            {Educational.map((element, index) => {
              return (
                <div className="flex justify-between w-full mb-[13px]">
                  <DropDown className="w-[273.25px] h-[44px] text-[#A1A5B7] px-[10px] border-border focus:border-border placeholder-[#A1A5B7]">
                    <option>Accounting</option>
                    <option>Finance</option>
                    <option>Tax</option>
                  </DropDown>
                  <DropDown className="w-[273.25px] h-[44px] text-[#A1A5B7] px-[10px] border-border focus:border-border placeholder-[#A1A5B7]">
                    <option>bachelor</option>
                    <option>master</option>
                  </DropDown>
                  <DropDown
                    className={
                      "h-[44px] w-[132px] text-[#A1A5B7] border-border focus:border-border placeholder-[#A1A5B7]"
                    }
                  >
                    <option className="text-[#0FEA9A]">High</option>
                    <option className="text-[#00c6ff]">Med</option>
                    <option className="text-[#e8b403]">Low</option>
                  </DropDown>
                  <button
                    type="button"
                    onClick={() => {
                      Educational.splice(index, 1);
                      const newEducational = [...Educational];
                      setEducational(newEducational);
                    }}
                  >
                    <Remove />
                  </button>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            className="bg-[#212D4E] flex justify-center items-center gap-3 text-[14px] my-[19px]  h-[40px] rounded-[4px] py-1 px-2"
            onClick={() => setEducational([...Educational, ""])}
          >
            <span>
              <Add />
            </span>
            Add location
          </button>
        </div>
        <hr className="w-full border-border mb-[19px]" />
        <div>
          <div className="flex mb-[10px]">
            <p className="w-[570.5px]">Industries</p>
            <p className="w-[113px]">Priority</p>
          </div>
          <div>
            {industries.map((element, index) => {
              return (
                <div className="flex justify-between w-full mb-[13px]">
                  <DropDown className="w-[559.5px] h-[44px] text-[#A1A5B7] px-[10px] border-border focus:border-border placeholder-[#A1A5B7]">
                    <option>Computer software</option>
                  </DropDown>

                  <DropDown
                    className={
                      "h-[44px] w-[132px] text-[#A1A5B7] border-border focus:border-border placeholder-[#A1A5B7]"
                    }
                  >
                    <option className="text-[#0FEA9A]">High</option>
                    <option className="text-[#00c6ff]">Med</option>
                    <option className="text-[#e8b403]">Low</option>
                  </DropDown>
                  <button
                    type="button"
                    onClick={() => {
                      industries.splice(index, 1);
                      const newIndustries = [...industries];
                      setIndustries(newIndustries);
                    }}
                  >
                    <Remove />
                  </button>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            className="bg-[#212D4E] flex justify-center items-center gap-3 text-[14px] my-[19px]  h-[40px] rounded-[4px] py-1 px-2"
            onClick={() => setIndustries([...industries, ""])}
          >
            <span>
              <Add />
            </span>
            Add industry
          </button>
        </div>
      </div>
    </form>
  );
};

export default Candidate;
