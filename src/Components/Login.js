import React, { useState } from "react";
import '../CSS/Login.css';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const [isLoader,setLoader] = useState(false);
  const [errorMsg ,setErrorMsg] = useState();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    axios.post('http://localhost:8080/public/login',{
      'username':form.email,
      'password':form.password,
    }).then(data => {
      console.log("response",data)
    })
    .catch(e => {
      console.log("error :",e);
      setErrorMsg(
        e.response.data?.data?.message || "Something went wrong. Please try again." 
      )
    })
    .finally( e => {
      setLoader(false);
  });
    console.log("Login details:", form);
    // Add your login API call here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Money Management</h2>
        <form onSubmit={handleSubmit} className="login-form">
          {isLoader && (<div>Loading.....</div>)}
           {errorMsg && (<div style={{color : "red"}}>{errorMsg}</div>)}
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your Username"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p className="signup-text">
          Don’t have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
