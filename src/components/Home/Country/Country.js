
import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const { flag, name, population, area } = props.country
    return (
        <div className="div-style m-3 p-3 shadow ">
            <img id="image" src= {flag} alt=""/>
            <h2>Name: {name}</h2>
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <Link to={"/country/"+name}><button>More details</button></Link>
        </div>
    );
};

export default Country;