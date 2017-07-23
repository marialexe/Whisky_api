//
import React from 'react'
import ReactDOM from 'react-dom'
import ContainerBox from './container/ContainerBox.jsx'

window.onload = function(){
  //createElement("element to create", "element children", "element content")
  // const header = React.createElement('h1', null, 'Hello World');
  //const header =<h1>Hello again World!</h1>;
  const header = <ContainerBox title="Whisky Experience"/>
  const appDiv = document.getElementById('app');

  ReactDOM.render(header,appDiv)
};
