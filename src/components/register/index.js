import React, { useState } from "react";
import Verification from "./Verification";
import OrganizationInfo from "./OrganizationInfo";
import Kind from "./Kind";
import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";
import LeftArrow from "../assets/LeftArrow";
import RightArrow from "../assets/RightArrow";
const Register = () => {
  const navigate = useNavigate();
  const [selected, setselected] = useState("type");
  const [steps, setSteps] = useState(0);
  const [data, setData] = useState({});
  const [companyInfo, setCompanyInfo] = useState({
    company_name: "",
    company_website: "",
    company_linkedin: "",
    company_type: "",
    logo: "",
    countries: [],
    industries: [],
    description:
      "The Reliable One-Stop Partner for the Most Forward-thinking Brands.",
    subscription: "Starter",
    redacted_list: [
      "name",
      "summary",
      "company_name",
      "address",
      "institution_name",
      "linkedin",
      "phone",
      "email",
      "website",
      "links",
      "picture",
    ],
  });

  const buttons = [
    { name: "Organization type", step: 0 },
    { name: "Organization Info", step: 1 },
    { name: "User Info", step: 2 },
    { name: "Verification ", step: 3 },
  ];
  const handelUserChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handelCompanyChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
    console.log(companyInfo);
  };

  return (
    <div className="flex justify-center items-center mt-[20px]">
      <div className="bg-main w-[600px] pt-[39px] rounded-[12px]">
        <div className="flex justify-between px-[29px] pb-5  ">
          <p className="text-[18px] font-[600]">7-Days free trial</p>
          <button></button>
        </div>
        <hr />
        <div className="flex justify-between px-[29px] py-5">
          {buttons.map((element) => {
            return (
              <button
                onClick={() => {
                  setselected(element.value);
                }}
                className={`${
                  steps == element.step ? "text-white" : "text-[#636674]"
                }   text-[14px] font-[600] `}
              >
                {element.name}
              </button>
            );
          })}
        </div>
        <hr />

        {steps == 0 ? (
          <Kind
            data={companyInfo}
            setData={setCompanyInfo}
            handelChange={handelCompanyChange}
            setSteps={setSteps}
          />
        ) : steps == 1 ? (
          <OrganizationInfo
            setSteps={setSteps}
            steps={steps}
            data={data}
            companyInfo={companyInfo}
            setCompanyInfo={setCompanyInfo}
            handelChange={handelCompanyChange}
            setData={setData}
          />
        ) : steps == 2 ? (
          <UserInfo
            data={data}
            setSteps={setSteps}
            setData={setData}
            handelChange={handelUserChange}
          />
        ) : (
          <Verification />
        )}
        {steps == 0 ? (
          <>
            <hr className="pb-[10px]" />
            <div className="flex justify-end gap-[6px] mr-[29.5px] mb-[25.5px]">
              <button
                onClick={() => {
                  navigate("/login");
                }}
                type="button"
                className="p-4 flex justify-center items-center gap-2 bg-[#212D4E] py-[12px] px-[18px] rounded-[6px] w-[88px]"
              >
                <span>
                  <LeftArrow />
                </span>
                back
              </button>
              <button
                onClick={() => {
                  if (!companyInfo?.company_type) {
                    alert("pick your company type");
                  }
                }}
                type="submit"
                className="p-4 bg-[#560DF5] py-[12px] px-[18px] rounded-[6px] "
              >
                <span className="flex">
                  Next <RightArrow />
                </span>
              </button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Register;
