import React from 'react';
import video from '../assets/videos/video.mp4'
import historial from '../assets/videos/h.mp4'
import reproduccion from '../assets/videos/reproduccion.mp4'
import streaming from '../assets/videos/streaming.mp4'
import audios from '../assets/imgs/audios.jpg'
import browse from '../assets/imgs/browse.jpg'
import eq from '../assets/imgs/equalizer.jpg'
import gal from '../assets/imgs/galeria.jpg'
import options from '../assets/imgs/options.jpg'
import srt from '../assets/imgs/stream.jpg'

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
                <div className="row no-gutters align-items-center">
                <div className="text-lg font-weight-bold text-primary  mb-1">Top Features</div>
                </div>
                <div className = "row no-gutters align-items-center">
                            <div className="col-6">
                            <div className="card  py-2"  >
                                <div className="card-body">
                                <h6 align="center" >Reproducción de diversos formatos</h6>
                                <video  style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }} width="300" height="600" controls>
                                            <source src={video} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                            </video>
                                    </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="card py-2"  >
                                <div className="card-body">
                                <h6 align="center" >Opciones al reproducir videos</h6>
                                <video style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }} width="300" height="600" controls>
                                            <source src={reproduccion} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                            </video>                                    
                                    </div>
                            </div>
                        </div>  
                        <div className="col-6">
                        <div className="card  py-2"  >
                                <div className="card-body">
                                <h6 align="center" >Más opciones al reproducir</h6>
                                <img src={options} width="300" height="600" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   

                                    </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="card  py-2"  >
                                <div className="card-body">
                                <h6 align="center" >Galería de videos</h6>
                                <img src={gal} width="300" height="600" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   

                                    </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="card  py-2"  >
                                <div className="card-body">
                                <h6 align="center" >Ecualizador</h6>
                                <img src={eq} width="300" height="600" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   
                                    </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="card  py-2"  >
                                <div className="card-body">
                                <h6 align="center" >Historial de Reproducción</h6>
                                <video style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }} width="300" height="600" controls>
                                            <source src={historial} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                            </video> 
                                    </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="card  py-2"  >
                                <div className="card-body">
                                <h6 align="center" >Lista de Audios</h6>
                                <img src={audios} width="300" height="600" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   
                                    </div>
                            </div>
                        </div>
                        <div className="col-6">
                        <div className="card  py-2"  >
                                <div className="card-body">
                                <h6 align="center" >Explorador de Archivos</h6>
                                <img src={browse} width="300" height="600" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   
                                    </div>
                            </div>
                        </div>
                        <div className="col-12">
                        <div className="card  py-2"  >
                                <div className="card-body">
                                <h6 align="center" >Stream</h6>
                                <div className="row">
                                    <div className="col-6">
                                    <img src={srt} width="300" height="600" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   
                                    </div>
                                    <div className="col-6">
                                    <video style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }} width="300" height="600" controls>
                                            <source src={streaming} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                            </video>                                     </div>
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