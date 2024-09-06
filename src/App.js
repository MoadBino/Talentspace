import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, json } from "react-router-dom";
import AllJobs from "./components/AllJobs";
import Pools from "./components/pools";
import Pool from "./components/pool";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Register from "./components/register";
import Job from "./components/job";
import Login from "./components/login";
import JobDescrption from "./components/jobDescrption";
import { getApi, postApi } from "./Axios";
function App() {
  let location = useLocation();
  const navigate = useNavigate("");
  useEffect(() => {
    if (location.pathname !== "login") {
      postApi("verify_token")
        .then((result) => {
          if (result !== "OK") {
            navigate("/login");
          }
        })
        .catch((err) => {
          navigate("/login");
        });
    }
  }, []);

  return (
    <div>
      {location.pathname == "/login" || location.pathname == "/register" ? (
        ""
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<AllJobs />} />
        <Route path="/Pools" element={<Pools />} />
        <Route path="/Pool/:id" element={<Pool />} />
        <Route path="/Job/:id" element={<Job />} />
        <Route path="/view-descrption/:id" element={<JobDescrption />} />
      </Routes>
    </div>
  );
}

export default App;
