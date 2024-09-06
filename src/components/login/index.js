import React, { useState } from "react";
import Passowrd from "../assets/Passowrd";
import Profile from "../assets/Profile";
import LoginProfile from "../assets/Login";
import { useNavigate } from "react-router-dom";
import Sun from "../assets/Sun";
import { postApi, getApi } from "../../Axios";
const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState("");

  const handeInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const onSubmit = async (e) => {
    const formData = new FormData();
    formData.append("email", loginData.email);
    formData.append("password", loginData.password);

    e.preventDefault();
    try {
      const data = await postApi("login", formData, true);
      const userData = await getApi("user");
      localStorage.setItem("userData", JSON.stringify(userData));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-[60px]">
      <div className="flex flex-col items-center">
        <img src="/LoginLogo.png" />
        <p className="loginHeader pt-5 mb-[40px]">Smart Recruitment Services</p>
      </div>
      <div className="bg-main w-[542px] flex flex-col gap-[30px]  rounded-xl p-[30px]">
        <div className="flex justify-between items-center">
          <p className="loginBox ">Organization login</p>
          <button className="bg-[#212D4E] py-[9px] px-[12px] flex gap-2 items-center rounded-md">
            <Sun />
            <span>Light</span>
          </button>
        </div>
        <form onSubmit={onSubmit} className=" ">
          <div className="relative mb-[30px]">
            <input
              required={true}
              placeholder="Username"
              onChange={handeInputChange}
              name="email"
              className="w-full h-[49px] pl-[60px] bg-main rounded-lg focus:border-2 focus:border-border focus:outline-none border-2 border-border"
            />
            <span className="absolute left-0 bg-[#2B2863] h-full top-0 ">
              <Profile isLogin={true} />
            </span>
          </div>
          <div className="relative">
            <input
              placeholder="Password"
              required={true}
              onChange={handeInputChange}
              name="password"
              className="w-full h-[49px] pl-[60px] bg-main rounded-lg focus:border-2 focus:border-border focus:outline-none border-2 border-border"
            />
            <span className="absolute left-0 bg-[#2B2863] h-full top-0 ">
              <Passowrd />
            </span>
          </div>
          <div className="mt-[30px]">
            <button
              type="submit"
              className="bg-[#560DF5] w-full py-[12px] rounded-md flex  justify-center items-center gap-2"
            >
              <LoginProfile />
              Login
            </button>
          </div>
        </form>
        <div>
          <p className="text-[#A662FF] w-full text-[14px] text-[600] rounded-md">
            Or login using secret code
          </p>
          <hr className="mt-5 mb-[18px]" />
          <div className="flex flex-col justify-center items-center">
            <p className="text-[14px] font-[600] mb-[12px]">
              No organization account yet?
            </p>
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="text-[#A662FF] font-[600]"
            >
              7-days free trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
