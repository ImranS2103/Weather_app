import React from 'react'
import "./SevenDayForecast.css"

const SevenDayForecast = () => {
    return (
<div className="DayForecast-main">
        <div class="DayForecast-container">
            <div class="day-head">7-Day Forecast</div>

            <div class="row row-1">
                <div class="day">Today</div>
                <div class="d-icon"><span><img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/clear-day.svg" alt="Partly Cloudy Day" height="48" /></span></div>
                <div class="w-type">Sunny</div>
                <div class="min-max">36/<span>22</span></div>
            </div>

            <div class="row row-2">
                <div class="day">Tue</div>
                <div class="d-icon"><span><img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/clear-day.svg" alt="Partly Cloudy Day" height="48" /></span></div>
                <div class="w-type">Sunny</div>
                <div class="min-max">36/<span>22</span></div>
            </div>

            <div class="row row-3">
                <div class="day">Wed</div>
                <div class="d-icon"><span><img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/partly-cloudy-day.svg" alt="Partly Cloudy Day" height="48" /></span></div>
                <div class="w-type">Cloudy</div>
                <div class="min-max">36/<span>22</span></div>
            </div>

            <div class="row row-4">
                <div class="day">Thu</div>
                <div class="d-icon"><span><img src="https://bmcdn.nl/assets/weather-icons/v2.0/line/rain.svg" alt="Rain" height="48" /></span></div>
                <div class="w-type">Rainy</div>
                <div class="min-max">36/<span>22</span></div>
            </div>

            <div class="row row-5">
                <div class="day">Fri</div>
                <div class="d-icon"><span>   <img src="https://bmcdn.nl/assets/weather-icons/v2.0/line/tornado.svg" alt="Tornado" height="48" /></span></div>
                <div class="w-type">Tornado</div>
                <div class="min-max">36/<span>22</span></div>
            </div>

            <div class="row row-6">
                <div class="day">Sat</div>
                <div class="d-icon"><span><img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/partly-cloudy-day.svg" alt="Partly Cloudy Day" height="48" /></span></div>
                <div class="w-type">Cloudy</div>
                <div class="min-max">36/<span>22</span></div>
            </div>

            <div class="row row-7">
                <div class="day">Sun</div>
                <div class="d-icon"><span><img src="https://bmcdn.nl/assets/weather-icons/v2.0/fill/partly-cloudy-day.svg" alt="Partly Cloudy Day" height="48" /></span></div>
                <div class="w-type">Cloudy</div>
                <div class="min-max">36/<span>22</span></div>
            </div>
        </div>
        </div>
    )
}

export default SevenDayForecast