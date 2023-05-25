// Login.js

import React, { useState , useContext } from 'react';
import './login.css';
import { Link , useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/authContext";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleLogin = async (event)=>{
    event.preventDefault();
    // window.location.reload(false);
    await login(email,password);
    if(currentUser.user.admin===true){
     await navigate("/homeadmin")
    }
    else if (currentUser.user.isProf===true){
      await navigate("/homeprof")
    }
    else{
     await  navigate("/home")
    }
    

   }
 

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form >
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleLogin}>Log In</button>
      </form>
      <br />
      <Link to="/register">Create Account </Link>
    </div>
  );
};

export default Login;