import transformForecast from './../services/transformForecast';


export const SET_CITY = 'SET_CITY';

export const setCity = payload => ({type: SET_CITY, payload});

export const api_key = "0bfd50c494f94587b4ae80baef7cdbaa";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

export const fetchForecast = payload => {



    return dispatch => {

        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        // Indicador de Carga de datos!!!

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            WeatherData => {
                const forecastData =  transformForecast(WeatherData);
                console.log(forecastData);


                // modificar el estado con el resultado de la  promise (fetch)
            }
        )
            return;
    };
};