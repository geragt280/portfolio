import React from 'react'

export default function PersonalDetails({changeAnimation}) {
  console.log("upcomming props", changeAnimation);
  return (
    <div className='active_comp'>
        <div>
          <p className='headingName'>Muhammad Bilal Khan</p>
            <p className='headingProfession'>Front-end/JavaScript Developer</p>
          <p className='descriptionText'>Hi, I have almost 3 years of professional development experiance.<br/> I develop what you desire.</p>
        </div>
        <div className='informationButtonsContainer'>
            <span><div className='sideHorizontalLine'></div><p><a href='./files/MuhammadBilalKhanCV.pdf' download >Download CV</a></p></span>
            <span onClick={() => changeAnimation('Experience')}><div className='sideHorizontalLine' ></div><p>Experience</p></span>
        </div>
    </div>
  )
}
