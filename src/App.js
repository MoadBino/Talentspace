import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AllJobs from "./components/AllJobs";
import AddJob from "./components/AddJob";
import CandidateRow from "./components/Candidate/index";
import JobInfoPage from "./components/AddJob/JobInfo"
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllJobs />} />
        <Route path="/Candidate" element={<CandidateRow />} />
      </Routes>
    </div>
  );
}

export default App;
