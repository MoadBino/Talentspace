import React, { useState } from "react";

const PriorityDropDown = ({ className, children }) => {
  const [color, setColor] = useState("#0FEA9A");
  return (
    <>
      <select
        style={{ color: color }}
        onChange={(e) => {
          const value = e.target.value;

          setColor(value);
        }}
        className={` ${className} drop  rounded-[6px] pl-[8px] text-[12px] bg-main border-2 border-gray-600 focus:border-gray-600`}
      >
        <option value={"#0FEA9A"} className="text-[#0FEA9A]">
          High
        </option>
        <option value={"#00c6ff"} className="text-[#00c6ff]">
          Med
        </option>
        <option value={"#e8b403"} className="text-[#e8b403]">
          Low
        </option>
      </select>
    </>
  );
};

export default PriorityDropDown;
