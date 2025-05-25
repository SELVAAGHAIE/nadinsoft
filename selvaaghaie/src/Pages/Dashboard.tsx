import React from "react";
import Header from "../Components/Header";
import TodayAndMonthly from "../Components/TodayAndMonthly";
import { useState } from "react";
import WeatherForecast from "../Components/WeatherForecast";
import Footer from "../Components/Footer";
function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <>
      <Header setWeatherData={setWeatherData} />
      <TodayAndMonthly weatherData={weatherData} />
      <WeatherForecast weatherData={weatherData} />
      <Footer></Footer>
    </>
  );
}

export default Dashboard;
