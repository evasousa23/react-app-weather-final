import React, { useState } from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
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

    return (
        <div className="WeatherInfo">
            <h1 className="Cityname">{props.data.city}</h1>
            <div className="row Centercontainer">
                <div className="col-6">
                    <ul className="list-group-left">
                        <li>
                            <img
                                src={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.data.icon}.png`}
                                alt={props.data.description}
                                className="float-sm-left"
                            />
                        </li>
                        <li>
                            Humidity: {props.data.humidity}%
                        </li>
                        <li>
                            Wind: {props.data.wind} km/h
                        </li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul className="list-group-right">
                        <li>
                            Silky Weather: <span className="text-capitalize">{props.data.description}</span>
                        </li>
                        <li>
                            <FormatDate date={props.data.date} />
                        </li>
                        <li className="current-temp">
                            {Math.round(convertTemperature(props.data.temperature))} <a className="temp-links" href="/" onClick={handleTemperatureClick}>C°</a> | <a className="temp-links" href="/" onClick={handleTemperatureClick}>F°</a>
                        </li>
                    </ul>


                </div>
            </div>
        </div>
    );
}