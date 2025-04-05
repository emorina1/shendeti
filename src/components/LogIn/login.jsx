import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./auth.css";


const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data.message === "Success") {
          navigate("/dashboard");
        } else {
          setError("Invalid credentials");
        }
      })
      .catch(() => setError("Something went wrong"));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign In</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input type="email" name="email" onChange={handleInput} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" name="password" onChange={handleInput} className="form-control" />
          </div>
          <button type="submit" className="btn btn-success w-100">Log in</button>
          <Link to="/signup" className="btn btn-light w-100 mt-2">Create Account</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
