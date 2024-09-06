import React, { useEffect, useState } from "react";
import { DropDown, Input } from "../../shared/Inputs";
import Remove from "../assets/Remove";
import Add from "../assets/Add";
import { getApi, postApi } from "../../Axios";
import PriorityDropDown from "../../shared/PriorityDropDown";
import LeftArrow from "../assets/LeftArrow";
import RightArrow from "../assets/RightArrow";
const Candidate = ({ job, setJob, setW, steps, setSteps }) => {
  const [initailValue, setInitailValue] = useState(job);
  const [titleState, setTitleState] = useState([""]);
  const [country, setCountry] = useState([""]);
  const [skills, setSkills] = useState([""]);
  const [Educational, setEducational] = useState([""]);
  const [industries, setIndustries] = useState([""]);
  const [educationDegree, setEducationDegree] = useState([]);
  const [skills_optional, setSkills_optional] = useState([""]);

  useEffect(() => {
    if (job) {
      setCountry([...job?.countries]);
      setIndustries([...job?.industries]);
      setSkills([...job?.skills_essential]);
      setSkills_optional([...job?.skills_optional]);
    }
  }, [initailValue]);

  const handelTitleChange = (e) => {
    const { name, id, value } = e.target;
    titleState[id] = value;
    const newTitleState = [...titleState];
    setTitleState(newTitleState);
    setJob({ ...job, job_titles: newTitleState });
    console.log(job);
  };

  const handelSkillChange = (e) => {
    const { name, id, value } = e.target;
    skills[id] = value;
    const newSkills = [...skills];
    setSkills(newSkills);
    setJob({ ...job, skills_essential: newSkills });
    console.log(job);
  };

  const handelCountryChange = (e) => {
    const { name, id, value } = e.target;

    country[id] = value;
    const newCountries = [...country];
    setCountry(newCountries);
    setJob({ ...job, countries: newCountries });
    console.log(job);
  };
  const handelEducationalChange = (e) => {
    const { name, id, value } = e.target;

    Educational[id] = value;
    const newEducational = [...Educational];
    setEducational(newEducational);
    setJob({ ...job, education_title: newEducational });
    console.log(job);
  };
  const handelEducationalDegreeChange = (e) => {
    const { name, id, value } = e.target;

    educationDegree[id] = value;
    const neweducationDegree = [...educationDegree];
    setEducationDegree(neweducationDegree);
    setJob({ ...job, education_degree: neweducationDegree });
    console.log(job);
  };
  const handelIndustriesDegreeChange = (e) => {
    const { name, id, value } = e.target;
    industries[id] = value;
    const neweindustries = [...industries];
    setIndustries(neweindustries);
    setJob({ ...job, industries: neweindustries });
    console.log(job);
  };

  const handelDkillsOptionalChange = (e) => {
    const { name, id, value } = e.target;

    skills_optional[id] = value;
    const neweskills_optional = [...skills_optional];
    setSkills_optional(neweskills_optional);
    setJob({ ...job, skills_optional: neweskills_optional });
    console.log(job);
  };
  const onSubmit = async (e, value) => {
    e.preventDefault();
    delete job._id;
    console.log(job);

    try {
      const data = await postApi("/job", job);
      setW(100);
      setSteps(3);
    } catch (err) {
      return alert("please try again ");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className=" p-5">
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
                <PriorityDropDown
                  className={
                    "h-[44px] text-[#A1A5B7] w-[132px] border-border focus:border-border placeholder-[#A1A5B7]"
                  }
                />
                <button
                  type="button"
                  onClick={() => {
                    titleState.splice(index, 1);
                    const newtitleState = [...titleState];
                    setTitleState(newtitleState);
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
        <hr className="w-full border-border " />
        <div className="p-5">
          <p className="mb-[10px] text-[14px] font-[500]">
            Experience <span className="text-[#FD1C1C]">*</span>
          </p>
          <DropDown
            required={true}
            onChange={(e) => {
              setJob({ ...job, years_of_experience: e.target.value });
            }}
            className="w-full h-[44px] text-[#A1A5B7] px-[10px] mb-[19px] border-border focus:border-border placeholder-[#A1A5B7]"
          >
            <option value="">Select a experience</option>
            <option>0-2</option>
            <option>1-2 years</option>
          </DropDown>
          <div className="flex justify-between gap-2">
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
        <hr className=" border-border" />
        <div className="p-5">
          {country.map((element, index) => (
            <>
              <div key={index} className="flex gap-3 ">
                <div className="w-full">
                  <h4 className="mb-[13px]">Country</h4>
                  <DropDown
                    placeholder={"country"}
                    required={true}
                    id={index}
                    onChange={handelCountryChange}
                    className="w-full h-[44px] text-[#A1A5B7] px-[10px] border-border focus:border-border placeholder-[#A1A5B7]"
                  >
                    <option value="">Select a country</option>
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
        <hr className=" border-border" />
        <div className="p-5">
          <p>skills (max15)</p>
          {skills.map((element, index) => {
            return (
              <div key={index} className="flex gap-5 my-[8px]">
                <Input
                  index={index}
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
                  <PriorityDropDown
                    className={
                      "h-[44px] w-[132px] text-[#A1A5B7] border-border focus:border-border placeholder-[#A1A5B7]"
                    }
                  />

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
        <hr className=" border-border" />
        <div className="p-5">
          <p> secound skills </p>
          {skills_optional.map((element, index) => {
            return (
              <div key={index} className="flex gap-5 my-[8px]">
                <Input
                  index={index}
                  placeholder={"Skills"}
                  value={element}
                  required={true}
                  id={index}
                  onChange={handelDkillsOptionalChange}
                  className={
                    "w-full border-border text-[#A1A5B7] focus:border-border placeholder-[#A1A5B7]"
                  }
                />
                <div className="flex gap-2 justify-center items-center">
                  <PriorityDropDown
                    className={
                      "h-[44px] w-[132px] text-[#A1A5B7] border-border focus:border-border placeholder-[#A1A5B7]"
                    }
                  />

                  <button
                    type="button"
                    onClick={() => {
                      skills_optional.splice(index, 1);
                      const newSkills = [...skills_optional];
                      setSkills_optional(newSkills);
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
            onClick={() => setSkills_optional([...skills_optional, ""])}
          >
            <span>
              <Add />
            </span>
            Add skills
          </button>
        </div>
        <hr className="w-full border-border " />
        <div className="p-5">
          <div className="flex mb-[10px]">
            <p className="w-[300.5px]">Educational title</p>
            <p className="w-[300.5px]">Degree</p>
            <p className="">Priority</p>
          </div>
          <div>
            {Educational.map((element, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between w-full mb-[13px]"
                >
                  <DropDown
                    required={true}
                    onChange={handelEducationalChange}
                    id={index}
                    className="w-[273.25px] h-[44px] text-[#A1A5B7] px-[10px] border-border focus:border-border placeholder-[#A1A5B7]"
                  >
                    <option value="">Select a Educational</option>
                    <option>Accounting</option>
                    <option>Finance</option>
                    <option>Tax</option>
                  </DropDown>
                  <DropDown
                    required={true}
                    onChange={handelEducationalDegreeChange}
                    id={index}
                    className="w-[273.25px] h-[44px] text-[#A1A5B7] px-[10px] border-border focus:border-border placeholder-[#A1A5B7]"
                  >
                    <option value="">Select a Degree</option>
                    <option>bachelor</option>
                    <option>master</option>
                  </DropDown>
                  <PriorityDropDown
                    className={
                      "h-[44px] w-[132px] text-[#A1A5B7] border-border focus:border-border placeholder-[#A1A5B7]"
                    }
                  />

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
        <hr className="w-full border-border " />
        <div className="p-5">
          <div className="flex mb-[10px]">
            <p className="w-[570.5px]">Industries</p>
            <p className="w-[113px]">Priority</p>
          </div>
          <div>
            {industries.map((element, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between w-full mb-[13px]"
                >
                  <DropDown
                    id={index}
                    required={true}
                    onChange={handelIndustriesDegreeChange}
                    className="w-[559.5px] h-[44px] text-[#A1A5B7] px-[10px] border-border focus:border-border placeholder-[#A1A5B7]"
                  >
                    <option value="">Select a Industries</option>
                    <option>Computer Hardware Manufacturing</option>
                    <option>Software Development</option>
                    <option>Computer Networking Products</option>
                    <option>Technology, Information and Internet</option>
                    <option>Semiconductor Manufacturing</option>
                    <option>Telecommunications</option>
                    <option>Law Practice</option>
                    <option>Legal Services</option>
                    <option>Business Consulting and Services</option>
                    <option>Biotechnology Research</option>
                    <option>Medical Practices</option>
                    <option>Hospitals and Health Care</option>
                    <option>Pharmaceutical Manufacturing</option>
                  </DropDown>

                  <PriorityDropDown
                    className={
                      "h-[44px] w-[132px] text-[#A1A5B7] border-border focus:border-border placeholder-[#A1A5B7]"
                    }
                  />
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
      <hr className="mb-[9.75px]" />

      <div className="flex justify-end gap-[6px] mr-[29.5px] mb-[25.5px]">
        <button
          type="button"
          className="p-4 flex justify-center items-center gap-2 bg-[#212D4E] py-[12px] px-[18px] rounded-[6px] w-[88px]"
        >
          <span>
            <LeftArrow />
          </span>
          back
        </button>
        <button
          type="submit"
          className="p-4 bg-[#560DF5] py-[12px] px-[18px] rounded-[6px] "
        >
          <span className="flex">
            Next <RightArrow />
          </span>
        </button>
      </div>
    </form>
  );
};

export default Candidate;
