import React, { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import "./Navbar.css";
import logo from '../../assets/Logo.png'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <span className="logo-text">LOGO</span>

        <div className="navbar-icons">
          <FiSearch className="icon" />
          <FiHeart className="icon" />
          <FiShoppingBag className="icon" />
          <FiUser className="icon" />
          <select className="language-select">
            <option value="en">ENG</option>
            <option value="es">ESP</option>
            <option value="fr">FRA</option>
          </select>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <a href="#shop" onClick={toggleMenu}>
          SHOP
        </a>
        <a href="#skills" onClick={toggleMenu}>
          SKILLS
        </a>
        <a href="#stories" onClick={toggleMenu}>
          STORIES
        </a>
        <a href="#about" onClick={toggleMenu}>
          ABOUT
        </a>
        <a href="#contact" onClick={toggleMenu}>
          CONTACT US
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
