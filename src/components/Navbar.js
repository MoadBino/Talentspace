import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Thunder from "./assets/Thunder";
import DownArrow from "./assets/DownArrow";
import Logout from "./assets/Logout";
import Dark from "./assets/Dark";
import Profile from "./assets/Profile";
import Experience from "./assets/Experience";
import Toggel from "../shared/Toggel";
import { postApi } from "../Axios";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  const [pathname, setPathname] = useState(location.pathname);

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const logout = async () => {
    await postApi("logout");
    navigate("/login");
  };

  const userData = localStorage.getItem("userData");
  const obj = JSON.parse(userData);
  console.log(obj);

  useEffect(() => {
    setPathname(location.pathname.split("/")?.[1]);
    console.log(pathname.split("/")?.[1]);
  }, [location]);

  return (
    <div className="bg-main rounded-xl mb-[26px] mt-[6px] flex h-[46px] py-[40px] justify-between items-center  relative">
      {open && (
        <div className="bg-main border-border rounded-md  absolute  top-[50px] right-0 w-[300px]">
          <div className="flex  gap-3 pt-5 pl-[13px]">
            <img
              className="h-[40px] w-[40px] rounded-full"
              src={obj?.logo || "/v3_0282261 1.jpg"}
            />
            <div className="grid">
              <p>{(obj.first_name, obj.first_name)}</p>
              <div>
                <span className="flex items-center gap-2">{obj.email}</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-[9px] pl-3 mb-[23px]">
            <p>account</p>
          </div>
          <div className="flex justify-between px-3">
            <p className="mb-[22px]  flex gap-2">
              <span>
                <Dark />
              </span>
              Dark
            </p>
            <Toggel />
          </div>
          <hr />
          <div className="flex pl-3 pb-4 mt-[14px]">
            <Logout />
            <button onClick={logout} className="bg-[">
              Logout
            </button>
          </div>
        </div>
      )}
      <div className="flex items-center gap-[10px] py-3 pl-2">
        <img src="/logo.png" className="w-[44px] h-[44px]"></img>
        <button
          onClick={() => {
            navigate("/");
          }}
          className={` ${
            pathname == "" || pathname == "job"
              ? "text-white"
              : "text-[#636674]"
          }  flex gap-2`}
        >
          <Experience />
          Jobs
        </button>
        <button
          onClick={() => {
            navigate("/Pools");
          }}
          className={` ${
            pathname == "/Pools" ? "text-white" : "text-[#636674]"
          }  flex gap-2`}
        >
          <Profile />
          Talent pool
        </button>
      </div>
      <div className="pr-[19px] relative  py-[3.25px] flex gap-[12px]">
        <img
          className="h-[40px] w-[40px] rounded-full"
          src={obj?.logo || "/v3_0282261 1.jpg"}
        />
        <div className="grid">
          <p>{`${obj.first_name} ${obj.last_name}`}</p>

          <div>
            <span className="flex items-center gap-2">
              <Thunder />
              5000
            </span>
          </div>
        </div>
        <button
          onClick={() => {
            setOpen(open ? false : true);
          }}
        >
          <DownArrow />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
