import React from 'react';
import './App.css';
import Navbar from './Components/navbar.js';
import Descipcion from './Components/descripcion.js';
import Features from './Components/features.js';
import Desingn from './Components/design.js';
import Repositorio from './Components/repositorio.js';
import Conectividad from './Components/conectividad.js';
import Threads from './Components/threads.js';
import Performance from './Components/performance.js';
import Storage from './Components/storage.js';
import Cache from './Components/cache.js';
import Seguridad from './Components/seguridad.js';


export default class App extends React.Component{

  render(){
    return(
      <div className="row">
        <div className="col-3">
          <Navbar></Navbar>
        </div>
        
        <div className="col-9 d-flex flex-column">
          <br></br>
          <Descipcion/> 
          <br></br>
          <Features/>
          <br></br>  
          <Desingn/>
          <br></br>  
          <Repositorio/>
          <br></br>  
          <Conectividad/>
          <br></br>
          <Threads/>
          <br></br>
          <Performance/>
          <br></br>
          <Storage/>
          <br></br>
          <Cache/>
          <br></br>
          <Seguridad/>
          <br></br>
        </div>
      </div>
    )
  }

}

