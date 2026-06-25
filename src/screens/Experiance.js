import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Experience() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getExperience = async () => {
      try {
        const response = await fetch("./files/MyExperianceData.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        console.error("Error fetching experience data:", err);
      }
    };
    getExperience();
  }, []);

  if (!data) {
    return (
      <div className="experience container_middle">
        <div className="exp-content-wrapper">
          <p>Loading Experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="experience container_middle">
      <div className="exp-content-wrapper">
        <h1 className="exp_heading">Professional Experience</h1>
        
        <div className="experience-dual-layout">
          {/* Left Column: Work Experience Timeline */}
          <div className="experience-section">
            <h2 className="section-title">Work History</h2>
            <div className="timeline">
              {data.experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="card-header">
                    <h3 className="role-title">{exp.role}</h3>
                    <span className="period-badge">{exp.period}</span>
                  </div>
                  <h4 className="company-name">{exp.company}</h4>
                  <ul className="points-list">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="point-item">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skateboarder Animation & Floating CTA */}
          <div className="skate-section">
            <div className="skate-container">
              {/* Floating CTA speech bubble */}
              <div onClick={() => navigate("/skills")} className="skate-bubble-cta">
                <p>Want to see my skills? Click me!</p>
                <div className="bubble-pointer"></div>
              </div>

              {/* Animated Skateboarder Character */}
              <div className="skater-wrapper">
                <svg className="skater-svg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                  {/* Head */}
                  <circle cx="50" cy="30" r="10" fill="#a5b4fc" />
                  <circle cx="48" cy="28" r="1.5" fill="#0E0724" /> {/* Eye */}
                  
                  {/* Cap */}
                  <path d="M40 23 Q 50 18 60 23 L 62 25 L 40 25 Z" fill="#6366f1" />
                  <path d="M60 23 L 68 25 L 60 27 Z" fill="#6366f1" />
                  
                  {/* Torso/Hoodie */}
                  <path d="M50 40 L 40 65 L 60 65 Z" fill="#312e81" stroke="#6366f1" strokeWidth="2" />
                  
                  {/* Arm 1 (Outstretched for balance) */}
                  <path d="M42 45 L 20 40 L 15 45" fill="none" stroke="#a5b4fc" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Arm 2 (Leaning back) */}
                  <path d="M58 45 L 75 55 L 80 50" fill="none" stroke="#a5b4fc" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Leg 1 (Front leg, slightly bent) */}
                  <path d="M45 65 L 42 85 L 38 95" fill="none" stroke="#a5b4fc" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Leg 2 (Back leg, steering) */}
                  <path d="M55 65 L 58 85 L 62 95" fill="none" stroke="#a5b4fc" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Skateboard */}
                  <g className="skateboard">
                    {/* Deck */}
                    <path d="M15 97 L 85 97 Q 90 97 92 94 L 85 97 L 15 97 Q 10 97 8 94 Z" fill="#e2e8f0" stroke="#6366f1" strokeWidth="3" />
                    {/* Front Wheel */}
                    <circle cx="30" cy="103" r="5" fill="#ffffff" />
                    <circle cx="30" cy="103" r="2" fill="#475569" />
                    {/* Back Wheel */}
                    <circle cx="70" cy="103" r="5" fill="#ffffff" />
                    <circle cx="70" cy="103" r="2" fill="#475569" />
                  </g>
                </svg>
              </div>
              <div className="skate-track"></div>
            </div>
          </div>
        </div>

        <div className="informationButtonsContainer">
          <span onClick={() => navigate("/")} className="back-button">
            <p>Back</p>
          </span>
        </div>
      </div>
    </div>
  );
}
