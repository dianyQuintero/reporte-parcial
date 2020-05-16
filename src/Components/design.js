import React from 'react';
import '../styles/design.css';
import versionesStyles from '../assets/imgs/versionesStyles.png';
import darkPalette from '../assets/imgs/darkPalette.png';
import lightPalette from '../assets/imgs/lightPalette.png';
import botonLight from '../assets/imgs/BOTONL.jpg';
import botonDark from '../assets/imgs/BOTON.jpg';
import carpetasLight from '../assets/imgs/CarpetasLIGHT.jpg';
import carpetasDark from '../assets/imgs/CarpetasDARK.jpg';
import bottonNBLight from '../assets/imgs/img1Light.jpg';
import bottonNBDark from '../assets/imgs/img1Dark.jpg';
import appBarLight from '../assets/imgs/img2Light.jpg';
import appBarDark from '../assets/imgs/img2Dark.jpg';
import img1 from '../assets/imgs/img1.jpg';
import img2 from '../assets/imgs/img2.jpg';
import bloqueo from '../assets/imgs/bloqueo.gif';
import lengCorrecto from '../assets/imgs/correctleng.jpg';
import lengIncorrecto from '../assets/imgs/incorrectleng.PNG';
import fastForwardapp from '../assets/imgs/fastForwardapp.gif';
import fastForwardPC from '../assets/imgs/fastForwardPc.gif';
import volPC from '../assets/imgs/volumenPc.gif';
import volApp from '../assets/imgs/volumenapp.gif';
import pc from '../assets/imgs/vlcApp.jpg';
import app from '../assets/imgs/vlcPC.png';





export default class Design extends React.Component{

