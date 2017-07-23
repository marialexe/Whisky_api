import React from 'react'

import MapNo1 from './MapNo1.jsx'

class MapsComponent extends React.Component {

  
  render() {
    return(
      // <div ref="map" style={mapStyle} ref="map">
      <div>
        <h2>Here there will be some maps!</h2>
        <MapNo1/>
      </div>
      )
  }

}


export default MapsComponent;