import React from 'react'
import WhiskyList from './WhiskyList.jsx'

class Distillery extends React.Component {
  render(){
    return(
      <div id="distillery">
        <h4>Distillery details can be found here!</h4>
        <WhiskyList/>
      </div>
      )
  }
}

export default Distillery;