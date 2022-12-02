import React, { useRef, useState, navigate, useContext } from "react";
import { AuthContext } from "../../Contexts/Auth";
import "./Login.css";
import { Link, Route, Routes } from "react-router-dom";
// import AdminP from "../AdminP/AdminP";

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const subdomainRef = useRef(null);

  const { token, setToken } = useContext(AuthContext);

  function handleLogin(e) {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Cookie", "PHPSESSID=niban9hcs27g0ps1651ljd88ah");

    var urlencoded = new URLSearchParams();
    urlencoded.append("_username", usernameRef.current.value);
    urlencoded.append("_password", passwordRef.current.value);
    urlencoded.append("_subdomain", subdomainRef.current.value);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://toko.ox-sys.com/security/auth_check", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.code != 401) {
          localStorage.setItem("token", result.token);
        }
      })
      .catch((error) => console.log("error", error));
  }
  function htime(){
    setTimeout(() => {
      window.location.reload()
    }, 3000);
  }
  
  
  return (
    <div className="login">
      <div className="container">
        <form onSubmit={handleLogin}>
          <h1>Kirish</h1>
          <input
            ref={usernameRef}
            id="usename"
            type="text"
            placeholder="Username"
          />
          <input
            ref={passwordRef}
            id="password"
            type="password"
            placeholder="Password"
          />
          <input
            ref={subdomainRef}
            id="subdomain"
            type="text"
            placeholder="Subdomain"
          />

          <button type="submit" onClick={htime}>
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
