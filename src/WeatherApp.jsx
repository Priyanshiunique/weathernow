import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        city: "Kanpur",
        feelsLike: 32.84,
        humidity: 70,
        temp: 29.05,
        tempMax: 29.05,
        tempMin: 29.05,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);

    }

    return(
        <div style={{ textAlign: "center" }}> 
            <h2> WeatherNow 🌦️ </h2> 
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );

}