import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
    Card,
    Button
  } from "react-bootstrap";

const Country = (props) => {
    const{name, region,alpha3Code,flag} = props.country

    const history = useHistory();
    const handleCountryDetails= (countryCode)=>{
        history.push(`/countryDetails/${countryCode}`)
    }

    const countryStyle={
        border: '1px solid black',
        margin:'20px',
        padding: '20px',
        borderRadius: '20px',
        maxWidth: '18rem'
    }


    return (
        <Card className=" col-lg-6 col-md-6 col-sm-12 col-12 my-4" style={countryStyle}>
        <Card.Img variant="top" src={flag} />
          <Card.Body>
              <Card.Title>{name}</Card.Title>
                <Card.Text>
                <h2>Country: {name}</h2>
                <p>Region: {region}</p>
                <Link to={`/countryDetails/${alpha3Code}`}>Click here for more details about {alpha3Code}</Link>
                </Card.Text>
              <Button country={props.country} onClick={()=>handleCountryDetails(alpha3Code)} variant="primary">More details</Button>
          </Card.Body>
      </Card>
            
        // <div style={}>
            
        //     <p><Link to={`/countryDetails/${alpha3Code}`}>Click here for more details about {alpha3Code}</Link></p>
        //     <button onClick={()=>handleCountryDetails(alpha3Code)}>More details</button>
        // </div>
    );
};

export default Country;