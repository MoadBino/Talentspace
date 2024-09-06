import React, { useState } from "react";
import Resume from "../assets/Resume";
import LinkIcon from "../assets/Link";
import Download from "../assets/Download";
const IdealCandidate = ({ file, setFile, Link, setLink }) => {
  const [selected, setSelected] = useState("File");
  const handleFileUpload = (event) => {
    setFile(event.target.files);
  };

  return (
    <div className="rounded-lg text-white px-5 pt-3">
      <h3 className="text-[14px] font-semibold mb-2">Get candidates by</h3>
      <p className=" text-[13px] text-[#9A9CAE] mb-4">
        You can use both options at the same time to get better results
      </p>

      <div className="flex justify-between">
        <button
          onClick={() => {
            setSelected("File");
          }}
          className={`flex flex-col items-center ${
            selected == "File" ? "border-b-2 border-b-[#A662FF]" : ""
          } text-center p-4  w-full hover:text-white`}
        >
          <Resume />
          <span>Resume</span>
        </button>
        <button
          onClick={() => {
            setSelected("Link");
          }}
          className={`flex flex-col items-center ${
            selected == "Link" ? "border-b-2 border-b-[#A662FF]" : ""
          } text-center p-4  w-full hover:text-white`}
        >
          <LinkIcon />
          <span>Link</span>
        </button>
      </div>

      {selected == "File" ? (
        <>
          <p className="my-[12px] font-[500]">
            Resumes files (min. 3) <span className="text-red-500">*</span>
          </p>

          <div className="border-2 flex flex-col mt-[19px] justify-center items-center border-dashed border-[#636674] min-h-[182px] rounded-lg p-6 text-center relative mb-2 text-[#9A9CAE]">
            <input
              min={3}
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => {
                handleFileUpload(e);
              }}
              multiple={true}
            />
            {file ? (
              <div className="grid grid-cols-3 gap-5 items-start w-full">
                {[...file].map((element) => {
                  return (
                    <div className="relative">
                      <div className="border-border border-2 py-5 rounded-lg">
                        <p>{element.name}</p>
                      </div>
                      <button
                        onClick={() => {
                          const newFiles = [...file].filter(
                            (filterElement) =>
                              filterElement.name !== element.name
                          );

                          setFile(newFiles);
                        }}
                        className="absolute top-0 right-2"
                      >
                        X
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <>
                <Download />
                <p>Drop at least 3 resumes here or Select files</p>
                <span className="text-xs ">
                  Supported formats: pdf, txt, .doc, .docx
                </span>
              </>
            )}
          </div>
          <p className="pb-5">Supported formats: .pdf, .txt , .doc, .docx</p>
        </>
      ) : (
        <div>
          <p>profile URL</p>
          <input
            onChange={(e) => {
              const value = e.target.value;
              setLink([value]);
            }}
            className="w-full bg-main  border-[1px] border-[#3F425480 mt-2"
          />
        </div>
      )}
    </div>
  );
};

export default IdealCandidate;
