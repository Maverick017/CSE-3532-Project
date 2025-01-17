import React from "react";
import "./LoginPage.css";

const LoginPage = () => (
    <div className="login-container">
      <div className="login-card">
        <h1>Log into Mentorcam</h1>
        <p>
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
        <form>
          <input type="email" placeholder="Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button className="login-button">Log in</button>
        </form>
        <div className="divider">
          <span>Or continue with</span>
        </div>
        <div className="social-login">
          <button className="social-button apple">Apple</button>
          <button className="social-button google">Google</button>
          <button className="social-button facebook">Facebook</button>
        </div>
        <p>
          Having trouble logging in? <a href="/reset-password">Reset password</a>
        </p>
      </div>
    </div>
  );

export default LoginPage;
