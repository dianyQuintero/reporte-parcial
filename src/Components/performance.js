import React from 'react';



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
                        <div className="card  shadow h-100 py-2">
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
                                    <h5 align="justify" > Encontramos que se hace bsatente uso de los findViewById(),
                                    en una de las clases principales VideoPlayerActivity.kt se repite 23 veces y teniendo
                                    en cuenta lo que vimos en clase recomendaríamos que se cambiaran por 
                                    </h5>
                                </li>
                            </ul>
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