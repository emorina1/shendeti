import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import "./Login.css"; // importojmë stilin custom

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <div className="login-container">
      {/* Left Image + Text */}
      <div className="login-left">
        <div className="overlay"></div>
        <div className="text-content">
       
        </div>
      </div>

      {/* Right Form */}
      <div className="login-right">
        <form onSubmit={Auth} className="login-form">
          {isError && <p className="error-message">{message}</p>}
          <h2>Welcome</h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
            />
          </div>
          <button type="submit" className="submit-btn">
            {isLoading ? "Loading..." : "Login"}
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
