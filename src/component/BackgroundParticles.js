import React from 'react'
import Particles from "react-tsparticles";

export default function BackgroundParticles() {

    const particlesInit = (main) => {
        // console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
    
      const particlesLoaded = (container) => {
        // console.log(container);
      };

    return (
        <div>
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
        </div>
    )
}
