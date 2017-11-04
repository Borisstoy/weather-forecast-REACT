import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityNameKey = cityData.city.name;
    // to celcius
    const cityTemps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const cityPressure = cityData.list.map(weather => weather.main.pressure);
    const cityHumidity = cityData.list.map(weather => weather.main.humidity);

    // const cityLon = cityData.city.coord.lon;
    // const cityLat = cityData.city.coord.lat;
    // ES6 way:
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={cityNameKey}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={cityTemps} color="orange" units="C"/></td>
        <td><Chart data={cityPressure} color="green" units="hPa"/></td>
        <td><Chart data={cityHumidity} color="grey" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
