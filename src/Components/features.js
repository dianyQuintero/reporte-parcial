import React from 'react';



export default class Features extends React.Component{

  render(){
    return(
        <div className="card shadow h-100 py-2" id="features">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">Features</div>
                </div>
                <div className="col-auto">
                    <i className="fa fa-play fa-2x text-gray-300"></i>
                </div>
                </div>
                <br></br>
                <div className="row no-gutters align-items-center">
                <div className="col-6">
                <ul> 
                    <li>
                        <h5>Reproduce todos los archivos, en todos los formatos, como el clásico VLC.</h5>
                    </li>
                    <li>
                        <h5>Biblioteca multimedia de audio y video, con búsqueda completa e historial.</h5>
                    </li>
                    <li>
                        <h5>Soporte para flujos de red, incluidos HLS y Dash.</h5>
                    </li>
                    <li>
                        <h5>Soporte para NAS y unidades compartidas de navegación.</h5>
                    </li>
                    <li>
                        <h5>Admite la versión 2.2 de Android (plataforma 8) o posterior</h5>
                    </li>
                    <li>
                        <h5>Admite ARMv7, ARMv8 / AArch64, MIPS y x86.</h5>
                    </li>
                </ul>
                </div>
                <div className="col-6">
                <ul>
                    <li>
                        <h5>Soporta Android TV.</h5>
                    </li>
                    <li>
                        <h5>Soporta Chromebooks</h5>
                    </li>
                    <li>
                        <h5>Soporte de subtítulos, incrustado y externo, incluidos los subtítulos ASS y DVD.</h5>
                    </li>
                    <li>
                        <h5>Selección de pistas de audio múltiple o subtítulos.</h5>
                    </li>
                    <li>
                        <h5>Decodificación multi-core y hardware completo.</h5>
                    </li>
                    <li>
                        <h5>Gestos, control de auriculares.</h5>
                    </li>
                    <li>
                        <h5>Ecualizador de audio y filtros.</h5>
                    </li>
                    <li>
                        <h5>Soporta pantalla secundaria.</h5>
                    </li>
                    <li>
                        <h5>Admite video 360 y audio 3D.</h5>
                    </li>
                </ul>
                </div>
                </div>
            </div>
        </div>
    )
  }

}