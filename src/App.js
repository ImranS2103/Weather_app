import React from 'react';
import Logo from './Components/Logo/Logo';
import SearchBar from './Components/SearchBar/SearchBar'; 
import CurrentWeather from './Components/CurrentWeather/CurrentWeather'
import TodaysForecast from './Components/TodaysForecast/TodaysForecast'
import AirConditions from "./Components/AirConditions/AirConditions"

function App() {

  return (
    <div className="App">
      <Logo />
      <SearchBar />
      <CurrentWeather />
      <TodaysForecast /><br />
      <AirConditions />
    </div>
  );
}

export default App;
