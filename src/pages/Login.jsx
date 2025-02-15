import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";


import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
   
    email: "",
    password: "",
  });
  const login = async(e) => {
   try {
    e.preventDefault();
    await axios.post("http://localhost:8800/register", user);
    console.log(res);
    if(res.data.Status === "Success"){
        navigate("/login")
    }
    else{
        alert("error")
    }
   } catch (error) {
    console.log(err);
   }
  };
  return (
    <div className="container-fluid">
      <img
        src="https://us.123rf.com/450wm/sklyareek/sklyareek1908/sklyareek190800002/129697503-black-headphones-on-black-wooden-dark-background.jpg?ver=6"
        alt="img"
        style={{ width: "100%" }}
      />
      <div className="d-flex align-items-center justify-content-center centered">
        <div className="d-flex flex-column gap-4 w-96 p-5  shadow mt-5 rounded ">
          <h1 className="fs-3 fst-italic fw-bold text-orange">
            Welcome Back To Book Shop
          </h1>

          <input
            type="text"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="p-2 rounded"
          />
          <button
            className="border rounded bg-orange p-2 fw-bold text-white"
            onClick={login}
          >
            Login
          </button>
          <Link to="/register" className="text-secondary underline">
            Not yet Registered ? Click Here To Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;