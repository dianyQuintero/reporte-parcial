import React from 'react';
import caso1 from '../assets/imgs/Caso1.gif';
import caso2 from '../assets/imgs/Caso2.gif';
import caso3 from '../assets/imgs/Caso3.gif';
import bateria from '../assets/imgs/bateria.jpg';




export default class Conectividad extends React.Component{
    render(){
        return(
            <div className="card  shadow h-100 py-2" id="conectividad">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col-12">
                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">Conectividad Eventual</div>
                </div>
                </div>
                <div className="row no-gutters align-items-center">
                    <h5 align="justify" > Realizamos 3 escenarios de conectividad para ver cómo los manejaba la applicacion en cada caso:
                    </h5>
                    <ul> 
                        <li>
                            <h5>El primer escenario muestra que si la aplicación
                                no cuenta con conectividad no se ve afectada la funcionalidad de 
                                reproducir videos que se almacenan localmente. 
                            </h5>
                        </li>
                        <li>
                            <h5>En el segundo escenario, teniendo acceso a internet intentamos ver un stream cuya URL no se encontraba
                                disponible (En el VLC de escritorio nos salió un video con una imagen
                                que decía que el contenido no estaba disponible en el país). 
                                La aplicación no reprodujo nada, sin embargo no informa al usuario
                                que problema se está presentando.
                            </h5>
                        </li>
                        <li>
                            <h5>Finalmente, probamos ver un stream cuya URL si se encontraba disponible  
                                (la probamos primero en el VLC de escritorio) sin tener conexión a internet.
                                La aplicación intentó reproducirla, sin embargo nos sacó. Se mostraba una
                                notificación de "Loading", sin embargo no se mostraba nada. Adicionalmente,
                                se mostró una alerta acerca del consumo de batería de la app.</h5>
                        </li>
                    </ul>
                </div>
                <div className="row no-gutters align-items-center">
                    <div className="col-3">
                        <div className="card py-2">
                            <div className="card-body">
                                <img src={caso1}  className="img-fluid" alt="versionesStyles"/>   
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card py-2">
                            <div className="card-body">
                                <img src={caso2}  className="img-fluid" alt="versionesStyles"/>                 
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card py-2">
                            <div className="card-body">
                                <img src={caso3}  className="img-fluid" alt="versionesStyles"/>                 
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card py-2">
                            <div className="card-body">                                
                                <img src={bateria}  style={ {height: 335+ 'px'}}  className="img-fluid" alt="versionesStyles"/>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}