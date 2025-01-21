import PropTypes from "prop-types";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    return days[day];
  }

  function maxTemp() {
    let temperature = props.data.temperature.maximum;
    return `${Math.round(temperature)}°`;
  }

  function minTemp() {
    let temperature = props.data.temperature.minimum;
    return `${Math.round(temperature)}°`;
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} size={36} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">{maxTemp()}</span>
        <span className="WeatherForecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}

// PropTypes validation
WeatherForecastDay.propTypes = {
  data: PropTypes.shape({
    time: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      maximum: PropTypes.number.isRequired,
      minimum: PropTypes.number.isRequired,
    }).isRequired,
    condition: PropTypes.shape({
      icon: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
