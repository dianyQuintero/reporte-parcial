import React from 'react';
import permiso1 from '../assets/imgs/permiso1.jpg';
import permiso2 from '../assets/imgs/permiso2.jpg';



export default class Permisos extends React.Component{
    render(){
        return(
            <div className="card  shadow h-100 py-2" id="permisos">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col-12">
                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">Permisos</div>
                </div>
                <div className="row no-gutters align-items-center">
                <br></br>
                    <h5 align="justify" >Con respecto a los permisos de la aplicación, 
                    en la información de la aplicación en la PlayStore se muestra que
                    VLC para Android necesita acceso a esas categorías:
                    </h5>
                </div>
                <div className="row no-gutters align-items-center">
                <div className="col-6">
                <ul> 
                    <li>
                        <h5>"Fotos / Medios / Archivos" para leer todos sus archivos multimedia.</h5>
                    </li>
                    <li>
                        <h5> "Almacenamiento" para leer todos sus archivos multimedia en tarjetas SD.</h5>
                    </li>
                    <li>
                        <h5>"Otro" para verificar las conexiones de red, cambiar el volumen, 
                            configurar el tono de llamada, ejecutar en Android TV y mostrar la vista emergente, ver más abajo para más detalles.</h5>
                    </li>
                    <div className="text-lg font-weight-bold text-primary mb-1">Detalles de los Permisos</div>
                
                    <li>
                        <h5> Necesita "leer el contenido de su almacenamiento USB" para 
                            poder leer sus archivos multimedia en él.</h5>
                    </li>
                    <li>
                        <h5>Necesita "modificar o eliminar el contenido de su almacenamiento USB", 
                            para permitir la eliminación de archivos y almacenar subtítulos.</h5>
                    </li>
                    <li>
                        <h5>Necesita "acceso completo a la red" para abrir la red y las transmisiones de Internet.</h5>
                    </li>
                    <li>
                        <h5>Necesita "evitar que el teléfono duerma" para evitar que su teléfono se bloquee mientras mira un video.</h5>
                    </li>
                    <li>
                        <h5>Necesita "cambiar la configuración de audio" para cambiar el volumen de audio.</h5>
                    </li>
                    <li>
                        <h5>Necesita "modificar la configuración del sistema" para permitirle cambiar su tono de llamada de audio.</h5>
                    </li>
                    <li>
                        <h5>Necesita "ver las conexiones de red" 
                            para controlar si el dispositivo está conectado o no.</h5>
                    </li>
                </ul>
                </div>
                <div className="col-6">
                <ul>
                    <li>
                        <h5>Necesita "dibujar sobre otras aplicaciones" 
                            para iniciar el widget personalizado de imagen en imagen.</h5>
                    </li>
                    <li>
                        <h5>Necesita "vibración de control" para dar retroalimentación sobre los controles.</h5>
                    </li>
                    <li>
                        <h5>Necesita "ejecutarse al inicio" para establecer recomendaciones 
                            en la pantalla de inicio de Android TV,
                             solo se usa en dispositivos Android TV.</h5>
                    </li>
                    <li>
                        <h5>Necesita "micrófono" para proporcionar búsqueda por voz en dispositivos Android TV, 
                            solo se solicita en dispositivos Android TV.</h5>
                    </li>
                </ul>
                <div className="card py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col-6">
                                    <img src={permiso1}  className="img-fluid" alt="versionesStyles"/>   
                                </div>
                                <div className="col-6">
                                     <img src={permiso2}  className="img-fluid" alt="versionesStyles"/>                 
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