import Particles from 'react-tsparticles';
import snowConfig from './snow.json';
import { WiSnowflakeCold } from "weather-icons-react";

const Snow = () => {
  return (
    <Particles id="tsparticles" options={
      {
        "particles": {
          "color": {
            "value": "#5A5F8C"
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
                    "height": 182,
                    "src":"",
                    "width": 143
                  }
                },
                "type": "circle"
              },
          "number": {
            "density": {
              "enable": true,
              "area": 800
            },
            "value": 200
          },
          "opacity": {
            "value": 0.5
          },
          "size": {
            "value": 8
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
