import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../src/features/authSlice";
import './layout.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <aside
      className="sidebar"
    >
      <p className="section-title">General</p>
      <ul className="menu-list">
        <li>
          <NavLink to="/dashboard" className="menu-link">
            <IoHome className="icon" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="menu-link">
            <IoPricetag className="icon" /> Products
          </NavLink>
        </li>
      </ul>

      {user && user.role === "admin" && (
        <>
          <p className="section-title">Admin</p>
          <ul className="menu-list">
            <li>
              <NavLink to="/users" className="menu-link">
                <IoPerson className="icon" /> Users
              </NavLink>
            </li>
          </ul>
        </>
      )}

      <p className="section-title">Settings</p>
      <ul className="menu-list">
        <li>
          <button onClick={logout} className="logout-button">
            <IoLogOut className="icon" /> Logout
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
