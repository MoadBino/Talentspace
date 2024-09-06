import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";
import PoolInfo from "./PoolInfo";
import { getApi } from "../../Axios";
import PoolFile from "./PoolFile";
import JobDescrption from "../jobDescrption";
import PoolJobs from "./PoolJobs";

const Job = () => {
  const [page, setPage] = useState("");
  const { id } = useParams();
  const [poold, setPoold] = useState(id);
  const [showJobDescrption, setShowJobDescrption] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [allProfile, setAllProfile] = useState("");
  const [profile, setProfile] = useState("");

  const getProfile = async () => {
    try {
      const data = await getApi(`profile?id=${poold}`);
      setProfile(data);
    } catch (err) {}
  };

  const allProfileApi = async () => {
    try {
      const data = await getApi(`pool?count=10&start=0`);
      console.log(data);

      setAllProfile(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, [poold]);

  useEffect(() => {
    allProfileApi();
  }, []);

  return (
    <div className="flex gap-[8px]">
      <Sidebar allProfile={allProfile} setPoold={setPoold} />
      <div className="flex flex-col w-full gap-[9px] h-[100vh]">
        <div className="h-full flex flex-col gap-2">
          <Header
            profile={profile}
            id={id}
            jobTitle={jobTitle}
            setShowJobDescrption={setShowJobDescrption}
            setPage={setPage}
          />
          {page == "file" ? (
            <PoolFile />
          ) : page == "jobs" ? (
            <PoolJobs />
          ) : (
            <PoolInfo profile={profile} setPage={setPage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Job;
