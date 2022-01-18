import React, { useEffect } from 'react'
import './component/css/App.css';
// import Script from './component/customHooks/Script';
import Particles from "react-tsparticles";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function App() {


  useEffect(() => {
    $('#navigator').slideToggle(); // it closes my navigation tabs in start
  }, []);

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };


  const particlesLoaded = (container) => {
    console.log(container);
  };

  const collapseFunction = (x) =>{
    // window.alert("Hello.")
    $("#defaultMenuStyle").toggleClass('changeMenuStyle');
    $('#navigator').slideToggle();
  }
  
  

  return (
    <div className="mainBody">
      <div className='container_middle'>
        <div className='information_container'>
          <p className='headingName'>Muhammad Bilal Khan</p>
          <p className='headingProfession'>Front-end/JavaScript Developer</p>
          <p className='descriptionText'>Hi, I am on my prime time of Career in which I have a long way to chase my dreams.<br/> I develop what you desire.</p>
          <div className='informationButtonsContainer'>
            <span><div className='sideHorizontalLine'></div><p>Download CV</p></span>
            <span><div className='sideHorizontalLine'></div><p>Experience</p></span>
          </div>
        </div>
        <div  className='nav_bar_container' onClick={()=> collapseFunction()}  >
          <div class="x-button-container" id='defaultMenuStyle'>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
          <div id='navigator'>
            <ul>
              <li><FontAwesomeIcon icon={faHome} /></li>
              <li>Work</li>
              <li>Profile</li>
              <li>Skills</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <Particles
        className="particles-background"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0E0724",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          particles: {
            number: {
              value: 500,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "edge",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "right",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          detectRetina: true,
          fullScreen:true,
        }}
      />
      {/* <div className='animation-container1' id='div1' />
      <div className='animation-container2' />
      <div className='animation-container3' />
      <div className='animation-container4' />
      <div className='animation-container5' /> */}
      
    </div>
  );
}

