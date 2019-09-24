import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import { PropTypes } from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import "./styles.css";
import GetUrlWeatherByCity from "./../../services/getUrlWeatherByCity"
import TransformWeather from './../../services/transformWeather';

// const data = {
//     temperature : 5,
//     weatherState: SNOW,
//     humidity: 8,
//     wind: 34
// }

// const data2 = {
//     temperature : 24,
//     weatherState: SUN,
//     humidity: 10,
//     wind: 45
// }

class WeatherLocation extends Component {
    constructor(props){
        super(props);
        const { city } = props;

        this.state = {
            city,
            data: null,
        }
    }

    componentDidMount(){
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState){
    }



    handleUpdateClick = () => {
        const api_wather = GetUrlWeatherByCity(this.state.city);
        fetch(api_wather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = TransformWeather(data);
            this.setState({
                city: data.name,
                data: newWeather
            });
        });
        // console.log("Actualizado");
        // this.setState({
        //     city: "Ciudad de Villahermosa",
        //     data: data2
        // });
    }
    render(){
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state
        return (
            <div className="weatherLocationContainer" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {
                    data ?
                    <WeatherData data={data}></WeatherData>
                     :
                    <CircularProgress size={50}/>
                }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;