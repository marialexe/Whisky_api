import React from 'react'
import MapItem from './MapItem.jsx'

class MapsComponent extends React.Component {

  
  render() {
    return(
      <div id="component">
        <MapItem latlng={{lat: 57.194490, lng: -3.823812}} zoom={6} countryName="scotland"/>
        <MapItem latlng={{lat: 39.832796, lng: -99.536133}} zoom={4} countryName="usa"/>
        <MapItem latlng={{lat: 62.052503, lng: -107.490234}} zoom={3} countryName="canada"/>
        <MapItem latlng={{lat: 53.303064, lng: -8.063965}} zoom={6} countryName="ireland"/>
        <MapItem latlng={{lat: 36.878694, lng: 138.126801}} zoom={5} countryName="japan"/>
        <MapItem latlng={{lat: 20.593684, lng: 78.96288}} zoom={5} countryName="india"/>

      </div>
      )
  }

}

export default MapsComponent;