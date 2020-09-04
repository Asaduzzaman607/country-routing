import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const CountryDetails = () => {

    const {countryCode}= useParams();

    const[countryDetails, setCountryDetails] = useState ({});

    const{name,flag, alpha3Code, region,nativeName, population,capital}= countryDetails
console.log(countryDetails)
    useEffect (()=>{
        fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        .then(res => res.json())
        .then(data=> setCountryDetails(data))
        .catch(error => console.log(error))
  
      },[])

    return (
      
        <div>
            <h2>Here is the details of {countryCode}</h2>
            <img className='img-fluid' src={flag} alt=""/>
    <h3>Country Name: {name}</h3>
    <h4>Native Name: {nativeName}</h4>
    <h5>Alpha Code: {alpha3Code}</h5>
    <p>region: {region}</p>
    <p>Capital: {capital}</p>
    <p>Population: {population}</p>


        </div>
    );
};

export default CountryDetails;