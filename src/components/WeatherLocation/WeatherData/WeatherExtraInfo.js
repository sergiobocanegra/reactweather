import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, viento }) => (
    <div className="weatherExtraInfoContainer">
        <span className="extraInfoText">{`Humedad: ${humidity} %`}</span>
        <span className="extraInfoText">{`Viento:  ${viento} m/s`}</span>

    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    viento: PropTypes.number.isRequired,
}

export default WeatherExtraInfo;