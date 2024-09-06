import React, { useEffect, useState } from "react";
import LinkdinBlue from "../assets/LinkdinBlue";
import Byat from "../assets/Byat";
import Personal from "../assets/Personal";
import Email from "../assets/Email";
import Experience from "../assets/Experience";
import JobIcon from "../assets/Job";
import Phone from "../assets/Phone";
import Summary from "../assets/Summary";
import Location from "../assets/Location";
import UK from "../assets/UK";
import Eye from "../assets/Eye";
import CheckMark from "../assets/CheckMark";
import Education from "../assets/Education";
import Certificates from "../assets/Certificates";
import Languages from "../assets/Languages";
import Projects from "../assets/Projects";
import Hobbies from "../assets/Hobbies";
import Dot from "../assets/Dot";
import Skills from "../assets/Skills";
import Line from "../assets/Line";
const CandidateList = ({ profile, setPage }) => {
  const personal = profile?.personal;
  const education = profile?.education;
  const skills = profile?.skills?.all_skills;
  const [section, setSection] = useState({
    Experience: true,
    Skills: true,
    Education: true,
    Certificates: true,
    Languages: true,
    Projects: true,
    Hobbies: true,
    Summary: true,
  });

  const items = [
    {
      icon: <JobIcon />,
      title: "Experience",
    },
    {
      icon: <Skills />,
      title: "Skills",
    },
    {
      icon: <Education />,
      title: "Education",
    },
    {
      icon: <Certificates />,
      title: "Certificates",
    },
    {
      icon: <Languages />,
      title: "Languages",
    },
    {
      icon: <Projects />,
      title: "Projects",
    },
    {
      icon: <Hobbies />,
      title: "Hobbies",
    },
    {
      icon: <Summary />,
      title: "Summary",
    },
  ];
  return (
    <>
      <div className="bg-main p-5 rounded-[12px]">
        <div className="flex items-center gap-2 mb-[13px] ">
          <Eye />
          <p className="text-[16.25px] font-[600]">Show / hide</p>
        </div>
        <hr />
        <div className="flex flex-wrap gap-2 mt-[10px]">
          {items.map((element, index) => {
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  section[element.title] = section[element.title]
                    ? false
                    : true;
                  const newSextion = { ...section };
                  setSection(newSextion);
                }}
                className={`flex p-[7px] items-center gap-[8px] ${
                  section[element.title]
                    ? "bg-[#212D4E] "
                    : "bg-main border-2 border-border"
                }   rounded-[6px]`}
              >
                {element.icon}
                <p className="text-[13.91px] font-[500]  ">{element.title}</p>
                <>{section[element.title] ? <CheckMark /> : ""}</>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-main p-5 rounded-[12px] ">
        <div className="items-center flex gap-2 mb-[13px]">
          <Personal />
          <p>Personal info</p>
          <p className="p-1 bg-[#45435FBF]">7</p>
        </div>
        <hr className="pt-[10px]" />
        <>
          <p className="text-[13px] font-[600] mb-[10px]">Contact info</p>
          <div className="flex gap-[10px]">
            <p className="font-[600] text-[13px] flex gap-2 p-[7px] bg-[#45435FBF] ">
              <span>
                <Email />
              </span>
              {personal?.emails?.[0]}
            </p>
            <p className="font-[600] text-[13px] flex gap-2 p-[7px] bg-[#45435FBF] ">
              <span>
                <Phone />
              </span>
              {personal?.phone_numbers?.[0]}
            </p>
            <p className="font-[600] text-[13px] flex gap-2 p-[7px] bg-[#45435FBF] ">
              <span>
                <LinkdinBlue />
              </span>
              /kamalshawer
            </p>
            <p className="font-[600] text-[13px] flex items-center gap-2 p-[7px] bg-[#45435FBF] ">
              <span>
                <Byat />
              </span>
              +/kamalshawer
            </p>
          </div>
          <p className="text-[13px] font-[600] my-[10px]">Addresses</p>
          <div className="flex gap-[10px]">
            <p className="font-[600] text-[13px]  flex gap-2 p-[7px] bg-[#45435FBF] ">
              <span>
                <Location />
              </span>
              {personal?.address}
            </p>
          </div>
          <p className="text-[13px] font-[600] my-[10px]">Countries</p>
          <div className="flex gap-[10px] rounded-[40px]">
            <p className="font-[600] text-[13px] flex gap-2 p-[7px] bg-[#45435FBF] ">
              <span>
                <UK />
              </span>
              {personal?.location?.country}
            </p>
          </div>
        </>
      </div>

      {section.Experience && (
        <div className="bg-main p-5 rounded-[12px] ">
          <div className="items-center flex gap-2 mb-[13px]">
            <Experience />
            <p>Experience</p>
            <p className="p-1 bg-[#45435FBF]">7</p>
          </div>
          <hr className="pt-[10px]" />
          <>
            {profile?.experience?.map((element, index) => {
              return (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center ">
                    <Dot />
                    {index == 0 ? <Line /> : ""}
                  </div>
                  <div>
                    <p className="text-[12.35px] text-[#9A9CAE]">
                    {`${element.job_start_date} - ${element.job_end_date}`}
                    </p>
                    <p className="text-[14px] font-[600]">
                      {element.job_title}
                    </p>
                  </div>
                </div>
              );
            })}
          </>
        </div>
      )}

      {section.Summary && (
        <div className="bg-main p-5 rounded-[12px] ">
          <div className="items-center flex gap-2 mb-[13px]">
            <Summary />
            <p>Summary</p>
          </div>
          <hr className="pt-[10px]" />
          <>
            <p className="text-[13px] font-[400]">
              {profile?.objective?.objective}
            </p>
          </>
        </div>
      )}
      {section.Skills && (
        <div className="bg-main p-5 rounded-[12px] ">
          <div className="items-center flex gap-2 mb-[13px]">
            <Skills />
            <p>Skills</p>
            <p className="p-1 bg-[#45435FBF]">7</p>
          </div>
          <hr className="pt-[10px]" />
          <>
            <div className="flex flex-wrap gap-[10px]">
              {skills?.map((element, index) => {
                return (
                  <p
                    key={index}
                    className=" justify-center items-center font-[600] text-[13px] flex gap-2 p-[7px] bg-[#45435FBF] rounded-md "
                  >
                    {index == 0 ? <CheckMark /> : ""}
                    {element}
                  </p>
                );
              })}
            </div>
          </>
        </div>
      )}

      {section.Education && (
        <div className="bg-main p-5 rounded-[12px] ">
          <div className="items-center flex gap-2 mb-[13px]">
            <Education />
            <p>Education</p>
            <p className="p-1 bg-[#45435FBF]">7</p>
          </div>
          <hr className="pt-[10px]" />
          <>
            {education?.map((element, index) => {
              return (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center ">
                    <Dot />
                    {education.length !== index + 1 ? <Line /> : ""}
                  </div>
                  <div>
                    <p className="text-[#D9D9D9]">{`${element.education_start_date} - ${element.education_end_date}`}</p>
                    <p>{element.education_title}</p>
                  </div>
                </div>
              );
            })}
          </>
        </div>
      )}
      {section.Languages && (
        <div className="bg-main p-5 rounded-[12px] ">
          <div className="items-center flex gap-2 mb-[13px]">
            <Languages />
            <p>Languages</p>
            <p className="p-1 bg-[#45435FBF]">7</p>
          </div>
          <hr className="pt-[10px]" />
          <>
            <div className="flex gap-[10px]">
              <p className="font-[600] text-[13px] flex gap-2 p-[7px] bg-[#45435FBF] ">
                Arabic
              </p>
              <p className="font-[600] text-[13px] flex gap-2 p-[7px] bg-[#45435FBF] ">
                English
              </p>
            </div>
          </>
        </div>
      )}
      {section.Certificates && (
        <div className="bg-main p-5 rounded-[12px] ">
          <div className="items-center flex gap-2 mb-[13px]">
            <Certificates />
            <p>Certificates</p>
            <p className="p-1 bg-[#45435FBF]">7</p>
          </div>
          <hr className="pt-[10px]" />
          <>
            <div>
              <div className="flex items-center">
                <div className="flex flex-col items-center ">
                  <Dot />
                  <Line />
                </div>
                <div>
                  <p className="text-[#D9D9D9]">Apr 2023 - Nov 2023</p>
                  <p>UI/UX Internship trainee</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center ">
                  <Dot />
                </div>
                <div>
                  <p>Apr 2023 - Nov 2023</p>
                  <p>UI/UX Internship trainee</p>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
      {section.Hobbies && (
        <div className="bg-main p-5 rounded-[12px] ">
          <div className="items-center flex gap-2 mb-[13px]">
            <Hobbies />
            <p>Hobbies</p>
            <p className="p-1 bg-[#45435FBF]">7</p>
          </div>
          <hr className="pt-[10px]" />
          <>
            <div className="flex gap-[10px]">
              <p className="font-[600] text-[13px] flex gap-2 p-[7px] bg-[#45435FBF] ">
                Reading
              </p>
              <p className="font-[600] text-[13px] flex gap-2 p-[7px] bg-[#45435FBF] ">
                Football
              </p>
            </div>
          </>
        </div>
      )}
      {section.Projects && (
        <div className="bg-main p-5 rounded-[12px] ">
          <div className="items-center flex gap-2 mb-[13px]">
            <Projects />
            <p>Projects </p>
            <p className="p-1 bg-[#45435FBF]">7</p>
          </div>
          <hr className="pt-[10px]" />
          <>
            <div>
              <div className="flex items-center">
                <div className="flex flex-col items-center ">
                  <Dot />
                  <Line />
                </div>
                <div>
                  <p className="text-[#D9D9D9]">Apr 2023 - Nov 2023</p>
                  <p>UI/UX Internship trainee</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center ">
                  <Dot />
                </div>
                <div>
                  <p>Apr 2023 - Nov 2023</p>
                  <p>UI/UX Internship trainee</p>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default CandidateList;
