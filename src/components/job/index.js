import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import CandidateList from "./CandidateList";
import { getApi } from "../../Axios";
import JobDescrption from "../jobDescrption";
const Job = () => {
  const { id } = useParams();
  const [jobId, setJobId] = useState(id);
  const [candidates, setCandidates] = useState([]);
  const [showJobDescrption, setShowJobDescrption] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobTitle, setJobTitle] = useState("");

  const getCandidates = async () => {
    try {
      const data = await getApi(`job/candidates?id=${jobId}&count=10&start=0`);
      const jobs = await getApi("jobs?count=10&start=0");
      const jobTitle = await getApi(`job/description?id=${jobId}`);

      setJobTitle(jobTitle.job_post);
      setJobs(jobs);
      setCandidates(data);
    } catch (err) {}
  };
  useEffect(() => {
    getCandidates();
  }, [jobId]);

  return (
    <div className="flex gap-[8px]">
      <Sidebar jobs={jobs} setJobId={setJobId} />
      <div className="flex flex-col  w-full gap-[9px]">
        {showJobDescrption ? (
          <div className="">
            <JobDescrption
              description={jobTitle}
              setShowJobDescrption={setShowJobDescrption}
            />
          </div>
        ) : (
          <>
            <Header
              id={id}
              jobTitle={jobTitle}
              setShowJobDescrption={setShowJobDescrption}
            />
            <CandidateList candidates={candidates} />
          </>
        )}
      </div>
    </div>
  );
};

export default Job;
