
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Search from "./components/Search";
import Result from './components/Result';
import Headache from './components/Headache';


function App() {

  const [search, updateSearch] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=08186d845e67a55ec585bbf4b87d8dbe`
    );


    updateWeather(response.data);
  };

  const myStyle = {
    backgroundColor: "#87CEEB",
    height: '100vh',
    padding: "10px",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={myStyle} >


      <div className="container mt-5" >


        <Search updateSearch={updateSearch} fetchWeather={fetchWeather} />

        {weather ? (
          <Result weather={weather} />
        ) : (
          <div className="container d-flex justify-content-center my-5">
            <p> </p>
          </div>
        )}
      </div>
      <Headache />

    </div>
  );
}

export default App;
