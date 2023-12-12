import React from 'react'
import "./CurrentWeather.css"

const CurrentWeather = () => {
  return (
    <div className='CurrentWeather-container'>
      <div className="CityName">
        <span className='C-head' >Pune</span>
        <br />
        <span className='C-rain'>Chance of Rain: 0%</span>
      </div><br /><br />
      <div className="Ctemp">
        <span className='temp-head'>24<span>&#176;</span></span>
      </div>
      <div className="W-icon">
        <img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/clear-day.svg" alt="Partly Cloudy Day" height="180" />
      </div>
    </div>
  )
}

export default CurrentWeather