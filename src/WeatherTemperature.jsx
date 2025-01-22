import PropTypes from "prop-types";
export default function WeatherTemperature({ celsius }) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(celsius)}</span>
      <span className="unit">C°</span>
    </div>
  );
}

// PropTypes validation
WeatherTemperature.propTypes = {
  celsius: PropTypes.number.isRequired,
};
