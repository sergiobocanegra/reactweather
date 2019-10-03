import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typograhy from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.css';


const cities = [
  'Villahermosa,MX',
  'Mexico,MX',
  'Monterrey,MX',
  'Veracruz,MX',
  'Cancun,MX',
  'Acapulco,MX',
  'Puebla,MX'
];


// const setCity = value => ({type: 'setCity', value});

class App extends Component{
  // constructor(){
  //   super();
  //   this.state = {city: null};
  // }

  // handleSelectionLocation = city => {
  //   this.setState({city});
  //   console.log("Entró al handle Selection Location, app.js ....");
    
  //   this.props.setCity(city);
  // }

  render(){
    // const {city} = this.state;
    return (
      <Grid>

        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typograhy variant='h6' color='inherit'>
                Weather APP
              </Typograhy>
            </Toolbar>
          </AppBar>
        </Row>

        <Row>
          <Col xs={12} md={6}>
             <LocationListContainer cities = {cities} />
          </Col>

          <Col xs={12} md ={6}>
            <Paper>
              <div className="details">
                {
                  // !city ? 
                  //   <h1>No ha seleccionado una ciudad!!!</h1>:
                  //   <ForecastExtended city={city}></ForecastExtended>

                  // city &&
                   <ForecastExtendedContainer></ForecastExtendedContainer>
                }
              </div>
            </Paper>
          </Col>
        </Row>

      </Grid>
    );
  }
}

// const AppConnected = connect(null, mapDispatchToPropsActions)(App);

export default App;