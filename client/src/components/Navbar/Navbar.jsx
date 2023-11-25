// Navbar.js
import  { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`navbar-middle ${isMenuOpen ? 'menu-open' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Activities</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={`navbar-right ${isMenuOpen ? 'menu-open' : ''}`}>
        <button>Login</button>
        <button>Signup</button>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
