import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AddCandednt from "./AddCandednt";
import TalentPool from "./CandidateRow ";
function App() {
  const [talentPool, setTalentPool] = useState(true);
  const [Add, setAdd] = useState(false);
  return (
    <>
      <TalentPool setAdd={setAdd} />
    </>
  );
}

export default App;
