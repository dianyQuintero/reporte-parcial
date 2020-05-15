import React from 'react';
import logo from '../assets/imgs/Logo.png'



export default class Descripcion extends React.Component{

  render(){
    return(
        <div className="card  shadow h-100 py-2" id="descripcion">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col-9">
                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1" >Descripción</div>
                    <h5 align="justify">
                        El reproductor multimedia VLC es un reproductor multimedia multiplataforma gratuito 
                        y de código abierto que reproduce la mayoría de los archivos multimedia, así como discos, 
                        dispositivos y protocolos de transmisión de red.
                    </h5>
                    <h5 align="justify">
                        VLC para Android puede reproducir cualquier archivo de video y audio, así como transmisiones de red, 
                        recursos compartidos y unidades de red e ISO de DVD, como la versión de escritorio de VLC.
                        VLC para Android es un reproductor de audio completo, con una base de datos completa, un ecualizador 
                        y filtros, que reproduce todos los formatos de audio extraños.
                    </h5>
                </div>
                <div className="col-3">
                    <img src={logo}  className="img-fluid" alt="versionesStyles"/>                 
                </div>
                </div>
            </div>
        </div>
    )
  }

}