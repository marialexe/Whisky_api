import React from 'react'
import GoogleMap from "react-google-map"
// import GoogleMapLoader from "react-google-maps-loader"
class MapNo1 extends React.Component {

  componentDidMount() {
    const map1 = new google.maps.Map(this.refs.scotlandMap, {
      center: {lat: 57.194490, lng: -3.823812},
      // scrollwheel: false,
      zoom: 6
    });
  }

  render() {
    return(
      <div>
        <button>Discover Scottish Whisky!</button>
        <div ref="scotlandMap" style={{width: 300, height: 300, border: '1px solid black'}} >
        </div>
      </div>
      )
  }

}

// MapNo1.propTypes ={
//   intital.position: React.PropTypes.object.isRequired;
// };

export default MapNo1;