import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <Link to="/" className="logo">
      Mentorcam
    </Link>
    <nav>
      <a href="#">Browse</a>
      <a href="#">For mentors</a>
      <a href="#">More</a>
    </nav>
    <div className="auth-buttons">
      <Link to="/login" className="login-btn">
        Log in
      </Link>
      <Link to="/signup" className="signup-btn">
        Sign up
      </Link>
    </div>
  </header>
);

export default Header;
