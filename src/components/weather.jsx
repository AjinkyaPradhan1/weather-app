import React from "react";
import { useState } from "react";

const api = {
    key : "262155763f8eccc9110fb2179bbe7812",
    base : "https://api.openweathermap.org/data/2.5/"
}

const Weather = () =>{

    const [cityName,setCityName] = useState('')
    const [weather,setWeather] = useState('')

    const searchData = (event) => {
        if(event.key === "Enter"){
            fetch(`${api.base}weather?q=${cityName}&units=metric&APPID=${api.key}`)
            .then(res=>res.json())
            .then(result=>{
                setWeather(result);
                setCityName('');
                console.log(result)
            })
        }
    }

    return(
        <div className="main">
            <div className="weather-header">Weather</div>
            
            <div className="weather-search">
                <input type="text"
                id="search"
                    value={cityName}
                    onChange={(e)=>setCityName(e.target.value)}
                    onKeyPress={searchData}
                    placeholder="type city and enter"
                />
            </div>

            {/* <div className="weather-data-content"> */}

            {(typeof weather.main!='undefined')?(
            <div className="weather-data-content">
                <div className="weather-data-content-top">
                    <div className="weather-data-content-top-left">
                        <div className="weather-data-content-top-left-name">{weather.name}</div>
                    </div>
                    
                    <div className="weather-data-content-top-right">
                        <div className="weather-data-content-top-right-deg">{weather.main.temp}&deg;C</div>
                        <div className="weather-data-content-top-right-date"></div>
                    </div>
                    
                </div>

                <div className="weather-data-content-bottom"></div>
                {/* <div className="cord">
                    <div className="latitude">{weather.name},{weather.dt}</div>
                    <div className="longitude"></div>
                </div> */}
            </div>
            ):('')}


        </div>
    )
}

export default Weather