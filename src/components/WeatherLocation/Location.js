import React from 'react';
import PropTypes from 'prop-types'
import "./styles.css";

const Location = ({ city }) => (
    // const city = props.city; // forma normal de obtener el valor del parametro

    // Destructuring
    // const { city } = props;


    <div className="locationContainer">
        <h1>{city}</h1>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;