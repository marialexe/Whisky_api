import React from 'react'
import MapsComponent from '../components/MapsComponent.jsx'
import Description from '../components/Description.jsx'

class ContainerBox extends React.Component {

  render() {
    return(
      <div className="whisky">
      <h1>{this.props.title}</h1>
      <MapsComponent/>
      <Description/>
      </div>
      )
  }
  
}

export default ContainerBox;