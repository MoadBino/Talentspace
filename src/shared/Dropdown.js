import React, { useState } from "react";

const TagInputDropdown = ({
  label,
  options,
  tags,
  setTags,
  name,
  companyInfo,
  setCompanyInfo,
  placeholder,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
      setCompanyInfo({ ...companyInfo, [name]: [...tags, tag] });
    }
    setShowDropdown(false);
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
    setCompanyInfo({
      ...companyInfo,
      [name]: tags.filter((_, index) => index !== indexToRemove),
    });
  };

  return (
    <div
      onClick={() => setShowDropdown(!showDropdown)}
      className="flex flex-col mb-4"
    >
      <label className="mb-2">
        {label} <span className="text-[red]">*</span>
      </label>
      <div className="relative">
        <div className="flex flex-wrap items-center gap-2 p-2 border border-border rounded-lg">
          {tags.length === 0 && (
            <span className="text-gray-400">{placeholder}</span>
          )}
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center bg-[#45435FBF] text-white px-3 py-1 rounded-md"
            >
              <span>{tag}</span>
              <button
                type="button"
                className="ml-2 text-red-500 hover:text-red-700"
                onClick={() => removeTag(index)}
              >
                &times;
              </button>
            </div>
          ))}
          <div className="ml-auto flex gap-4">
            <button
              onClick={() => {
                setTags([]);
              }}
              className=""
            >
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.15845 5.50064L10.7485 1.94064C10.9394 1.74703 11.0456 1.4855 11.0438 1.21357C11.0419 0.941643 10.9321 0.681598 10.7385 0.490642C10.5448 0.299686 10.2833 0.193462 10.0114 0.195337C9.73945 0.197212 9.47941 0.307034 9.28845 0.500642L5.74845 4.09064L2.20845 0.570642C2.02109 0.384391 1.76764 0.279849 1.50345 0.279849C1.23927 0.279849 0.985817 0.384391 0.798454 0.570642C0.704726 0.663605 0.630331 0.774206 0.579563 0.896065C0.528794 1.01792 0.502656 1.14863 0.502656 1.28064C0.502656 1.41265 0.528794 1.54336 0.579563 1.66522C0.630331 1.78708 0.704726 1.89768 0.798454 1.99064L4.33845 5.50064L0.748454 9.06064C0.557498 9.25425 0.451274 9.51579 0.453149 9.78771C0.455025 10.0596 0.564846 10.3197 0.758454 10.5106C0.952062 10.7016 1.2136 10.8078 1.48553 10.8059C1.75745 10.8041 2.0175 10.6943 2.20845 10.5006L5.74845 6.91064L9.28845 10.4306C9.47582 10.6169 9.72927 10.7214 9.99345 10.7214C10.2576 10.7214 10.5111 10.6169 10.6985 10.4306C10.7922 10.3377 10.8666 10.2271 10.9173 10.1052C10.9681 9.98336 10.9943 9.85265 10.9943 9.72064C10.9943 9.58863 10.9681 9.45792 10.9173 9.33607C10.8666 9.21421 10.7922 9.10361 10.6985 9.01064L7.15845 5.50064Z"
                  fill="#7E8299"
                />
              </svg>
            </button>
            <button className=" text-white  w-[50px] flex justify-center border-l-2 border-border items-center h-[25px]">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.74628 8.6994C7.61467 8.70017 7.48421 8.67494 7.36237 8.62517C7.24054 8.57541 7.12972 8.50209 7.03628 8.4094L1.03628 2.4094C0.943041 2.31617 0.86908 2.20548 0.81862 2.08365C0.768159 1.96183 0.742188 1.83126 0.742188 1.6994C0.742188 1.4331 0.847975 1.17771 1.03628 0.989404C1.22458 0.8011 1.47998 0.695313 1.74628 0.695312C2.01258 0.695313 2.26798 0.8011 2.45628 0.989404L7.74628 6.2794L13.0363 0.989404C13.1295 0.896165 13.2402 0.822204 13.362 0.771744C13.4839 0.721283 13.6144 0.695312 13.7463 0.695312C13.8781 0.695312 14.0087 0.721283 14.1305 0.771744C14.2523 0.822204 14.363 0.896165 14.4563 0.989404C14.5495 1.08264 14.6235 1.19333 14.6739 1.31516C14.7244 1.43698 14.7504 1.56754 14.7504 1.6994C14.7504 1.83126 14.7244 1.96183 14.6739 2.08365C14.6235 2.20548 14.5495 2.31617 14.4563 2.4094L8.45628 8.4094C8.36284 8.50209 8.25202 8.57541 8.13019 8.62517C8.00835 8.67494 7.87789 8.70017 7.74628 8.6994Z"
                  fill="#7E8299"
                />
              </svg>
            </button>
          </div>
        </div>

        {showDropdown && (
          <div className="absolute z-10 mt-2 bg-[#45435f] rounded-lg w-full">
            {options.map((option, index) => (
              <div
                key={index}
                className={`p-2 cursor-pointer text-white hover:bg-gray-700 ${
                  tags.includes(option) ? "text-white cursor-not-allowed" : ""
                }`}
                onClick={() => !tags.includes(option) && addTag(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const App = ({
  setIndustries,
  setLocations,
  industries = [],
  locations = [],
  companyInfo,
  setCompanyInfo,
}) => {
  const industryOptions = [
    "Defense and Space Manufacturing",
    "Computer Hardware Manufacturing",
    "Software Development",
    "Computer Networking Products",
    "Technology, Information and Internet",
    "Semiconductor Manufacturing",
    "Telecommunications",
  ];
  const locationOptions = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
  ];

  return (
    <div className="pt-2 text-white">
      <TagInputDropdown
        label="Industries"
        name={"industries"}
        companyInfo={companyInfo}
        setCompanyInfo={setCompanyInfo}
        options={industryOptions}
        tags={industries}
        setTags={setIndustries}
        placeholder="Select an industry"
      />
      <TagInputDropdown
        name={"countries"}
        companyInfo={companyInfo}
        setCompanyInfo={setCompanyInfo}
        label="Locations"
        options={locationOptions}
        tags={locations}
        setTags={setLocations}
        placeholder="Select a location"
      />
    </div>
  );
};

export default App;
