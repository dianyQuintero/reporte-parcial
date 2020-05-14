import React from 'react';
import './App.css';
import Navbar from './Components/navbar.js';
import Descipcion from './Components/descripcion.js';
import Features from './Components/features.js';
import Desingn from './Components/design.js';


export default class App extends React.Component{

  render(){
    return(
      <div className="row">
        <Navbar></Navbar>
        <div className="col-10 d-flex flex-column">
          <br></br>
          <Descipcion></Descipcion> 
          <br></br>
          <Features></Features>
          <br></br>  
          <Desingn></Desingn>
          <br></br>  
        </div>
      </div>
    )
  }

}

