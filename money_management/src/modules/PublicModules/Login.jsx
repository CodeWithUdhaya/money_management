import {React,useState} from "react";
import "./Login.scss";
import { loginApi } from '../../ApiUtils/Api';

 

const Login = () => {

   const [username,setUsername]= useState("");
   const [password,setPassword]= useState("");
   const [loading,isLoading]= useState(false);

   const handleLogin = async (e) =>{
         e.preventDefault();
        isLoading(true);
          const data = await loginApi({
                "username": username,
                "password": password
               })
            console.log("dashboard "+data); 
            isLoading(false) ;
  }

   const handleUsername = (e) => {
  setUsername(e.target.value);
};
   const handlePassword =(e) =>{
    setPassword(e.target.value);
   }

  return (
    <div className="login-page">
      {isLoading && <p>Loading.........</p>}
      <div className="login-container">
        <h1>Money Management</h1>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Username/email" onChange={handleUsername} required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" onChange={handlePassword}required />
          </div>
          <button type="submit" className="login-btn" onClick={handleLogin}>Login</button>
          <a href="#" className="register-link">Register</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
