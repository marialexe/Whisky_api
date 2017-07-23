import React from 'react'
import GoogleMap from 'react-google-map'

class MapNo2 extends React.Component {

  componentDidMount() {
    const map2 = new google.maps.Map(this.refs.usaMap, {
      center: {lat: 39.832796, lng: -99.536133},
      // 40.828359, -102.744141 41.093842, -100.898438 39.832796, -99.536133
      // scrollwheel: false,
      zoom: 4
    });
  }

  render() {
    return(
      <div>
        <button>Discover American Whisky!</button>
        <div ref="usaMap"style={{height:300, width:300, border: '1px solid black'}}>
        </div>
      </div>
      )
  }

}

export default MapNo2;