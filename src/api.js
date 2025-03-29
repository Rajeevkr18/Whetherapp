import axios from "axios";

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_KEY = '68d73be1c5d61781d0cbbf89d0c44503';

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error("City not found. Please try again.");
  }
};

export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(`${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch forecast. Please try again.");
  }
};
