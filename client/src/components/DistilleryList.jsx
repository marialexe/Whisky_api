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
        </div>
        )
    })
    return(
      <div>
       
        {distilleriesArray}
        <Distillery/>
      </div>
      )
  }

}

export default DistilleryList;