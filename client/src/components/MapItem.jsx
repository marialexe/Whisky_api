import React from 'react'
import GoogleMap from 'google-map-react';

class MapComponent extends React.Component {
 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="countryMap" id={this.props.countryName}>
        <div className="overlay"></div>
        <button>Discover Scottish Whisky!</button>
        <div className="map">
          <GoogleMap center={this.props.latlng} zoom={this.props.zoom}></GoogleMap>
        </div>
       </div>
    );
  }
}

export default MapComponent;