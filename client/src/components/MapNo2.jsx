import React from 'react'
import GoogleMap from 'react-google-map'

class MapNo2 extends React.Component {

  componentDidMount() {
    const map2 = new google.maps.Map(this.refs.usaMap, {
      center: {lat: 39.832796, lng: -99.536133},
      zoom: 4
    });
  }

  render() {
    return(
      <div>
        <button>Discover American Whisky!</button>
        <div ref="usaMap"className="map">
        </div>
      </div>
      )
  }

}

export default MapNo2;