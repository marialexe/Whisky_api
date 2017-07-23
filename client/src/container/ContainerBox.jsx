import React from 'react'

class ContainerBox extends React.Component {

  render() {
    return(
      <div className="whisky">
      <p>{this.props.title}</p>
      </div>
      )
  }
  
}

export default ContainerBox;