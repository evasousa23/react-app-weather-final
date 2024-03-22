import React, { useState } from "react";
import './Centercontainer.css';
import 'bootstrap/dist/css/bootstrap.css';
import './SearchEngine.css';
import axios from "axios";
import './Cityname.css';
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Centercontainer(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            city: response.data.city,
            description: response.data.condition.description,
            date: new Date(response.data.time * 1000),
            icon: response.data.condition.icon,
            coordinates: response.data.coordinates,
        });
    }


    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }


    function search() {
        const apiKey = "734273ccf9a2ecd1e07fb3c5t7o319bd";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (weatherData.ready) {
        return (
            <div className="row justify-content-center">
                <WeatherInfo data={weatherData} />
                <form onSubmit={handleSubmit} className="">
                    <div className="row">
                        <div className="col-md-6"> 
                            <input type="search" placeholder="Enter a city" className="form-control" onChange={handleCityChange} />
                        </div>
                        <div className="col-md-3"> 
                            <input type="submit" value="Search" className="btn btn-primary w-100" /> 
                        </div>
                    </div>
                </form>
                <WeatherForecast coordinates={weatherData.coordinates} />
            </div>

        );
    } else {
        search();
        return "Loading";
    }
}