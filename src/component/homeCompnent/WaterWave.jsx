import React from "react";
import WaterWave from 'react-water-wave';
import "react-water-wave/dist/index.css";

const WaterWave = () => {
    const image = 'https://www.wearegecko.co.uk/media/50316/mountain-3.jpg'
  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
         <WaterWave
    imageUrl={image}
  >
    
  </WaterWave>
      </div>
    </>
  );
};

export default WaterWave;
