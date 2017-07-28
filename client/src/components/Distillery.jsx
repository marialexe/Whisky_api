import React from 'react'
import WhiskyList from './WhiskyList.jsx'

class Distillery extends React.Component {
  render(){
    return(
      <div id="distillery">
        <h4></h4>
        <WhiskyList/>
      </div>
      )
  }
}

export default Distillery;