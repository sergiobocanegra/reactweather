import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData'

const ForecastItem = ({ data, weekDay, hour }) => (
    <div>
        <h2>{weekDay} - {hour}hr</h2>
        <WeatherData data={data}></WeatherData>
    </div>
);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
};

export default ForecastItem;