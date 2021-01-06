import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list';
import Marker from './marker';

import flats from '../../data/flats';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  center = () => {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  handleClick = (event) => {
    // console.log(event.target.id);
    this.setState({ selectedFlat: flats[event.target.id] });
  };

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} selectedFlat={this.state.selectedFlat} handleClick={this.handleClick} />
        <div className="map-container">
          {
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={15}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
          }
        </div>
      </div>
    )
  }
};

export default App;
