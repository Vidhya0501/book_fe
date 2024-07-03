import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";


import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const register = async(e) => {
   try {
    e.preventDefault();
    const res = await axios.post("http://localhost:8800/register", user);
    console.log(res);
    if(res.data.Status === "Success"){
        navigate("/login")
    }
    else{
        alert("error")
    }
   } catch (err) {
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
        <div className="d-flex flex-column gap-4 w-96 p-5">
          <h1 className="fs-3 fst-italic fw-bold text-orange">
            Welcome To Book Shop
          </h1>
          <input
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="p-2 rounded"
          />
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
            onClick={register}
          >
            Register
          </button>
          <Link to="/login" className="text-secondary underline">
            Already Registered ? Click Here To Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;