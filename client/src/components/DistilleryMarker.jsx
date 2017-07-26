import React from 'react'

class DistilleryMarker extends React.Component {

  render() {
    return(
      <div className="marker">
        {this.props.text}
      </div>
      )
  }

}

export default DistilleryMarker;