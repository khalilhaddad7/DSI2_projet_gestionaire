// Register.js

import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import { Link , useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        name,
        email,
        password
      };

      const response = await axios.post('http://localhost:8800/api/users/register', newUser);
      // console.log(response.data); 
      navigate("/")
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button type="submit">Register</button>
      </form>
      <Link to="/">If You Have An Account!</Link>
    </div>
  );
};

export default Register;