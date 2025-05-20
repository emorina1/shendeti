import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import './layout.css';

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="topbar">
      <div className="topbar-brand">
        <NavLink to="/dashboard" className="topbar-brand">
          🩺 Healthy <span>Medical</span>
        </NavLink>
      </div>

      <div className="topbar-actions">
        <button onClick={logout} className="topbar-logout-btn">
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Nav;
