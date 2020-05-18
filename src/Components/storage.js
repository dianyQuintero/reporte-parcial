import React from 'react';
import cache from '../assets/imgs/cache.gif';
import cache1 from '../assets/imgs/Cache1.PNG';
import cache2 from '../assets/imgs/Cache2.PNG';
import cache3 from '../assets/imgs/Cache3.PNG';
import set from '../assets/imgs/settings.PNG';
import sett from '../assets/imgs/settings2.PNG';




export default class Storage extends React.Component{
    render(){
        return(
            <div className="card  shadow h-100 py-2" id="storage">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col-12">
                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">Manejo de Storage y Caché</div>
                </div>
                </div>
                <div className="row no-gutters align-items-center">
                <div className="text-lg font-weight-bold text-primary mb-1">Storage</div></div>
                <iframe title="video1" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }} width="840" height="472" src="https://www.youtube.com/embed/j189c4OT-Qg" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                <br></br>

                <div className="row no-gutters align-items-center">
                
                <div className="col-6">
                <div className="text-lg font-weight-bold text-primary mb-1">Caching</div>
                <h5 align="justify">
                    Revisando VideoPlayerActivity.kt que es una de las funcionalidades más importantes de la aplicación,
                    Notamos que la estrategia de caching que utilizan es Shared Preferences. En el código se observa
                    que lo que principalmente guardan son las configuraciones como el brillo o el volumen, además 
                    también guardan información correspondiente al tiempo de reanudación del vídeo para poder retomarlo
                    en el minuto que se dejó en caso de salirse de la aplicación. Para el último caso que mencionamos 
                    también sucede que si el celular se apaga mientras se está reproduciendo un vídeo, al encenderlo e ingresar de nuevo
                    al video éste se reanudará en donde quedó antes de apagarse.
                </h5>
                </div>
                <div className="col-6">
                        <img src={cache} id="fastForwardApp" className="img-fluid" alt="versionesStyles"/>   
                </div>
                </div>
                <br></br>
                <div className="row no-gutters align-items-center">
                <div className="col-5">
                            <div className="card shadow h-100 py-2"  >
                                <div className="card-body">
                                <h6 align="center" >Definición Settings</h6>
                                <img style={{"display": "block", "margin-left": "auto", "margin-right": "auto", "width":358 +"px","height":38+ "px"}} src={set} id="fastForwardApp" className="img-fluid" alt="versionesStyles"/>   
                                <br></br>
                                <img style={{"display": "block", "margin-left": "auto", "margin-right": "auto", "width":281 +"px","height":51+ "px"}} src={sett} id="fastForwardApp" className="img-fluid" alt="versionesStyles"/>   
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-6">
                        <div className="card shadow h-100 py-2"  >
                                <div className="card-body">
                                <h6 align="center" >Operaciones get y put</h6>
                                <img style={{"display": "block", "margin-left": "auto", "margin-right": "auto", "width":403 +"px","height":47+ "px"}} src={cache1} id="fastForwardApp" className="img-fluid" alt="versionesStyles"/>   
                                <br></br>
                                <img style={{"display": "block", "margin-left": "auto", "margin-right": "auto", "width":368 +"px","height":157+ "px" }} src={cache3} id="fastForwardApp"  className="img-fluid" alt="versionesStyles"/>                                      
                                <br></br>
                                <img style={{"display": "block", "margin-left": "auto", "margin-right": "auto", "width":432 +"px","height":139+ "px"}} src={cache2} id="fastForwardApp" className="img-fluid" alt="versionesStyles"/>   

                                    </div>
                            </div>
                        </div>  
                    </div>
            </div>
        </div>
        )
    }
}