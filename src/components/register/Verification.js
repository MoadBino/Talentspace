import React from "react";
import LeftArrow from "../assets/LeftArrow";
import RightArrow from "../assets/RightArrow";
import Verfiction from "../assets/Verfiction";
import { useNavigate } from "react-router-dom";

const Verification = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center  justify-center">
        <div className="mt-[19px] mb-[31px]">
          <Verfiction />
        </div>
        <p className="mb-[22px] text-[18px] font-[600]">
          Two Step Verification
        </p>
        <p className="mb-[8px] text-[16px] font-[500] text-[#9A9CAE]">
          We have sent activation link to the email
        </p>
        <p className="mb-[23px] text-[16px] font-[600] ">mohannad@gmail.com</p>
        <p className="mb-[23px] text-[#9A9CAE] text-[16px]">
          Please Activate your account to continue
        </p>
        <p className="mb-[23px] text-[14px] text-[#636674] font-[600]">
          Didn’t receive your link yet? please check your spam or{" "}
          <span className="text-[#A662FF]">Resend link</span>
        </p>
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
          onClick={() => navigate("/")}
          type="submit"
          className="p-4 bg-[#560DF5] py-[12px] px-[18px] rounded-[6px] "
        >
          <span className="flex">
            Next <RightArrow />
          </span>
        </button>
      </div>
    </>
  );
};

export default Verification;
