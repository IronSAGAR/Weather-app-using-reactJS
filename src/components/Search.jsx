import React from 'react'


export default function Search(props) {


    return (
        <>
            {/* <div className="container">
                <input type="text" className='form-control rounded' placeholder = "Search" onChange = {(event) => props.updateSearch(event.target.value)}/>
                <button onClick = {props.fetchWeather} type="button" className="btn btn-outline-primary">Search</button>
            </div> */}

            <div className="d-flex justify-content-center my-2 my-lg-0 ">
                <input className="form-control mr-sm-2 w-50" type="search" placeholder="Search" onChange = {(event) => props.updateSearch(event.target.value)}/>
                <button className="btn btn-outline-success my-2 my-sm-0 mx-3" type="submit" onClick = {props.fetchWeather}>Search</button>
            </div>
        </>
    )
}