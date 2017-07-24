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
      <div id="component">
        <h2>Description section</h2>
        <DistilleryList/>
      </div>
      )
  }
}

export default Description;