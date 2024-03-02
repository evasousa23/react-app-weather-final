import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
    const [city, setCity] = useState(null);
    let [Weather, setWeather] = useState("");
    let [loaded, setLoaded] = useState(false);

    function showWeather(response) {
        setLoaded(true);
        setWeather({
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apikey = "ff1d9ea9376b5c27a82e04fc2b2abdbb";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        axios.get(url).then(showWeather);
    }

    function changeCity(event) {
        setCity(event.target.value);
    }
    let answer = (
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={changeCity} />
            <input type="submit" />
        </form>
    );
    if (loaded) {
        return (
            <div>
                {answer}
                <ul>
                    <li>Temperature: {Math.round(Weather.temperature)}°C</li>
                    <li>Description: {Weather.description}</li>
                    <li>Humidity: {Weather.humidity}%</li>
                    <li>Wind: {Weather.wind}Km/h</li>
                    <li>
                        <img src={Weather.icon} alt=" " />
                    </li>
                </ul>
            </div>
        );
    } else {
        return answer;
    }
}
