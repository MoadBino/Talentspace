import React from "react";

const Input = ({
  onChange,
  className,
  name,
  type,
  placeholder,
  id,
  value,
  required = false,
}) => {
  return (
    <input
      value={value}
      required={required}
      id={id}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      className={`w-full py-3 px-4 text-[12px] text-[#A1A5B7] rounded h-[44px] bg-main border border-gray-600 placeholder-[#A1A5B7]  ${className}`}
    />
  );
};

const DropDown = ({ children, className, onChange }) => {
  return (
    <select
      onChange={onChange}
      className={` ${className}  rounded-[6px] pl-[8px] text-[12px] bg-main border-2 border-gray-600 focus:border-gray-600`}
    >
      {children}
    </select>
  );
};
export { Input, DropDown };
