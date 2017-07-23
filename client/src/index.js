//
import React from 'react'
import ReactDOM from 'react-dom'

window.onload = function(){
  //createElement("element to create", "element children", "element content")
  // const header = React.createElement('h1', null, 'Hello World');
  const header =<h1>Hello again World!</h1>;
  const appDiv = document.getElementById('app');

  ReactDOM.render(header, appDiv)
};
