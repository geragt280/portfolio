import React from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalDetails({}) {
  const navigate = useNavigate();
  return (
    <div className="active_comp">
      <div>
        <p className="headingName">Muhammad Bilal Khan</p>
        <p className="headingProfession">Front-end/JavaScript Developer</p>
        <p className="descriptionText">
          Hi, I have currently 3 years of professional development experiance.
          <br /> I develop what you desire.
        </p>
      </div>
      <div className="informationButtonsContainer">
        <span>
          <div className="sideHorizontalLine"></div>
          <p>
            <a href="./files/MuhammadBilalKhanCV.pdf" download>
              Download CV
            </a>
          </p>
        </span>
        <span onClick={() => navigate("/experience")}>
          <div className="sideHorizontalLine"></div>
          <p>Experience</p>
        </span>
      </div>
    </div>
  );
}
