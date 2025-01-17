import FormattedDate from "./FormattedDate";

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
              <img
                src={data.iconUrl}
                alt={data.description}
                className="float-left"
              />
            </div>
            <div>
              <span className="temperature">
                {Math.round(data.temperature)}
              </span>
              <span className="unit">C°</span>
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
