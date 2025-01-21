import { useState } from "react";
import PropTypes from "prop-types";
export default function WeatherTemperature({ celsius }) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(e) {
    e.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="unit">
          C° |{" "}
          <a href="/" onClick={showFahrenheit}>
            F°
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            C°
          </a>{" "}
          | F°
        </span>
      </div>
    );
  }
}

// PropTypes validation
WeatherTemperature.propTypes = {
  celsius: PropTypes.number.isRequired,
};
