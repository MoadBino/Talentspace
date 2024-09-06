import React, { useState } from "react";
import Upload from "../assets/Upload";
import { Input } from "../../shared/Inputs";
import Dropdown from "../../shared/Dropdown";
import Trash from "../assets/Trash";
import Ediat from "../assets/Ediat";
import LeftArrow from "../assets/LeftArrow";
import RightArrow from "../assets/RightArrow";
import { postApi } from "../../Axios";
const OrganizationInfo = ({
  handelChange,
  companyInfo,
  setCompanyInfo,
  setSteps,
  setData,
  steps,
  data,
}) => {
  const [industries, setIndustries] = useState([]);
  const [locations, setLocations] = useState([]);
  const [file, setFile] = useState([]);
  const [base64Images, setBase64Images] = useState([]);

  const createCompany = async (e) => {
    e.preventDefault();
    if (!base64Images.length) {
      alert("add image");
      return;
    }

    try {
      const result = await postApi("/company", companyInfo);

      setData({ ...data, company: result });
      setTimeout(() => {
        console.log(data, result);
      }, 200);
       setSteps(2);
    } catch (err) {
      alert(err)
      console.error("Failed to create company:", err);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = async (e) => {
    const files = e.target.files;
    const base64Files = [];
    const fileArray = [...files];

    for (let i = 0; i < fileArray.length; i++) {
      const base64 = await convertToBase64(fileArray[i]);
      base64Files.push(base64);
    }
    setFile(fileArray);
    setBase64Images(base64Files);
    setCompanyInfo({ ...companyInfo, logo: base64Files[0] });
  };

  return (
    <form onSubmit={createCompany}>
      <div className=" bg-main mb-5 w-[600px]">
        <div className="pt-[21px] px-[29px]">
          <p>
            Logo
            <span className="text-[red]">*</span>
          </p>
          <div className="flex justify-center relative">
            <div className="flex flex-col mt-[19px] justify-center items-center rounded-lgrelative text-[#9A9CAE]">
              <input
                type="file"
                className="absolute top-0 left-0 w-full h-full opacity-0  cursor-pointer"
                onChange={handleFileChange}
                multiple={true}
                accept="image/*"
              />
              {file.length > 0 ? (
                <div className="flex  relative">
                  <button
                    onClick={() => {
                      setFile([]);
                      setBase64Images([]);
                    }}
                    className="absolute right-0 bottom-[20px]"
                  >
                    <Trash />
                  </button>
                  <button
                    onClick={() => {
                      setFile([]);
                      setBase64Images([]);
                    }}
                    className="absolute right-0 top-[20px]"
                  >
                    <Ediat />
                  </button>
                  <img
                    src={base64Images}
                    className="w-[100px] h-[100px] rounded-full"
                  />
                </div>
              ) : (
                <>
                  <Upload />
                </>
              )}
            </div>
          </div>
          <div className="label">
            <p>
              Company name <span className="text-[red]">*</span>{" "}
            </p>
            <Input
              required={true}
              name={"company_name"}
              placeholder={"Orange"}
              onChange={handelChange}
            />
          </div>
          <div>
            <Dropdown
              companyInfo={companyInfo}
              setCompanyInfo={setCompanyInfo}
              industries={industries}
              setIndustries={setIndustries}
              setLocations={setLocations}
              locations={locations}
            />
          </div>
          <div className="label">
            <p>Website</p>
            <Input
              required={true}
              placeholder={"www.orange.com"}
              name={"company_website"}
              onChange={handelChange}
            />
          </div>
          <div className="label">
            <p>Linkedin profile</p>
            <Input
              required={true}
              name={"company_linkedin"}
              placeholder={"linkedin.com/company/orange"}
              onChange={handelChange}
            />
          </div>
        </div>
        <hr className="pb-[10px]" />
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
        <style>{`
        .label {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
            }
            `}</style>
      </div>
    </form>
  );
};

export default OrganizationInfo;
