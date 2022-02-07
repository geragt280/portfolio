import React from 'react'

export default function InformationContainer() {
    const downloadCV = () => {
        fetch('src/component/MuhammadBilalKhanCV.pdf', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/pdf',
            },
        })
        .then((response) => {response.blob(); console.log("api response:",response);})
        .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(
            new Blob([blob]),
            );
            console.log("url made:", url);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
            'download',
            `CV BilalKhan.pdf`,
            );

            // Append to html link element page
            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);
        });
    }
    return (
        <div>
          <p className='headingName'>Muhammad Bilal Khan</p>
          <p className='headingProfession'>Front-end/JavaScript Developer</p>
          <p className='descriptionText'>Hi, I am on my prime time of Career in which I have a long way to chase my dreams.<br/> I develop what you desire.</p>
          <div className='informationButtonsContainer'>
            <span><div className='sideHorizontalLine'></div><p><a href='./files/MuhammadBilalKhanCV.pdf' download >Download CV</a></p></span>
            <span><div className='sideHorizontalLine'></div><p>Experience</p></span>
          </div>
        </div>
    )
}
