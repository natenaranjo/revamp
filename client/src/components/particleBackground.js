import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


const ParticleBackground = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div className='w-screen h-screen'>
     <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
              options={{
            background: {
              color: '#162747',
            },
            fpsLimit: 40,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                resize: true
              },
            },
            particles: {
              color: {
                value: "#f1f1f1"
              },
              number: {
                density: {
                  enable: true,
                  area: 1080
                },
                limit: 0,
                value: 500,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 1,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              shape: {
                type: 'circle',
       
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5
                },
                value: 1
              }
            }
          }}
      /> 
        </div>
    )
}

export default ParticleBackground;