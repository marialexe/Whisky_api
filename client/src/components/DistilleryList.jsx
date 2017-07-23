import React from 'react'
import Distillery from './Distillery.jsx'

class DistilleryList extends React.Component {
  render(){
    return(
      <div>
        <h3>List of distilleries!</h3>
        <Distillery/>
      </div>
      )
  }

}

export default DistilleryList;