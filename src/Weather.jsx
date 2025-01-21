import { useState } from "react";
import PropTypes from "prop-types";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather({ defaultCity }) {
  const [city, setCity] = useState(defaultCity);
  const [weatherData, setWeatherData] = useState({
    ready: false,
  });

  function handleResponse(res) {
    setWeatherData({
      ready: true,
      date: new Date(res.data.dt * 1000),
      description: res.data.weather[0].description,
      temperature: res.data.main.temp,
      humidity: res.data.main.humidity,
      wind: res.data.wind.speed,
      city: res.data.name,
      icon: res.data.weather[0].icon,
      coordinates: res.data.coord,
    });
  }

  function search() {
    const apiKey = "8944afa6845bd7c413a687258d3211ef";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

// PropTypes validation
Weather.propTypes = {
  defaultCity: PropTypes.string.isRequired,
};
