
import './Navbar.css'; // You can create a separate CSS file for styling
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-middle">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Activities</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="navbar-right">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  );
};

export default Navbar;
