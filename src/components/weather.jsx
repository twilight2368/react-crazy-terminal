import { useEffect, useState } from "react";
import "./style/style.css";

export default function WeatherDisplay(params) {
  const [position, setPosition] = useState(null);
  const [havingposition, setHavingposition] = useState(false);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const successHandler = (pos) => {
      setPosition(pos.coords);
      setHavingposition(true);
    };

    const errorHandler = (err) => {
      setError(err.message);
      setPosition(true);
      setHavingposition(false);
    };

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  useEffect(() => {
    if (havingposition) {
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${position.latitude}&&longitude=${position.longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,snowfall,wind_speed_10m&forecast_days=1`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          //console.log(data);
          setWeather(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [havingposition]);

  return (
    <>
      {weather ? (
        <>
          <div className="weather-display-area">
            <div>
              <div
                style={{
                  color: "var(--dark-blue)",
                  textShadow: "1px 1px 1px var(--light-blue)",
                }}
              >
                🌡 Temperature: {weather.current.temperature_2m}
                {weather.current_units.temperature_2m}
              </div>
              <div
                style={{
                  color: "var(--dark-green)",
                  textShadow: "1px 1px 1px var(--light-green)",
                }}
              >
                🌢 Humidity: {weather.current.relative_humidity_2m}
                {weather.current_units.relative_humidity_2m}
              </div>
              <div
                style={{
                  color: "var(--dark-purple)",
                  textShadow: "1px 1px 1px var(--dark-crystal)",
                }}
              >
                🌧 Rain: {weather.current.rain}
                {weather.current_units.rain}
              </div>
              <div
                style={{
                  color: "var(--dark-yellow)",
                  textShadow: "1px 1px 1px var(--light-yellow)",
                }}
              >
                🌨 Snowfall: {weather.current.snowfall}
                {weather.current_units.snowfall}
              </div>
              <div
                style={{
                  color: "var(--dark-red)",
                  textShadow: "1px 1px 1px var(--light-red)",
                }}
              >
                🌬 Wind Speed: {weather.current.wind_speed_10m}
                {weather.current_units.wind_speed_10m}
              </div>
            </div>
            <div
              style={{
                color: "var(--comment)",
              }}
            >
              /* Source: 🌤 Open-Meteo Weather API */
            </div>
          </div>
        </>
      ) : (
        <>
          {error ? (
            <>
              <span
                style={{
                  marginRight: "10px",
                  color: "var(--dark-red)",
                  textShadow: "1px 1px 1px var(--light-red)",
                  textTransform: "uppercase",
                }}
              >
                Error:
              </span>
              <span
                style={{
                  color: "var(--comment)",
                }}
              >
                {error}
              </span>
            </>
          ) : (
            <>
              {" "}
              <span className="loading-weather">Loading...</span>{" "}
            </>
          )}
        </>
      )}
    </>
  );
}
