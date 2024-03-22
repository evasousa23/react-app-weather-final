import React, { useState, useEffect } from "react";
import './WeatherForecast.css';
import axios from "axios";
import FormatDateForecast from "./FormatDateForecast";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState([]);
    const [temperatureUnit, setTemperatureUnit] = useState("C");

    function handleTemperatureClick(event) {
        event.preventDefault();
        if (temperatureUnit === "C") {
            setTemperatureUnit("F");
        } else {
            setTemperatureUnit("C");
        }
    }

    // Convert temperature based on the selected unit
    function convertTemperature(temperature) {
        if (temperatureUnit === "C") {
            return temperature;
        } else {
            // Convert Celsius to Fahrenheit
            return (temperature * 9 / 5) + 32;
        }
    }

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    useEffect(() => {
        let apiKey = "734273ccf9a2ecd1e07fb3c5t7o319bd";
        let lon = props.coordinates.longitude;
        let lat = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }, [props.coordinates]);

    if (loaded) {
        console.log(forecast);

        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map((dayForecast, index) => (
                        <div key={index} className="col">
                            <div className="WeatherForecast-day">
                                <FormatDateForecast date={new Date(dayForecast.time * 1000)} />
                            </div>
                            <div className="WeatherForecast-day">{Math.round(convertTemperature(dayForecast.temperature.day))}°  <a href="/" className="temp-link" onClick={handleTemperatureClick}>
                                {temperatureUnit === "C" ? "C" : "F"}
                            </a></div>

                            <div className="Icon">
                                <img
                                    src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${dayForecast.condition.icon}.png`}
                                    alt={dayForecast.description}
                                />
                            </div>
                            <div className="WeatherForecast-temps">
                                <span>{Math.round(convertTemperature(dayForecast.temperature.minimum))}° | </span>
                                <span className="WeatherForecast-mintemp">{Math.round(convertTemperature(dayForecast.temperature.maximum))}°</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } else {
        return null;
    }
}