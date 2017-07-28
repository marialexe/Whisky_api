import React from 'react'
import DistilleryList from './DistilleryList.jsx'

class Description extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state={
  //     distilleries=[],
  //     whiskys=[]
  //   }
  // }


  render() {
    return(
      <div id="description">
        <h2></h2>
        <DistilleryList countries={this.props.countries} list={this.props.distilleriesList} selectedCountryId={this.props.selectedCountryId}/>
      </div>
      )
  }
}

export default Description;