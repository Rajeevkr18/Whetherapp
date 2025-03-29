import React from "react";
import "../styles/styles.css";

const Forecast = ({ forecast }) => {
  const dailyForecast = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 5);

  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-container">
        {dailyForecast.map((item, index) => (
          <div key={index} className="forecast-item">
            <p className="forecast-date">{new Date(item.dt_txt).toLocaleDateString()}</p>
            <p className="forecast-temp">{item.main.temp.toFixed(1)}°C</p>
            <p className="forecast-desc">{item.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather Icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;

