import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const {countryName} = useParams()
    const [country, setCountry] = useState([])
    const {flag, name, capital, population, area, region} = country
    useEffect(()=>{
fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
.then(res => res.json())
.then(data => setCountry(data[0]))
    },[countryName])

    return (
        <div className="d-flex justify-content-center">
        <div className="div-style m-3 p-3 shadow">
            <img id="image" src={flag} alt=""/>
            <h2>Name: {name}</h2>
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <h3>Region: {region}</h3>
        </div>
        </div>
    );
};

export default Details;