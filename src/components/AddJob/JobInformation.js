import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const JobInformation = ({ setjobDraft, jobDraft }) => {
  const [w, setW] = useState("50%");
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"], // B, I, U
      [{ header: "1" }, { header: "2" }, "blockquote"], // H1, H2, Blockquote
      [{ list: "ordered" }, { list: "bullet" }], // Ordered, Bullet list
      [{ align: [] }], // Text alignment
      ["link", "image"], // Link, Image
      ["emoji"], // Emoji (need a plugin for this)
      ["clean"], // Remove formatting
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "blockquote",
    "link",
    "image",
    "align",
  ];

  return (
    <div className="px-[29px]">
      <div className="mb-6  ">
        <label className="block FLT mb-2" htmlFor="job-title">
          Job title <span className="text-red-500">*</span>
        </label>
        <input
          onChange={(e) => {
            setjobDraft({ ...jobDraft, title: e.target.value });
          }}
          name="job-title"
          type="text"
          placeholder="etc. Web developer"
          className="w-full p-2 rounded bg-main border border-gray-600 placeholder-[#A1A5B7] text-white"
        />
      </div>
      <div className="mb-6">
        <label className="block FLT mb-2" htmlFor="job-post">
          Job post <span className="text-red-500">*</span>
        </label>
        <div className="  rounded-lg">
          <ReactQuill
            value={jobDraft.description}
            onChange={(e) => {
              setjobDraft({ ...jobDraft, description: e });
            }}
            modules={modules}
            formats={formats}
            placeholder="Type here"
            className="bg-[#7E8299] rounded text-white h-full "
            theme="snow"
          />
        </div>
      </div>
    </div>
  );
};

export default JobInformation;
