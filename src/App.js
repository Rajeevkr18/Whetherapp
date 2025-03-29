import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import HistoryList from "./components/HistoryList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Forecast from "./components/Forecast";
import ThemeToggle from "./components/ThemeToggle";
import { fetchWeather, fetchForecast } from "./api";
import "./styles/styles.css";

const App = () => {
  // State variables for managing weather data, forecast, loading, errors, search history, and theme mode
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Load search history from localStorage when the component mounts
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("weatherHistory")) || [];
    setHistory(savedHistory);
  }, []);

  // Function to handle city search and fetch weather + forecast data
  const handleSearch = async (city) => {
    setLoading(true);  
    setError(""); 

    try {
       const data = await fetchWeather(city);
      const forecastData = await fetchForecast(city);
 
      setWeather(data);
      setForecast(forecastData);
      updateHistory(city);  
    } catch (err) {
      setError(err.message);  
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);  
    }
  };

  // Function to update search history and store it in localStorage
  const updateHistory = (city) => {
     const updatedHistory = [city, ...history.filter((c) => c !== city)].slice(0, 5);
    setHistory(updatedHistory);
    localStorage.setItem("weatherHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className={`container ${darkMode ? "dark" : "light"}`}>
      <h1>Weather Dashboard</h1>
      <ThemeToggle toggleTheme={() => setDarkMode(!darkMode)} />  
      <SearchBar onSearch={handleSearch} />  
      
      {loading && <Loader />}  
      {error && <ErrorMessage message={error} />}  
      
      {weather && <WeatherCard weather={weather} onRefresh={() => handleSearch(weather.name)} />}  
      {forecast && <Forecast forecast={forecast} />}  
      
      <HistoryList history={history} onSelect={handleSearch} />  
    </div>
  );
};

export default App;



 