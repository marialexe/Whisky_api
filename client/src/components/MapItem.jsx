import React from 'react'
import GoogleMap from 'google-map-react';
import DistilleryMarker from './DistilleryMarker.jsx'

class MapItem extends React.Component {
 
  constructor(props) {
    super(props);
  }

  showDetails() {
    this.props.handleCountrySelect(this.props.countryId)
  }

  render() {

    // is this.props.countryId === this.props.distilleries[0].country_id
     
      if ((this.props.distilleries.length > 0) && (this.props.countryId === this.props.distilleries[0].country_id)) {

        const markersArray = this.props.distilleries.map((distillery,index) => {
          return <DistilleryMarker key={index} lat={distillery.lat} lng={distillery.long} text={distillery.name}></DistilleryMarker>;
        })
        console.log("distilleries", markersArray)
        return (
          <div className="countryMap" >
            <div className="overlay" id={this.props.countryName}>
        
            </div>
            <button onClick={this.showDetails.bind(this)}>Discover Scottish Whisky!</button>
            <div className="map">
              <GoogleMap center={{lat: this.props.lat, lng: this.props.lng}} zoom={this.props.zoom} >   
                  {markersArray}
              </GoogleMap>
            </div>
           </div>
        )   
      } else 
    {  
      return (
        <div className="countryMap" >
          <div className="overlay" id={this.props.countryName}>
   
          </div>
          <button onClick={this.showDetails.bind(this)}>Discover Scottish Whisky!</button>
          <div className="map">
            <GoogleMap center={{lat: this.props.lat, lng: this.props.lng}} zoom={this.props.zoom} >   
            </GoogleMap>
          </div>
         </div>
      );
    }
  }
}

export default MapItem;

         
