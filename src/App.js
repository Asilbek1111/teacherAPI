import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import OneTeacher from "./Pages/OneTeacher";


function App() {
  const [teacher, setTeacher] = useState("")
  return (
    <Routes>
      <Route path="/" element={<Home teacher={teacher} setT={setTeacher} />} />
      <Route
        path="/teacher"
        element={<OneTeacher teacher={teacher} setT={setTeacher} />}
      />
    </Routes>
  );
}

export default App;
