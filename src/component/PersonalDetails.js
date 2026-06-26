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
          Performance-driven Senior Full-Stack Engineer with over 7.5 years of comprehensive experience engineering resilient web architectures, enterprise backends, and mobile systems. Specializing in React, Node.js, Golang, and .NET (C#).
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
