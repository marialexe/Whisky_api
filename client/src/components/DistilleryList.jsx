import React from 'react'
import Distillery from './Distillery.jsx'

class DistilleryList extends React.Component {

  render(){

    if (this.props.selectedCountryId !==null) {
      const countryObject = this.props.countries.filter((country) => {
        return country.id === this.props.selectedCountryId
      })
    }

    // console.log('countryObject', countryObject[0])
    const distilleriesArray = this.props.list.map((distillery,index) => {
      return(
        <div key={index}>
         
          <p>{distillery.name}</p>
          <p>{distillery.description}</p>
        </div>
        )
    })
    return(
      <div>
       
        {distilleriesArray}
        <Distillery countries={this.props.countries} list={this.props.distilleriesList} selectedCountryId={this.props.selectedCountryId}/>
      </div>
      )
  }

}

export default DistilleryList;