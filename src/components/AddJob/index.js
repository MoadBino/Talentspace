import React, { useState } from "react";
import Title from "./JobInformation";
import IdealCandidate from "./IdealCandidate";
import LeftArrow from "../assets/LeftArrow";
import RightArrow from "../assets/RightArrow";
import Candidate from "./Candidate";
import BlueThunder from "../assets/BlueThunder";
import HiringAndPublishing from "./HiringAndPublishing";
import { getApi, postApi } from "../../Axios";
const AddJob = ({ setIsAdd }) => {
  const [w, setW] = useState(25);
  const [steps, setSteps] = useState(0);
  const [jobDraft, setjobDraft] = useState({
    title: "",
    source: "client",
    description: "",
  });
  const userData = localStorage.getItem("userData");
  const obj = JSON.parse(userData);
  const id = obj.company;

  const [file, setFile] = useState("");
  const [Link, setLink] = useState("");
  const [job, setJob] = useState({ company: id , });

  const AddJobApi = async () => {
    try {
      const resulit = await postApi("job", job);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = async () => {
    let idunique;
    const draftData = { ...jobDraft };
    if (file) {
      const formData = new FormData();
      for (const key in file) {
        formData.append("files", file[key]);
      }

      try {
        const resumes = await postApi("upload", formData, true);
        draftData.resumes=resumes

        

        function areAllElementsUnique(arr) {
          const seenElements = new Set();

          for (const element of arr) {
            if (seenElements.has(element)) {
              return false;
            }
            seenElements.add(element);
          }

          return true;
        }
        idunique = areAllElementsUnique(resumes);
      } catch (err) {
        alert(err);
      }
    }

    if (Link) {
      try {
        const profiles = await postApi("add", Link, false);
        draftData.profiles=profiles

      } catch (err) {
        alert(err);
      }
    }

    if (idunique) {
      try {
        const postJobDraft = await postApi("job_draft", draftData, false);

        const getJobDraft = await getApi(`job_draft?id=${postJobDraft}`);
        setJob(getJobDraft);
      } catch (err) {
        alert("add at lees 3 cv and try agian");
        console.log(err);
      }
    } else {
      alert("add 3 defuilt cvs");
      return false;
    }
  };

  return (
    <div className="flex justify-center min-h-[702px] ">
      <div className="bg-main flex flex-col justify-between rounded-lg w-[800px]  ">
        <div>
          <div className="px-[29px] pt-[34px]">
            <div className="flex justify-between  LIT">
              <p>Job information</p>
              <button>X</button>
            </div>
            <div className="bg-gray-800 h-1 w-full mb-5 mt-4">
              <div
                className="bg-purple-500 h-full"
                style={{ width: w + "%" }}
              ></div>
            </div>
          </div>
          <hr />
        </div>
        <div className=" h-full mt-[20px] ">
          {steps == 0 && (
            <Title setjobDraft={setjobDraft} jobDraft={jobDraft} />
          )}
          {steps == 1 && (
            <IdealCandidate
              file={file}
              setFile={setFile}
              Link={Link}
              setLink={setLink}
            />
          )}

          {steps == 2 && (
            <Candidate
              job={job}
              setJob={setJob}
              setW={setW}
              steps={steps}
              setSteps={setSteps}
            />
          )}
          {steps == 3 && <HiringAndPublishing />}
        </div>
        <div>
          {steps == 2 ? (
            ""
          ) : (
            <>
              <hr className="mb-[9.75px]" />

              <div className="flex justify-end gap-[6px] mr-[29.5px] mb-[25.5px]">
                <button
                  type="button"
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
                  type={steps == 1 ? "submit" : "button"}
                  onClick={async (event) => {
                    event.preventDefault();
                    if (steps == 0 && !jobDraft.title) {
                      alert("add title first");
                    } else if (steps == 1 && (file || Link)) {
                      await onSubmit();
                      setSteps(steps + 1);
                      setW(w + 25);
                    } else if (steps == 1 && (!file || !Link)) {
                      alert("add link or reusme");
                    } else {
                      setSteps(steps + 1);
                      setW(w + 25);
                    }
                    if (steps == 2) {
                      await AddJobApi();
                    }
                    if (steps == 3) {
                      setIsAdd(false);
                      setW(25);
                    }
                  }}
                  className="p-4 bg-[#560DF5] py-[12px] px-[18px] rounded-[6px] "
                >
                  {steps == 0 ? (
                    <span className="flex">
                      Next <RightArrow />
                    </span>
                  ) : steps == 1 ? (
                    <span className="flex">
                      Generate Ideal candidate <RightArrow />
                    </span>
                  ) : (
                    <span className="flex items-center gap-[6px] ">
                      Start hunting <BlueThunder /> 100
                    </span>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddJob;

// `66d862a0aca07d53ff267301`;
