import React from "react";
import "./Network.css";

const Network = () => {
  return (
    <div className="container">
      <div>
        <h2>Access to an elite network</h2>
        <ul>
          <li>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                <path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <p className="text">
              Mentorcam’s network of elite founders and business professionals
              are available to you on-demand.
            </p>
          </li>
          <li>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path d="M12 12l8 6H4l8-6zm0-8l8 6H4l8-6z" />
              </svg>
            </div>
            <p className="text">
              Whether you work with a specific expert or seek input from
              multiple advisors, your network just got instantly stronger.
            </p>
          </li>
          <li>
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="16"
                height="16"
              >
                <path d="M20.292 5.292l-8 8-8-8-1.414 1.414 9.414 9.414 9.414-9.414z" />
              </svg>
            </div>
            <p className="text">
              All Mentorcam experts are carefully vetted and have proven track
              records as highly successful builders and operators.
            </p>
          </li>
        </ul>
      </div>

      {/* Network visualization */}
      <div className="network">
        <div className="circle large"></div>
        <div className="circle medium"></div>
        <div className="circle small"></div>
        <div className="profile one">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s" alt="Profile 1" />
        </div>
        <div className="profile two">
          <img src="https://img.freepik.com/free-photo/happy-man-student-with-afro-hairdo-shows-white-teeth-being-good-mood-after-classes_273609-16608.jpg" alt="Profile 2" />
        </div>
        <div className="profile three">
          <img src="https://www.shutterstock.com/image-photo/saudi-arabia-man-care-human-260nw-2499416977.jpg" alt="Profile 3" />
        </div>
        <div className="profile four">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQBFy0j_72yEKBKNRbPbCzxfNxq1H9Y57ygg&s" alt="Profile 4" />
        </div>
        <div className="profile five">
          <img src="https://media.istockphoto.com/id/1311957094/photo/handsome-smiling-young-man-with-crossed-arms-portrait.jpg?s=612x612&w=0&k=20&c=zALF0xV8gL-W9IooXcbEE95aejQhYYkBslwjPMqlUxA=" alt="Profile 5" />
        </div>
        <div className="profile six">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_mEiVxVZ8FBOLwVW58yK-IFPDKTaBsqu_g4g9pmeskpi6Dn-ZUZLRnJfaHdNK2_dwmU&usqp=CAU" alt="Profile 6" />
        </div>
      </div>
    </div>
  );
};

export default Network;