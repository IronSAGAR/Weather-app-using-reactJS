import React from 'react'

export default function Result(props) {
    const { weather } = props;
    
    return (
        <>
            <div className="container border rounded my-5 " style={{width:"350px"}}>
                <h1 className='d-flex justify-content-center my-3'>{weather.name}</h1>
                
                <div className="container d-flex justify-content-center my-2">
                    <h4>
                        <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span> |{" "}
                        {`${weather?.weather[0].description}`}
                        
                    </h4>
                </div>
                <div className="row  my-2">
                    <div className="col sm">
                        <p>Min Temp : {Math.floor(weather.main.temp_min - 273)}°C</p>
                    </div>
                    <div className="col sm">
                        <p>Max Temp : {Math.floor(weather.main.temp_max - 273)}°C</p>
                    </div>
                    
                </div>
                <div className="row my-2">
                    <div className="col sm">
                    <p>Humidity : {weather.main.humidity}</p>
                    </div>
                    <div className="col sm">
                        <p>Wind Speed : {weather.wind.speed}</p>
                    </div>  
                </div>
                <div className="row my-2">
                    <div className="col sm">
                    <p>Longitude : {weather.coord.lon}</p>
                    </div>
                    <div className="col sm">
                        <p>Latitude : {weather.coord.lat}</p>
                    </div>  
                </div>
            </div>


        </>
    )
}