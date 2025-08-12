import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import navlogo from '../assets/sl-logo.png';
import { useAuth } from '../AuthContext'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={navlogo} alt="Logo" />
      </div>

      <div className={`navbar-list ${mobileMenuOpen ? "open" : ""}`} onClick={() => setMobileMenuOpen(false)}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/package">Packages</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className="navbar-sign-in">
        <button className="signin-btn" onClick={handleAuthClick}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div style={{ transform: mobileMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
        <div style={{ opacity: mobileMenuOpen ? 0 : 1 }} />
        <div style={{ transform: mobileMenuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none" }} />
      </div>
    </nav>
  );
};

export default Navbar;
