import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login data:", values);  // Log për të parë të dhënat që po dërgoni
    try {
      const res = await axios.post("http://localhost:8081/login", values, {
        withCredentials: true,
      });
      alert("Login successful");
      console.log("User:", res.data.user);
    } catch (err) {
      console.error("Login failed:", err.response?.data?.error || err.message);
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" onChange={handleChange} type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
