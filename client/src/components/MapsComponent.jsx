import React from 'react'

import MapNo1 from './MapNo1.jsx'
import MapNo2 from './MapNo2.jsx'

class MapsComponent extends React.Component {

  
  render() {
    return(
      // <div ref="map" style={mapStyle} ref="map">
      <div>
        <h2>Here there will be some maps!</h2>
        <MapNo1/>
        <MapNo2/>
      </div>
      )
  }

}


export default MapsComponent;