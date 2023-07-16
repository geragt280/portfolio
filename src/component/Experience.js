import React, { useEffect, useState } from 'react';

export default function Experience({changeAnimation}) {
  
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const getExperiance = async () => {
      const response = await fetch('./files/MyExperianceData.json', {
        method: 'GET'
      });
      const data = await response.json();
      console.log("response", data);
      if (data) {
        setLanguages(data.experiance.languages);        
      }
    };
    getExperiance();
  }, [])
  
  const DisplayExperiance = () => {
    return (
      <ul style={{listStyle:'none'}}>
          {languages.map((e, i) => {
            return <li key={i} className={'exp-point'} >{e}</li>
          })}
      </ul>
    )
  }

  return (
    <div className='active_comp'>
      <div>
        <h1 className='exp_heading'>
          Experience
        </h1>

        <h5>Following are the platform I have worked on</h5>
        
        <div style={{margin:10}}>
          { languages.length > 0 ? <DisplayExperiance /> : <p>No Experience Available</p>}
        </div>
      </div>
      <div className='informationButtonsContainer'>
            <span onClick={() => changeAnimation('Personal')}><div className='sideHorizontalLine' ></div><p>Back</p></span>
      </div>
    </div>
  )
}
