import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Result from './Result';

export default function Weathers(props) {
    const [DelhiWeather, updateDelhi] = useState();
    const [MumbaiWeather, updateMumbai] = useState();
    const [ChennaiWeather, updateChennai] = useState();
    
    async function fetch() {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=08186d845e67a55ec585bbf4b87d8dbe`
            );
            const res1 = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=08186d845e67a55ec585bbf4b87d8dbe`
            );
            const res2 = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=08186d845e67a55ec585bbf4b87d8dbe`
            );
            updateDelhi(res.data)
            updateMumbai(res1.data)
            updateChennai(res2.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetch();
    }, []);




    return <>
        <div className='row '>
            <div className="col">
                {DelhiWeather ? (
                    <Result weather={DelhiWeather} />

                ) : (
                    <div className="container d-flex justify-content-center my-5">
                        <p>Loading</p>
                    </div>
                )}
            </div>
            <div className="col">
                {MumbaiWeather ? (
                    <Result weather={MumbaiWeather} />

                ) : (
                    <div className="container d-flex justify-content-center my-5">
                        <p>Loading</p>
                    </div>
                )}
            </div>
            <div className="col">
                {ChennaiWeather ? (
                    <Result weather={ChennaiWeather} />

                ) : (
                    <div className="container d-flex justify-content-center my-5">
                        <p>Loading</p>
                    </div>
                )}
            </div>
        </div>



    </>







}
