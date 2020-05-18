import React from 'react';
import over1 from '../assets/imgs/Over (1).jpg'
import over2 from '../assets/imgs/Over (2).jpg'
import over3 from '../assets/imgs/Over (3).jpg'
import over4 from '../assets/imgs/Over (4).jpg'
import over5 from '../assets/imgs/Over (5).jpg'
import over6 from '../assets/imgs/Over (6).jpg'




export default class Performance extends React.Component{
    render(){
        return(
            <div className="card  shadow h-100 py-2" id="performance">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col-12">
                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">Performance</div>
                </div>
                </div>
                <br></br>
                <div className="text-lg font-weight-bold text-primary  mb-1">Profiling</div>
                <br></br>
                <div> 
                <iframe title="video" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }} width="840" height="472" src="https://www.youtube.com/embed/4NJYC3Vs9yI"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                </div>
                <br></br>
                <div className="text-lg font-weight-bold text-primary  mb-1">Análisis de código</div>
                <br></br>
                <div> 
                <br></br>
                <iframe title="video2" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }} width="840" height="472" src="https://www.youtube.com/embed/Vr_pcWLIoAE"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                </div>
                <br></br>
                <div className="row no-gutters align-items-center">
                        <div className="card py-2">
                         <div className="card-body">
                        <div className="row no-gutters align-items-center">
                        <div className="col-12">
                            <div className="text-lg font-weight-bold text-primary mb-1">Mico-optimizaciones</div>
                            
                        </div>                
                        </div>
                        <div className="row">
                        <div className="col-12">
                            <ul>
                                <li>
                                    <h5 align="justify" > Se utiliza en repetidas ocasiones FindViewById() 
                                    (23 veces en una de las clases principales, VideoPlayerActivity.kt), lo cual
                                    puede afectar negativamente el performance de aplicación. Sería recomendable 
                                    no hacer tanto uso de éste método, una posible solución es usar binding.
                                    </h5>
                                </li>
                                <li>
                                    <h5 align="justify" > Al realizar un GPU overdraw descubrimos que hay problemas con 
                                    la barra de navegación inferior y con el fragmento en que se muestran todos videos
                                    guardados localmente. Esto puede deberse a que no se están usando componentes con el 
                                    fondo transparente. 
                                    </h5>
                                </li>
                            </ul>
                            </div>
                            <div className="col-12">
                            <div className="card  shadow h-100  py-2"  >
                                <div className="card-body">
                                <div className="row">
                                    <div className="col-4">
                                    <img src={over1} width="300" height="600" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   
                                    </div>
                                    <div className="col-4">
                                    <img src={over2} width="300" height="600" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   
                                   </div>
                                   <div className="col-4">
                                    <img src={over3} width="300" height="600" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   
                                   </div>
                                </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="card  shadow h-100  py-2"  >
                                <div className="card-body">
                                <div className="row">
                                    <div className="col-4">
                                    <img src={over4} width="300" height="600" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   
                                    </div>
                                    <div className="col-4">
                                    <img src={over5} width="300" height="600" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   
                                   </div>
                                   <div className="col-4">
                                    <img src={over6} width="300" height="600" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   
                                   </div>
                                </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                </div>
                </div>
            </div>
        </div>
        )
    }
}