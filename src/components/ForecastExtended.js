import React, { Component } from 'react';
import ForecastItem from './ForecastItem';
import PropTypes from 'prop-types';
import WeatherData from './WeatherLocation/WeatherData';

/*
const days = [
    'Lunes','Martes','Miércoles','Jueves','Viernes',
];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'Normal',
    wind: 10
}
*/
// https://samples.openweathermap.org/data/2.5/forecast/daily?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22

export const api_key = "0bfd50c494f94587b4ae80baef7cdbaa";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component {
    constructor() {
        super();
        this.state = { forecastData: null }
    }

    componentDidMount() {
        // fetch

        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            WeatherData => {
                console.log(WeatherData);
            }
        )
    }

    renderForecsastItemDays() {
        // return days.map(day => (<ForecastItem key={day+"01"} data={data} weekDay={day} hour={11}></ForecastItem>));
        return (<h2>Render ITEMS!!!</h2>);
    }

    renderProgress = () => {
        return "Cargando pronostico extendido";
    }

    render() {
        const { city } = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h1 className={"forecast-title"}> Pronostico - {city}</h1>
                {forecastData ?  
                    this.renderForecsastItemDays():
                    this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;