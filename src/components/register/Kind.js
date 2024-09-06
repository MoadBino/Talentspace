import React, { useState } from "react";
import Researcher from "../assets/Researcher";
import Institution from "../assets/Institution";
import Company from "../assets/Company";

const Kind = ({ data, setData, setSteps }) => {
  return (
    <>
      <hr className="pb-[19px]" />
      <div className="px-[29px] pb-5">
        <p className="pb-5">What kind of organization are you part of?</p>
        <div className="flex gap-[20px] flex-col">
          <buttons
            onClick={() => {
              setData({ ...data, company_type: "company" });
              setSteps(1);
            }}
            className=" gap-[18px] rounded-[6px] py-[24px] px-5 element flex w-full border-border border-2 border-dotted "
          >
            <Company />
            <div>
              <p>Company</p>
              <p>For employers</p>
            </div>
          </buttons>
          <buttons
            onClick={() => {
              setData({ ...data, company_type: "company" });
              setSteps(1);
            }}
            className="w-full px-5 rounded-[6px]  py-[24px] gap-[18px] element flex border-border border-2 border-dotted "
          >
            <Institution />
            <div>
              <p>Company</p>
              <p>For educations and certificates providers</p>
            </div>
          </buttons>
          <buttons
            onClick={() => {
              setData({ ...data, company_type: "company" });
              setSteps(1);
            }}
            className="w-full flex gap-[18px] px-5 rounded-[6px] py-[24px] pb-[20px] element  border-border border-2 border-dotted "
          >
            <Researcher />
            <div>
              <p>Company</p>
              <p>For researchers and policy maker </p>
            </div>
          </buttons>
        </div>
      </div>
    </>
  );
};

export default Kind;

