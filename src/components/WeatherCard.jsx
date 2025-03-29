import React from "react";
import "../styles/styles.css";
import { motion } from "framer-motion";

const WeatherCard = ({ weather, onRefresh }) => {
  return (
    <motion.div className="weather-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>{weather.name}</h2>
      <p>{weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} km/h</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt="Weather Icon"
      />
      <button className="refresh-btn" onClick={onRefresh}>🔄 Refresh</button>
    </motion.div>
  );
};

export default WeatherCard;


 