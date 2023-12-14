import React from 'react';
import "./Logo.css"
const Logo = () => {
  return (
    <div className="logo-column">
      <div className="div-1">
        <div className="weather-logo">
          <img className='logo-icon' src="./assets/weather-snow.svg" alt="Weather Logo" />
          <h3 className='logo-head'>Weather</h3>
        </div>
        <div className="cities">
          <img className='logo-icon' src="./assets/city.svg" alt="Cities Logo" />
          <h3 className='logo-head'>Cities</h3>
        </div>
        <div className="map">
          <img className='logo-icon' src="./assets/map.svg" alt="Map Logo" />
          <h3 className='logo-head'>Map</h3>
        </div>
      </div>
    </div>
  );
};

export default Logo;

