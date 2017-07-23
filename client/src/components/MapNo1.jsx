import React from 'react'
import GoogleMap from "react-google-map"
// import GoogleMapLoader from "react-google-maps-loader"
class MapNo1 extends React.Component {

  componentDidMount() {
    const map1 = new google.maps.Map(this.refs.map, {
      center: {lat: 57.194490, lng: -3.823812},
      // 56.872348, -4.323766
      // scrollwheel: false,
      zoom: 6
    });
  }

  render() {
    return(
      // <div ref="map" style={mapStyle} ref="map">
      <div ref="map" style={{width: 300, height: 300, border: '1px solid black'}} >
        <h3>Map No.1!</h3>
      </div>
      )
  }

}

// MapNo1.propTypes ={
//   intital.position: React.PropTypes.object.isRequired;
// };

export default MapNo1;