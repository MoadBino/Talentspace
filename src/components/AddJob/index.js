import React, { useState } from "react";
import Title from "./JobInformation";
import IdealCandidate from "./IdealCandidate";
import LeftArrow from "../assets/LeftArrow";
import RightArrow from "../assets/RightArrow";
import Candidate from "./Candidate";
import axios from "axios";
import HiringAndPublishing from "./HiringAndPublishing";
const AddJob = ({ setIsAdd }) => {
  const [w, setW] = useState(25);
  const [steps, setSteps] = useState(0);
  const [jobDraft, setjobDraft] = useState({});

  const onSubmit = async () => {};

  return (
    <div className="flex justify-center min-h-[702px] ">
      <div className="bg-main flex flex-col justify-between rounded-lg w-[800px]  ">
        <div className="p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white text-lg font-semibold">
              {steps == "0" ? "Job information" : "Ideal candidate"}
            </h2>
            <button className="text-white text-lg font-semibold">
              &times;
            </button>
          </div>
          <div className="bg-gray-800 h-1 w-full mb-4">
            <div
              className="bg-purple-500 h-full"
              style={{ width: w + "%" }}
            ></div>
          </div>
          {steps == 0 && <Title />}
          {steps == 1 && <IdealCandidate />}
          {steps == 2 && <Candidate />}
          {steps == 3 && <HiringAndPublishing />}
        </div>
        <div className=" pb-[16px]">
          <hr className="border-[#3F425480] pb-[16px]" />
          <div className="flex justify-end gap-[6px] mr-[6px]">
            <button
              onClick={() => {
                if (steps == 0) {
                  setIsAdd(false);
                  setW(25);
                } else {
                  setSteps(steps - 1);
                  setW(w - 25);
                }
              }}
              className="p-4 flex justify-center items-center gap-2 bg-[#212D4E] py-[12px] px-[18px] rounded-[6px] w-[88px]"
            >
              <span>
                <LeftArrow />
              </span>
              back
            </button>
            <button
              onClick={async () => {
                if (steps == 3) {
                  setIsAdd(false);
                }
                if (steps == 1) {
                  await onSubmit();
                  setSteps(steps + 1);
                  setW(w + 25);
                } else {
                  setSteps(steps + 1);
                  setW(w + 25);
                }
              }}
              className="p-4 bg-[#560DF5] py-[12px] px-[18px] rounded-[6px] "
            >
              {steps == 0 ? (
                <span className="flex">
                  Next <RightArrow />
                </span>
              ) : (
                "Generate Ideal candidate"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
