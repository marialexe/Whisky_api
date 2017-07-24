import React from 'react'
import MapsComponent from '../components/MapsComponent.jsx'
import Description from '../components/Description.jsx'

class ContainerBox extends React.Component {

  // this.state = {
  //   data: 
  // }

  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
          <div id="wrapper">
            <Description/>
            <MapsComponent/>
          </div>
      </div>
      )
  }
  
}

export default ContainerBox;