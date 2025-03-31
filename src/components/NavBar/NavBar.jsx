import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate(); // Përdor për të naviguar në faqen e login

  return (
    <nav className="navbar">
      <div className="desktopMenu">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">
          Home
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">
          About
        </Link>
        <Link activeClass="active" to="healthy" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">
          Healthy
        </Link>
        <Link activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">
          Services
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">
          Contact
        </Link>
      </div>

      {/* Kur klikon "Log in", shkon në faqen e login */}
      <button className="desktopMenuBtn" onClick={() => navigate("/login")}>
        Log in
      </button>

      <button className="mobMenu" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </button>

      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          Home
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          About
        </Link>
        <Link activeClass="active" to="healthy" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          Healthy
        </Link>
        <Link activeClass="active" to="services" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          Services
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
