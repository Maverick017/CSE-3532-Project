import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="header-content">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img
            src="src\assets\Screenshot 2025-01-18 071557.png" 
            alt="Mentorcam Logo"
          />
          Mentorcam
        </Link>
      </div>

      <nav className="nav-links">
        <a href="#1">Browse</a>
        <a href="">For mentors</a>
        <a href="#">More</a>
      </nav>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="What advice are you looking for today?"
        />
        <button className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path
              d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C15.37 5.6 13.28 3.5 10.75 3.5S6.13 5.6 6.13 8.13c0 2.54 2.1 4.63 4.63 4.63 1.63 0 3.08-.82 3.94-2.04l.27.28v.79l4.25 4.25 1.49-1.49-4.25-4.25zm-4.75 0c-1.7 0-3.13-1.43-3.13-3.13 0-1.7 1.43-3.13 3.13-3.13 1.7 0 3.13 1.43 3.13 3.13 0 1.7-1.43 3.13-3.13 3.13z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <div className="auth-buttons">
        <Link to="/login" className="login-btn">
          Log in
        </Link>
        <Link to="/signup" className="signup-btn">
          Sign up
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
