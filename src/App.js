import React from 'react';
import Logo from './Components/Logo/Logo';
import SearchBar from './Components/SearchBar/SearchBar'; 
import CurrentWeather from './Components/CurrentWeather/CurrentWeather'
import TodaysForecast from './Components/TodaysForecast/TodaysForecast'
import AirConditions from "./Components/AirConditions/AirConditions"
import SevenDayForecast from "./Components/7DayForecast/SevenDayForecast"
import "./App.css"

function App() {

  return (
    <div className="App">
      <Logo />
      <SearchBar />
      <CurrentWeather />
      <TodaysForecast /><br />
      <AirConditions />
      <SevenDayForecast />
    </div>
  );
}

export default App;
