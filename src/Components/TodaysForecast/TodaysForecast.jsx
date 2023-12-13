import React from 'react'
import "./TodaysForecast.css"

const TodaysForecast = () => {
    return (
        <><div className="TodaysForecast-main">
            <div class="TodaysForecast-container">
            <h1 className='T-head' >Today's Forecast</h1>
                <div class="child-report">
                    <span className='child-time'>6:00 PM </span><br />
                    <span><img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/clear-day.svg" alt="Partly Cloudy Day" height="48" /></span><br />
                    <span className='child-temp'>25<span>&#176;</span></span>
                </div>
                <div class="child-report">
                    <span className='child-time'>6:00 PM </span><br />
                    <span><img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/partly-cloudy-day.svg" alt="Partly Cloudy Day" height="48" /></span><br />
                    <span className='child-temp'>25<span>&#176;</span></span>
                </div>
                <div class="child-report">
                    <span className='child-time'>6:00 PM </span><br />
                    <span><img src="https://bmcdn.nl/assets/weather-icons/v2.0/line/rain.svg" alt="Rain" height="48" /></span><br />
                    <span className='child-temp'>25<span>&#176;</span></span>
                </div>
                <div class="child-report">
                    <span className='child-time'>6:00 PM </span><br />
                    <span>   <img src="https://bmcdn.nl/assets/weather-icons/v2.0/line/tornado.svg" alt="Tornado" height="48" /></span><br />
                    <span className='child-temp'>25<span>&#176;</span></span>
                </div>
                <div class="child-report">
                    <span className='child-time'>6:00 PM </span><br />
                    <span><img src="https://bmcdn.nl/assets/weather-icons/v2.0/line/rain.svg" alt="Rain" height="48" /></span><br />
                    <span className='child-temp'>25<span>&#176;</span></span>
                </div>
                <div class="child-report">
                    <span className='child-time'>6:00 PM </span><br />
                    <span>    <img src="https://bmcdn.nl/assets/weather-icons/v2.0/line/clear-night.svg" alt="Clear Night" height="48" /></span><br />
                    <span className='child-temp'>25<span>&#176;</span></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default TodaysForecast