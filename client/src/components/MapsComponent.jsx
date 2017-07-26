import React from 'react'
import MapItem from './MapItem.jsx'

class MapsComponent extends React.Component {

  
  render() {
    const countryArray = this.props.countries.map((country,index) => {
      return(
        <MapItem key={index} lat={country.lat} lng={country.long} zoom={country.zoom} countryName={country.name} countryId={country.id} distilleries={this.props.distilleries} handleCountrySelect={this.props.handleCountrySelect}/>
        )
     
    })
    
    return(
      <div id="component">
        {countryArray}
      </div>
      )
  }

}

export default MapsComponent;