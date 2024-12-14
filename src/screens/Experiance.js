import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Experience({ changeAnimation }) {
  const [languages, setLanguages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getExperiance = async () => {
      const response = await fetch("./files/MyExperianceData.json", {
        method: "GET",
      });
      const data = await response.json();
      console.log("response", data);
      if (data) {
        setLanguages(data.experiance.languages);
      }
    };
    getExperiance();
  }, []);

  const DisplayExperiance = () => {
    return (
      <ul style={{ listStyle: "none" }}>
        {languages.map((e, i) => {
          return (
            <li key={i} className={"exp-point"}>
              {e}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="experience container_middle">
      <div
        style={{
          margin: "100px 0px 50px 130px",
        }}
      >
        <div>
          <h1 className="exp_heading">Experience</h1>

          <h5>Following are the platform I have worked on</h5>

          <div style={{ margin: 10 }}>
            {languages.length > 0 ? (
              <DisplayExperiance />
            ) : (
              <p>No Experience Available</p>
            )}
          </div>
        </div>
        <div className="informationButtonsContainer">
          <span onClick={() => navigate("/")}>
            <div className="sideHorizontalLine"></div>
            <p>Back</p>
          </span>
        </div>
      </div>
    </div>
  );
}
