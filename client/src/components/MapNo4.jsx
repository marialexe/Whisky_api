import React from 'react'
import GoogleMap from 'react-google-map'

class MapNo4 extends React.Component {

  componentDidMount(){
    const map4 = new google.maps.Map(this.refs.irelandMap, {
      center: {lat: 53.303064, lng: -8.063965},
      zoom: 6
    });
  }

  render() {
    return(
      <div id="countryMap">
        <button>Discover Irish whiskey!</button>
        <div ref="irelandMap"className="map"></div>
      </div>
      )
  }
}

export default MapNo4;