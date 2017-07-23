import React from 'react'
import GoogleMap from 'react-google-map'

class MapNo3 extends React.Component {

  componentDidMount(){
    const map3 = new google.maps.Map(this.refs.canadaMap, {
      center: {lat: 62.052503, lng: -107.490234},
      zoom: 3
    });
  }

  render(){
    return(
      <div>
      <button>Discover Canadian Whiskey</button>
      <div ref="canadaMap" className="map"></div>
      </div>)
  }

}

export default MapNo3;