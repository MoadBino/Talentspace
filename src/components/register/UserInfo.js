import React, { useState } from "react";
import { Input } from "../../shared/Inputs";
import Avatar from "../assets/Avatar";
import Trash from "../assets/Trash";
import Ediat from "../assets/Ediat";
import { postApi } from "../../Axios";
import { getApi } from "../../Axios";
import LeftArrow from "../assets/LeftArrow";
import RightArrow from "../assets/RightArrow";
const UserInfo = ({ data, setData, handelChange, setSteps }) => {
  const [file, setFile] = useState([]);
  const [base64Images, setBase64Images] = useState([]);
  const register = async (e) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    e.preventDefault();

    try {
      await postApi("register", data);
      await postApi("/login", formData, true);
      const userData = await getApi("user");
      localStorage.setItem("userData", JSON.stringify(userData));

      setSteps(3);
    } catch (err) {
      console.log(err);
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
    setData({ ...data, logo: base64Files[0] });
  };
  return (
    <form onSubmit={register}>
      <div className=" bg-main info w-[600px]">
        <div className="pt-[21px] px-[29px] pb-5 ">
          <div>
            <p className="flex items-center   ">
              Avatar
              <span className="text-[#FD1C1C]">*</span>
            </p>
          </div>
          <div className="flex justify-center relative">
            <div className="flex flex-col  justify-center items-center rounded-lgrelative text-[#9A9CAE]">
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
                  <Avatar />
                </>
              )}
            </div>
          </div>
          <div className="flex gap-4 mt-5 justify-between">
            <div className="w-full">
              <p className="pb-3">
                First name
                <span className="text-[#FD1C1C]">*</span>
              </p>

              <Input
                name={"first_name"}
                placeholder={"mohannad"}
                required={true}
                onChange={handelChange}
              />
            </div>
            <div className="w-full">
              <p className=" pb-3">
                Last Name
                <span className="text-[#FD1C1C]">*</span>
              </p>
              <Input
                name={"last_name"}
                placeholder={"alsouqi"}
                required={true}
                onChange={handelChange}
              />
            </div>
          </div>
          <div className="label mt-[19px] ">
            <p>
              Email
              <span className="text-[#FD1C1C]">*</span>
            </p>
            <Input
              name={"email"}
              placeholder={"orange@orange.com"}
              required={true}
              onChange={handelChange}
            />
          </div>
          <div className="label">
            <p>
              Phone number
              <span className="text-[#FD1C1C]">*</span>
            </p>
            <Input
              name={"phone"}
              placeholder={"07xxxxxxxx"}
              required={true}
              onChange={handelChange}
            />
          </div>

          <div className="label">
            <p>
              Password
              <span className="text-[#FD1C1C]">*</span>
            </p>
            <Input
              name={"password"}
              placeholder={"Enter at least 6 characters"}
              required={true}
              onChange={handelChange}
            />
          </div>
          <div className="label">
            <p>
              Confirm Password
              <span className="text-[#FD1C1C]">*</span>
            </p>
            <Input
              name={"con password"}
              placeholder={"Confirm password"}
              onChange={handelChange}
            />
          </div>
          <div className="label">
            <p>
              Linkedin profile
              <span className="text-[#FD1C1C]">*</span>
            </p>
            <Input
              name={"linkedin"}
              placeholder={"linkedin.com/in/mohannad"}
              required={true}
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
          
          .info p span {
            padding-left: 8px;
            
            }
            `}</style>
      </div>
    </form>
  );
};

export default UserInfo;
