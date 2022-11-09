import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Signup.css'
const Signup = (props) => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.length > 8) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users",
        { email, password },
        config
      );
      console.log(data);
      if (data.email) {
        props.changeflag(true);
        nav("/");
      }
    } else {
      alert("Passwords should be same and length should be greater than 8");
    }
  };
  if (props.flag === true) {
    return <h1>You are already logged in</h1>;
  }
  return (
    <div className='signup'>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Signup</button>
      <div>or</div>
      <a href="login">
        {" "}
        <button>Login</button>
      </a>
    </div>
  );
};

export default Signup;
