import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../imgs/logo.jpg'; // Adjust the path based on your folder structure

import './Login.css';

function Login() {
  const [isSignup, setIsSignup] = useState(false); // Kontrollo nëse është në signup
  const [values, setValues] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (isSignup && values.password !== values.confirmPassword) {
      console.log('Passwords do not match');
      return;
    }

    axios.defaults.withCredentials = true;
    const endpoint = isSignup ? 'http://localhost:8080/signup' : 'http://localhost:8080/loginform';
    axios.post(endpoint, values)
      .then(res => {
        if (res.data.success) {
          navigate('/dashboard');
        } else {
          console.log(res.data.message);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="welcome-text">
          <h1>{isSignup ? 'Join LifeLine Hospital' : 'Welcome Back'}</h1>
          <p>{isSignup ? 'Create an account to get started' : 'Please log in to continue'}</p>
          <button className="signup-btn" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Back to Login' : 'Need an account? Sign Up'}
          </button>
        </div>
      </div>
      <div className="login-right">
        <div className="login-box">
        <img src={logo} alt="Hospital Logo" className="hospital-logo" />

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name='username'
                placeholder="Enter Username"
                onChange={handleInput}
                value={values.username}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name='password'
                placeholder="Enter Password"
                onChange={handleInput}
                value={values.password}
              />
            </div>
            {isSignup && (
              <div className="form-group">
                <input
                  type="password"
                  name='confirmPassword'
                  placeholder="Confirm Password"
                  onChange={handleInput}
                  value={values.confirmPassword}
                />
              </div>
            )}
            <div className="form-actions">
              {!isSignup && <Link to="/reset-password" className="reset-password-btn">Reset Password</Link>}
              <button type="submit" className="login-btn">{isSignup ? 'Sign Up' : 'Login'}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
