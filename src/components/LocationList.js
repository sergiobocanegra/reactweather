import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({cities, onSelectedLocation}) =>{ 
const handleweatherLocationClick = city=>{
    console.log("Entró al handle.... "+city);
    onSelectedLocation(city);
}
const listaLocalidades = cities => (
    cities.map( city => <WeatherLocation 
                            key={city} 
                            city={city} 
                            onWeatherLocationClick={() => handleweatherLocationClick(city)}/>
    )
);

return (
    <div className="locationList">
        {listaLocalidades(cities)}
    </div>
);

};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func
}

export default LocationList;