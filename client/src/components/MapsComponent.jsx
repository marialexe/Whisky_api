import React from 'react'
import MapNo1 from './MapNo1.jsx'
import MapNo2 from './MapNo2.jsx'
import MapNo3 from './MapNo3.jsx'
import MapNo4 from './MapNo4.jsx'

class MapsComponent extends React.Component {

  
  render() {
    return(
      <div id="component">
        <MapNo1/>
        <MapNo2/>
        <MapNo3/>
        <MapNo4/>
      </div>
      )
  }

}


export default MapsComponent;