  render(){
    return(
        <div className="card  shadow h-100 py-2" id="design">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">UI / UX DESIGN</div>
                </div>
                <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
                </div>
                <div className="row no-gutters align-items-center">
                <div className="col-6">
                    <h5 align="justify">No todas las versiones de Android usan el mismo archivo de estilos, 
                        este archivo se le es asignado dependiendo del rango del nivel del API en el que se encuentre.
                        Por ejemplo a un dispositivo con API 26 se le aplicarian los estilos del archivo v23,
                        estos estilos se aplican a views. Además hay un archivo parent del que todos 
                        heredan los atributos del xml que aparece ahí. Más información &nbsp;
                        <a href="https://developer.android.com/guide/topics/ui/look-and-feel/themes#Versions">
                            aquí.
                        </a> </h5>
                        
                </div>
                <div className="col-6">
                    <img src={versionesStyles} className="rounded mx-auto d-block" alt="versionesStyles"/>               
                </div>
                </div>
                <div className="row no-gutters align-items-center">
                <h5 className="text font-weight-bold text-primary mb-1">Manejo de Colores</h5>
                <br></br>
                <h5 align="justify" >Se identificó que las dos paletas cuentan con colores muy parecidos y para lograr 
                    el cambio de tema se invierten en las vistas. Además se notó que en el tema light 
                    se presentan más errores de contraste, llegando incluso a un ratio de 1.96. 
                    Este problema se soluciona en gran medida utilizando el tema oscuro ya que solo tuvo un problema de contraste.</h5>
                </div>
                <div className="row no-gutters align-items-center">
                <div className="col-5">
                    <h5 className="text font-weight-bold text-primary mb-1">Tema Light</h5>
                    <div className="card py-2">
                        <div className="card-body">
                            <img src={lightPalette} className="img-fluid" alt="versionesStyles"/>               
                        </div>
                    </div>
                    <br></br>
                    <div className="card py-2">
                        <div className="card-body">
                            <img src={bottonNBLight} className="img-fluid" alt="versionesStyles"/>
                            <br></br>
                            <br></br>
                            <h6>Contrast ratio item actual: 2.57</h6>   
                            <h6>Contrast ratio item inactivo: 6.19</h6>            
                        </div>
                    </div>
                    <br></br>
                    <div className="card py-2">
                        <div className="card-body">
                            <img src={appBarLight} className="img-fluid" alt="versionesStyles"/> 
                            <br></br>
                            <br></br>
                            <h6>Contrast ratio item actual: 2.57</h6>
                            <h6>Contrast ratio item inactivo: 6.19</h6>
                        </div>
                    </div>
                    <br></br>
                    <div className="card py-2">
                        <div className="card-body">
                            <img src={carpetasLight} className="img-fluid" alt="versionesStyles"/>  
                            <br></br>
                            <br></br>   
                            <h6>Contrast ratio icono: 6.19</h6>
                            <h6>Contrast ratio texto 1: 21</h6>
                            <h6>Contrast ratio texto 2: 1.96</h6>
                        </div>
                    </div>
                    <br></br>
                    <div className="card py-2">
                        <div className="card-body">
                            <img src={botonLight} className="img-fluid" alt="versionesStyles"/>
                            <br></br>
                            <br></br>
                            <h6>Contrast ratio fondo-botón: 2.57</h6>
                            <h6 >Contrast ratio botón-icono: 2.46</h6>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-5">
                <br></br>
                    <h5 className="text font-weight-bold text-primary mb-1">Tema Dark</h5>
                    <div className="card py-2">
                        <div className="card-body">
                            <img src={darkPalette} className="img-fluid" alt="versionesStyles"/>               
                        </div>
                    </div>
                    <br></br>
                    <div className="card py-2">
                        <div className="card-body">
                            <img src={bottonNBDark} className="img-fluid" alt="versionesStyles"/>
                            <br></br>
                            <br></br> 
                            <h6>Contrast ratio item actual: 5.59</h6>
                            <h6>Contrast ratio item inactivo: 5.36</h6>
                        </div>
                    </div>
                    <br></br>
                    <div className="card py-2">
                        <div className="card-body">
                            <img src={appBarDark} className="img-fluid" alt="versionesStyles"/>
                            <br></br>
                            <br></br> 
                            <h6>Contrast ratio item actual: 8.19</h6>
                            <h6>Contrast ratio item inactivo: 10.7</h6>
                        </div>
                    </div>
                    <br></br>
                    <div className="card py-2">
                        <div className="card-body">
                            <img src={carpetasDark} className="img-fluid" alt="versionesStyles"/>    
                            <br></br>
                            <br></br> 
                            <h6>Contrast ratio icono: 9.55</h6>
                            <h6>Contrast ratio texto: 18.73</h6>
          
                        </div>
                    </div>
                    <br></br>
                    <div className="card py-2">
                        <div className="card-body">
                            <img src={botonDark} className="img-fluid" alt="versionesStyles"/>   
                            <br></br>
                            <br></br>     
                            <h6>Contrast ratio fondo-botón: 8.19</h6>
                            <h6>Contrast ratio botón-icono: 2.46</h6>
                        </div>
                    </div>
                </div>
                </div>
                <br></br>
                <div className="row no-gutters align-items-center">
                    <div className="col-5">
                        <h4 align="justify" >Se notó que los colores de la barra de herramientas mientras se están
                        reproduciendo vídeos son iguales en ambos temas y estos requieren un 
                        porcentaje de transparencia para poder lograr un contraste independientemente 
                        de los colores del vídeo.</h4>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-6">
                    <div className="row">
                    <div className="col-10">
                    <img src={img1} className="img-fluid" alt="versionesStyles"/>   
                    </div>
                    <div className="col-10">
                    <img src={img2} className="img-fluid" alt="versionesStyles"/>   
                    </div>
                    </div>
                    </div>
                </div>
                <div className="row no-gutters align-items-center">
                <h5 className="text font-weight-bold text-primary mb-1">Experiencia de Usuario</h5>
                <br></br>
                <h5 align="justify" >La aplicación cuenta con una buena distribución del espacio y 
                una interfaz intuitiva, sin embargo, encontramos algunos errores con las traducciones 
                ya que en algunos componentes se realizaron de forma parcial.  Como se puede apreciar 
                hay una inconsistencia entre los idiomas inglés y español, lo curioso es que 
                la inconsistencia solo se vio en uno de los celulares en el que la probamos.</h5>
                </div>
                <div className="row no-gutters align-items-center">
                <div className="col-6">
                    <img src={lengCorrecto} id="correcta" className="img-fluid" alt="versionesStyles"/>   
                    </div>
                    <div className="col-6">
                    <img src={lengIncorrecto} id="incorrecta" className="img-fluid" alt="versionesStyles"/>   
                    </div>
                </div>
                <br></br>
                <div className="card py-2">
                        <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <h5 align="justify" >Teniendo en cuenta que VLC se diseñó originalmente para ser usada 
                            en computadores de escritorio, consideramos importante comparar las diferencias de la 
                            experiencia de usuario en ambas plataformas. A continuación se realizan una comparaciones 
                            entre las plataformas Android y Windows.</h5>
                            </div>
                            <div className="row no-gutters align-items-center">
                            <div className="col-6">
                                <img src={pc}  className="img-fluid" alt="versionesStyles"/>   
                                </div>
                                <div className="col-6">
                                <img src={app}  className="img-fluid" alt="versionesStyles"/>   
                                </div>
                            </div>
                        </div>
                </div>
                
                <br></br>
                <div className="card py-2">
                <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col-6">
                    <div className="row no-gutters align-items-center">
                    <br></br>
                    <h5 align="justify" >Los controles de volumen son diferentes. En Windows se 
                    trata de una barra que se puede ajustar arrastrando el cursor del mouse y
                    este volumen puede llegar a niveles mayores al 100% con un máximo de 125%. 
                    En contraste, en Android se puede usar tanto los botones laterales del celular 
                    como el gesto de swipe up/down en la parte derecha de la pantalla (el gesto en la 
                    parte izquierda se utiliza para ajustar el brillo) para controlar el volumen e 
                    igualmente alcanza niveles mayores al 100%.</h5>
                    </div>
                    <br></br>
                    <img src={volPC}  id="volPc" className="img-fluid" alt="versionesStyles"/>   
                    </div>
                    <div className="col-6">
                    <img src={volApp}  id="volApp" className="img-fluid" alt="versionesStyles"/>   
                    </div>
                </div>
                </div>
                </div>
                <br></br>
                <div className="card py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                    <div className="col-6">
                        <div className="row no-gutters align-items-center">
                        <br></br>
                        <h5 align="justify" >En windows para adelantar el vídeo basta con mantener 
                            oprimido el botón “Fast forward” y cuando se da click sobre ese botón se redirige 
                            al siguiente video en la lista. En Android para adelantar el video 10 segundos se 
                            deben hacer dos taps rapidamente en la parte derecha del video y se añadirán 10 segundos 
                            por cada tap adicional. En cuanto a la funcionalidad de redirigir al siguiente video esta
                             no se muestra explicitamente en los botones principales. Este comportamiento es aplicable 
                             para el caso de retroceder y anterior video.</h5>
                        </div>
                        <br></br>
                        <img src={fastForwardPC}  id="fastForwardPC" className="img-fluid" alt="versionesStyles"/>   
                        </div>
                        <div className="col-6">
                        <img src={fastForwardapp} id="fastForwardApp" className="img-fluid" alt="versionesStyles"/>   
                        </div>
                    </div>
                </div>
                </div>
                <br></br>
                <div className="card py-2">
                <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col-6">
                        <div className="row no-gutters align-items-center">
                        <br></br>
                        <h5 align="justify" >Adicionalmente en Android existe la peculiaridad de poder
                         bloquear la rotación de la pantalla y las demás funciones de la barra de herramientas 
                         del dispositivo mientras se reproduce un video por cuestiones de comodidad. 
                         Esta funcionalidad no se ve explícitamente en la versión de Windows.</h5>
                        </div>
                    </div>
                        <div className="col-6">
                        <img src={bloqueo} id="fastForwardApp" className="img-fluid" alt="versionesStyles"/>   
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
  }

}