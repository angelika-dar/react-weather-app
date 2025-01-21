import PropTypes from "prop-types";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo({ data }) {
  return (
    <div className="WeatherInfo">
      <h1>{data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={data.date} />
        </li>
        <li className="text-capitalize">{data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={data.icon} size={52} />
            </div>
            <div>
              <WeatherTemperature celsius={data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {data.humidity}%</li>
            <li>Wind: {Math.round(data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
WeatherInfo.propTypes = {
  data: PropTypes.shape({
    city: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    description: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
};
