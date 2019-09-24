import React from 'react';
import PropTypes from 'prop-types'
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import './styles.css';

const WeatherData = ({data: {temperature,weatherState, humidity, wind} }) => (
/* const {temperature,weatherState, humidity, wind} = data; <<< Opcion de deconstruccion desde una constante;*/ 
    <div className="weatherDataContainer">
        <WeatherTemperature temperature={temperature} weatherState={weatherState}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} viento={wind}></WeatherExtraInfo>
    </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
}

export default WeatherData;