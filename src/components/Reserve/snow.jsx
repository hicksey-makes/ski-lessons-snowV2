import { useCallback } from "react";
import Particles from 'react-tsparticles';
import snowflakeConfig from "./snowflake.json";
import { WiSnowflakeCold } from "weather-icons-react";

function snowflake() {
  return <WiSnowflakeCold  size={26}/>;
}

const Snowflakes = () => {
  const particlesInit = useCallback((main) => {
    main.addShape("snowflake", function() {
      snowflake();
    });
  }, []);

  return (
    <Particles id="tsparticles" options={snowflakeConfig} init={particlesInit} />
  )
};

export default Snowflakes;
