import React from 'react'
import "./AirConditions.css"

const AirConditions = () => {
    return (
        <>
            <div className="main">
                <div className="AirConditions-container">
                    <h1 className='A-head'>Air Conditions</h1>
                    <div className="A-Condition">
                        <span className='A-child'>Real Feel</span><br /><br />
                        <span className='child-air'>25<span>&#176;</span></span>
                    </div>
                    <div className="A-Condition">
                        <span className='A-child'>Wind</span><br /><br />
                        <span className='child-air'>0.2km/h</span>
                    </div>
                    <div className="A-Condition">
                        <span className='A-child'>Chance of Rain: </span><br /><br />
                        <span className='child-air'>0%</span>
                    </div>
                    <div className="A-Condition">
                        <span className='A-child'>UV Index</span><br /><br />
                        <span className='child-air'>2</span>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AirConditions