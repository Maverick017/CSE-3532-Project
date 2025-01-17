import React from "react";
import "./HeroSection.css";

const HeroSection = ()=> (
    <section className="hero">
      <div className="hero-content">
        <h1>Get advice from the world’s BEST mentors</h1>
        <p>
          Book 1:1 calls with founders and leaders of the world’s best startups
          and brands.
        </p>
        <button className="card-btn">Find a mentor</button>
      </div>
      <div className="hero-profile">
        <div className="profile-card">
          <img
            src="https://miro.medium.com/v2/resize:fit:2400/1*D9vP_lzXZkNdbHbuDK2eyw.jpeg"
            className="profile-img"
          />
          <h3>Abir Bin Aiyub Khan</h3>
          <p>Mentor</p>
        </div>
      </div>
    </section>
  );

export default HeroSection;
