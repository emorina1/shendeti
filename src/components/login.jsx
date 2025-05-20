import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import "./Login.css";
import googleButton from "./../imgs/google_signin_buttons/web/1x/btn_google_signin_dark_pressed_web.png";

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

  // ✅ Merr 'code' nga URL dhe bëj kërkesë te backend vetëm nëse ekziston
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      fetch(`http://localhost:3000/oauth?code=${code}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Gabim gjatë autentikimit me Google");
          }
          return res.json();
        })
        .then((data) => {
          console.log("Përdoruesi nga Google:", data);
          navigate("/dashboard");
        })
        .catch((err) => {
          console.error("Gabim me Google Auth:", err.message);
        });
    }
  }, []);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  const authGoogle = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/request", {
        method: "POST",
      });
      const data = await response.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Gabim me Google Auth:", error);
    }
  };

  return (
<div className="login-container">
  <video autoPlay muted loop className="bg-video">
    <source src="/Video1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>








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

          <button type="button" className="btn-auth" onClick={authGoogle}>
            <img
              className="btn-auth-img"
              src={googleButton}
              alt="Google Sign In"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
