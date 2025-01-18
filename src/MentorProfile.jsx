import React from 'react';
import './MentorProfile.css';

const MentorProfile = () => {
  return (
    <header className="mentor-profile">
      <div className="banner">
        <img
          src="https://th.bing.com/th?id=OIP._t5PwJneEsl0m0qJW7PoUgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=20"
          alt="Profile Banner"
          className="banner-image"
        />
      </div>

      <div className="profile-container">
        <div className="profile-details">
          <div className="profile-picture">
            <img
              src="https://media.licdn.com/dms/image/v2/C4E03AQErniQc0GwmgQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517563425517?e=2147483647&v=beta&t=V_0-C4jHifia15LYqyrxD0mO_24PIlIWS4BcoFZAF0s"
              alt="Profile Picture"
              className="picture"
            />
          </div>
          <h2 className="name">Abir Khan</h2>
          <p className="role">
            <span className="bold">Head of Operations</span> at{' '}
            <span className="bold">Liberate Labs</span>
          </p>
          <p className="location">Bangladesh</p>
          <div className="activity">
            <span>Active 7 days ago</span>
            <span> · </span>
            <span>Usually responds in an hour</span>
          </div>
          <div className="actions">
            <button className="message-button">Message</button>
            <button className="favorite-button">Favorite</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MentorProfile;
