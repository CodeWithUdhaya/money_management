import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Money Management</h1>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Username/email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <a href="#" className="register-link">Register</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
