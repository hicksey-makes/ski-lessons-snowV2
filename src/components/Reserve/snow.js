import Particles from 'react-tsparticles';

const Snow = () => {
  return (
    <Particles id="tsparticles" options={
      {
        "particles": {
          "fullScreen": {
            "enable": false
          },
          "color": {
            "value": "#53687e"
          },
          "move": {
            "direction": "bottom",
            "enable": true,
            "outModes": "out",
            "speed": 3
          },
          "shape": {
                "options": {
                  "image": {
                    "height": 55,
                    "src": "https://www.emoji.co.uk/files/phantom-open-emojis/animals-nature-phantom/12526-snowflake.png",
                    "width": 55
                  }
                },
                "type": "image"
              },
          "number": {
            "density": {
              "enable": true,
              "area": 800
            },
            "value": 500
          },
          "opacity": {
            "value": 0.8
          },
          "size": {
            "value": 7
          },
          "wobble": {
            "enable": true,
            "distance": 10,
            "speed": 10
          },
          "zIndex": {
            "value": {
              "min": 0,
              "max": 100
            }
          }
        }

      }

    }  />
  )
};

export default Snow;
