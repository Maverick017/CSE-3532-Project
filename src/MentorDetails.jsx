import React, { useState } from "react";
import "./MentorDetails.css";

const MentorDetails = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showBookingCard, setShowBookingCard] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleBookNow = () => {
    setShowBookingForm(!showBookingForm);
    setShowBookingCard(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim() && mobile.trim()) {
      setShowBookingForm(false);
      setShowBookingCard(true);
    } else {
      alert("Please fill out all fields.");
    }
  };

  const handleOkay = () => {
    setShowBookingCard(false);
    setName("");
    setEmail("");
    setMobile("");
  };

  return (
    <div className="mentor-details">
      <main className="main-content">
        <div className="tabs">
          <button className="active-tab">Overview</button>
          <button>Reviews</button>
        </div>

        <div className="overview">
          <h1>5+ Years of Experience in Software Engineering</h1>
        </div>

        <div className="grid">
          <div className="details-section">
            <div className="card">
              <h2>Background</h2>
              <div className="card-item">
                <p>Skills</p>
                <span className="badge">Full stack</span>
              </div>
              <div className="card-item">
                <p>Fluent In</p>
                <div className="badges">
                  <span className="badge">Bengali</span>
                  <span className="badge">English</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h2>Experiences</h2>
              <div className="experience-item">
                <div className="icon-circle">
                  <span>SE</span>
                </div>
                <div>
                  <h3>Software Engineer</h3>
                  <p>ShareTrip Ltd (20 Dec 2024 - 20 Dec 2024)</p>
                  <p>Played key role in developing ShareTrip B2B Portal</p>
                </div>
              </div>
              <div className="experience-item">
                <div className="icon-circle">
                  <span>SE</span>
                </div>
                <div>
                  <h3>Software Engineer</h3>
                  <p>Field Nation (20 Dec 2024 - 20 Dec 2024)</p>
                  <p>Platform Operations Team</p>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-section">
            <div className="card">
              <h2>Sessions</h2>
              <div className="session">
                <h3>Full Stack Developer Mock Interview</h3>
                <p>40 minutes</p>
                <p className="price">450.00</p>
              </div>
              <button className="book-now-btn" onClick={handleBookNow}>
                Book Now
              </button>
            

            {showBookingForm && (
              <form className="booking-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            )}

            {showBookingCard && (
              <div className="booking-card">
                <h3>Booking Successful!</h3>
                <button onClick={handleOkay}>Okay</button>
              </div>
            )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentorDetails;
