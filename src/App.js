import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import { AuthContext } from "./Contexts/Auth";
import Home from "./Pages/Home";
import OneTeacher from "./Pages/OneTeacher";
import Login from "./Pages/Login/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [teacher, setTeacher] = useState("");
  // // const { token } = useContext(AuthContext);
  // // console.log(token);
  // console.log(localStorage.getItem("token"));

  if (
    localStorage.getItem("token") 
  ) {
    return (
      <Routes>
        <Route
          path="/" exact
          element={<Home teacher={teacher} setT={setTeacher} />}
        />
        <Route
          path="/teacher"
          element={<OneTeacher teacher={teacher} setT={setTeacher} />}
        />
      </Routes>
    );
  } else {
    return <Login />;
  }
}
export default App;
