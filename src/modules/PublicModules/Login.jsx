import {React,useState} from "react";
import "./Login.scss";
import { loginApi } from '../../ApiUtils/Api';
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";

const Login = () => {
  const navigate = useNavigate(); 
   const [username,setUsername]= useState("");
   const [password,setPassword]= useState("");
   const [loading,isLoading]= useState(false);
   const [notification, setNotification] = useState({ message: "", type: "" });

   const handleLogin = async (e) =>{
         e.preventDefault();
        isLoading(true);
          const response = await loginApi({
                "username": username,
                "password": password
               })
            isLoading(false) ;
            if(response.data.statusCode !== 200){
              setNotification({
                message: response.data.message,
                type: 'error'
              })
            }else{
              
               setNotification({
                message: response.data.data.Message,
                type: 'success'
              })
              setTimeout(() => {navigate("/dashboard")},2000) 
            }
            
  }

   const handleUsername = (e) => {
  setUsername(e.target.value);
};
   const handlePassword =(e) =>{
    setPassword(e.target.value);
   }

  return (
    <div className="login-page">
      <Alert
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification({ message: "", type: "" })}
        />
      {loading && <p>Loading.........</p>}
      <div className="login-container">
        <h1>Money Management</h1>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Username/email" onChange={handleUsername} required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" onChange={handlePassword}required />
          </div>
          <button type="submit" className="login-btn" onClick={handleLogin} >Login</button>
          <a href="#" className="register-link">Register</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
