import React from 'react'
import Marker from 'google-maps-react'

class DistilleryMarker extends React.Component {

  render() {
    return(
      <div className="marker">
        {this.props.text}
      </div>
      )
    // this.marker = new google.maps.Marker(pref);
  }

}

export default DistilleryMarker;