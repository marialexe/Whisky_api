import React from 'react'
import MapsComponent from '../components/MapsComponent.jsx'
import Description from '../components/Description.jsx'

class ContainerBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      distilleriesPerCountry: [],
      countries: [],
      selectedCountryId: null
    }
  }

  componentDidMount(){
    const url ='http://localhost:5000/whiskyAPI/countries'
    const request = new XMLHttpRequest()
    request.open('GET', url);

    request.onload = () =>{
      const jsonString =  request.responseText
      const data = JSON.parse(jsonString)
      this.setState({countries: data})
    }

    request.send()
  }

  handleCountrySelect(countryId) {
    console.log(countryId)
    const url ='http://localhost:5000/whiskyAPI/countries/' + countryId +'/distilleries'
    const request = new XMLHttpRequest()
    request.open('GET', url);

    request.onload = () =>{
      const jsonString =  request.responseText
      const data = JSON.parse(jsonString)
      this.setState({distilleriesPerCountry: data,
        selectedCountryId: countryId})
    }

    request.send()
  }


  render() {

    console.log(this.state.countries)
    return(
      <div>
        <h1>{this.props.title}</h1>
          <div id="wrapper">
            <Description countries={this.state.countries} distilleriesList={this.state.distilleriesPerCountry} selectedCountryId={this.state.selectedCountryId}/>
            <MapsComponent countries={this.state.countries} distilleries={this.state.distilleriesPerCountry} handleCountrySelect={this.handleCountrySelect.bind(this)}/>
          </div>
      </div>
      )
  }
  
}

export default ContainerBox;