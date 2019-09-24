import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typograhy from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
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

class App extends Component{
  handleSelectionLocation = city => {
    console.log("Entró al handle Selection Location, app.js ....");
  }

  render(){
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
          <LocationList cities = {cities}
                        onSelectedLocation={this.handleSelectionLocation}/>
          </Col>

          <Col xs={12} md ={6}>
            <Paper>
              <div className="details"></div>
            </Paper>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default App;
