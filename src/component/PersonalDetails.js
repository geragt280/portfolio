import React from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalDetails() {
  const navigate = useNavigate();
  return (
    <div className="active_comp">
      <div>
        <p className="headingName">Muhammad Bilal Khan</p>
        <p className="headingProfession">Senior Full-Stack Engineer</p>
        <p className="descriptionText">
          Results-driven Senior Full-Stack Engineer with 4.5+ years of experience building scalable web, mobile, and enterprise systems. Specializing in React, Node.js, and Golang.
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
