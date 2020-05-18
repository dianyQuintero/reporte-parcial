import React from 'react';
import json from '../assets/files/data.json'
import CanvasJSReact from './canvasjs.react';
import lib from '../assets/imgs/libvlc.png';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var blanksJava=[];
var codeJava=[];
var filesJava=[];
var commentJava=[];
var blanksKotlin=[];
var codeKotlin=[];
var filesKotlin=[];
var commentKotlin=[];
var blanksC=[];
var codeC=[];
var filesC=[];
var commentC=[];
var blanksC_=[];
var codeC_=[];
var filesC_=[];
var commentC_=[];
var blanksC_header=[];
var codeC_header=[];
var filesC_header=[];
var commentC_header=[];
var procesado = false;

export default class Reporitorio extends React.Component{
      procesarJSON(){
        if(!procesado){
            json.Valores.forEach(value => {
                var codKotlin = 0;
                var codJava = 0;
                var codC = 0;
                var codC_ = 0;
                var codC_header = 0;
                var blancosKotlin = 0;
                var blancosJava = 0;
                var blancosC = 0;
                var blancosC_ = 0;
                var blancosC_header = 0;
                var archivosKotlin = 0;
                var archivosJava = 0;
                var archivosC = 0;
                var archivosC_ = 0;
                var  archivosC_header = 0;
                var  comKotlin = 0;
                var  comJava = 0;
                var  comC = 0;
                var  comC_ = 0;
                var  comC_header = 0;

                value.Registro[0].lineas.forEach(line =>{
                    if(line.language === "C/C++ Header"){
                        //Asigno valores
                        codC_header=line.code
                        blancosC_header = line.blank
                        archivosC_header= line.files
                        comC_header = line.comment
                    }
                    if(line.language === "Java"){
                        //Asigno valores
                        codJava=line.code
                        blancosJava = line.blank
                        archivosJava = line.files
                        comJava = line.comment
                    }
                    if(line.language === "C"){
                        //Asigno valores
                        codC = line.code
                        blancosC = line.blank
                        archivosC = line.files
                        comC = line.comment
                    }
                    if(line.language === "C++"){
                        //Asigno valores
                        codC_=line.code
                        blancosC_ = line.blank
                        archivosC_ = line.files
                        comC_ =line.comment
                    }
                    if(line.language === "Kotlin"){
                        //Asigno valores
                        codKotlin=line.code
                        blancosKotlin = line.blank
                        archivosKotlin = line.files
                        comKotlin = line.comment
                    }
                } )
                blanksKotlin.push({"y":blancosKotlin, "label": value.Registro[0].tag});
                filesKotlin.push({"y":archivosKotlin, "label": value.Registro[0].tag});
                codeKotlin.push({"y":codKotlin, "label": value.Registro[0].tag})
                commentKotlin.push({"y":comKotlin, "label": value.Registro[0].tag})

                blanksC_.push({"y":blancosC_, "label": value.Registro[0].tag});
                codeC_.push({"y":codC_, "label": value.Registro[0].tag});
                filesC_.push({"y":archivosC_, "label": value.Registro[0].tag});
                commentC_.push({"y":comC_, "label": value.Registro[0].tag})

                blanksC.push({"y":blancosC, "label": value.Registro[0].tag});
                codeC.push({"y":codC, "label": value.Registro[0].tag});
                filesC.push({"y":archivosC, "label": value.Registro[0].tag});
                commentC.push({"y":comC, "label": value.Registro[0].tag})

                blanksJava.push({"y":blancosJava, "label": value.Registro[0].tag});
                codeJava.push({"y":codJava, "label": value.Registro[0].tag});
                filesJava.push({"y":archivosJava, "label": value.Registro[0].tag});
                commentJava.push({"y":comJava, "label": value.Registro[0].tag})

                blanksC_header.push({"y":blancosC_header, "label": value.Registro[0].tag});
                codeC_header.push({"y":codC_header, "label": value.Registro[0].tag});
                filesC_header.push({"y":archivosC_header, "label": value.Registro[0].tag});
                commentC_header.push({"y":comC_header, "label": value.Registro[0].tag})

            })
        procesado =true;
        }
      }

    render(){
        this.procesarJSON()
        const optionsCode = {
            animationEnabled: true,
            theme: "light2",
            showInLegend:true,
            title:{
                text: "Líneas de Código por Lenguaje"
            },
            legend: {
                cursor: "pointer",
                itemclick: function (e) {
                    //console.log("legend click: " + e.dataPointIndex);
                    //console.log(e);
                    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    } else {
                        e.dataSeries.visible = true;
                    }
     
                    e.chart.render();
                }
            },
            axisY : {
                title: "Número de lineas",
                includeZero: true
            },
            axisX:{
                labelAngle: 50,
                labelFontSize: 10,
              },
            toolTip: {
                shared: true
            },
            data: [{
                type: "spline",
                name: "Java",
                showInLegend: true,
                dataPoints: codeJava
            },
            {
                type: "spline",
                name: "C",
                showInLegend: true,
                dataPoints: codeC
            },
            {
                type: "spline",
                name: "C++",
                showInLegend: true,
                dataPoints: codeC_
            },
            {
                type: "spline",
                name: "Kotlin",
                showInLegend: true,
                dataPoints: codeKotlin
            },
            {
                type: "spline",
                name: "C/C++ Header",
                showInLegend: true,
                dataPoints: codeC_header
            }
        ]
    }
            const optionsBlancos = {
                animationEnabled: true,	
                theme: "light2",
                showInLegend:true,
                title:{
                    text: "Líneas de Código en blanco por Lenguaje"
                },
                legend: {
                    cursor: "pointer",
                    itemclick: function (e) {
                        //console.log("legend click: " + e.dataPointIndex);
                        //console.log(e);
                        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                            e.dataSeries.visible = false;
                        } else {
                            e.dataSeries.visible = true;
                        }
         
                        e.chart.render();
                    }
                },
                axisY : {
                    title: "Número de lineas",
                    includeZero: true
                },
                axisX:{
                    labelAngle: 50,
                    labelFontSize: 10,
                  },
                toolTip: {
                    shared: true
                },
                data: [{
                    type: "spline",
                    name: "Java",
                    showInLegend: true,
                    dataPoints: blanksJava
                },
                {
                    type: "spline",
                    name: "C",
                    showInLegend: true,
                    dataPoints: blanksC
                },
                {
                    type: "spline",
                    name: "C++",
                    showInLegend: true,
                    dataPoints: blanksC_
                },
                {
                    type: "spline",
                    name: "Kotlin",
                    showInLegend: true,
                    dataPoints: blanksKotlin
                },
                {
                    type: "spline",
                    name: "C/C++ Header",
                    showInLegend: true,
                    dataPoints: blanksC_header
                }
            ]
        }
        const optionsFiles = {
            animationEnabled: true,
            theme: "light2",
            showInLegend:true,	
            title:{
                text: "Archivos por Lenguaje"
            },
            legend: {
                cursor: "pointer",
                itemclick: function (e) {
                    //console.log("legend click: " + e.dataPointIndex);
                    //console.log(e);
                    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    } else {
                        e.dataSeries.visible = true;
                    }
     
                    e.chart.render();
                }
            },
            axisY : {
                title: "Número de archivos",
                includeZero: true
            },
            axisX:{
                labelAngle: 50,
                labelFontSize: 10,
              },
            toolTip: {
                shared: true
            },
            data: [{
                type: "spline",
                name: "Java",
                showInLegend: true,
                dataPoints: filesJava
            },
            {
                type: "spline",
                name: "C",
                showInLegend: true,
                dataPoints: filesC
            },
            {
                type: "spline",
                name: "C++",
                showInLegend: true,
                dataPoints: filesC_
            },
            {
                type: "spline",
                name: "Kotlin",
                showInLegend: true,
                dataPoints: filesKotlin
            },
            {
                type: "spline",
                name: "C/C++ Header",
                showInLegend: true,
                dataPoints: filesC_header
            }
        ]
        }
        const optionsComments = {
            animationEnabled: true,
            theme: "light2",
            showInLegend:true,	
            title:{
                text: "Líneas de Código comentadas por Lenguaje"
            },
            legend: {
                cursor: "pointer",
                itemclick: function (e) {
                    //console.log("legend click: " + e.dataPointIndex);
                    //console.log(e);
                    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    } else {
                        e.dataSeries.visible = true;
                    }
     
                    e.chart.render();
                }
            },
            axisY : {
                title: "Número de archivos",
                includeZero: true
            },
            axisX:{
                labelAngle: 50,
                labelFontSize: 10,
              },
            toolTip: {
                shared: true
            },
            data: [{
                type: "spline",
                name: "Java",
                showInLegend: true,
                dataPoints: commentJava
            },
            {
                type: "spline",
                name: "C",
                showInLegend: true,
                dataPoints: commentC
            },
            {
                type: "spline",
                name: "C++",
                showInLegend: true,
                dataPoints: commentC_
            },
            {
                type: "spline",
                name: "Kotlin",
                showInLegend: true,
                dataPoints: commentKotlin
            },
            {
                type: "spline",
                name: "C/C++ Header",
                showInLegend: true,
                dataPoints: commentC_header
            }
        ]
        }


            
        return(
            <div className="card  shadow h-100 py-2" id="repo">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col-12">
                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">Repositorio y Análisis código estático</div>
                </div>
                </div>
                <div className="row no-gutters align-items-center">
                <CanvasJSChart options = {optionsCode} />
                </div>
                <br></br>
                <div className="row no-gutters align-items-center">
                <CanvasJSChart options = {optionsComments} />
                </div>
                <br></br>
                <div className="row no-gutters align-items-center">
                <CanvasJSChart options = {optionsBlancos} />
                </div>
                <br></br>
                <div className="row no-gutters align-items-center">
                <CanvasJSChart options = {optionsFiles} />
                </div>
                <br></br>
                <div className="row no-gutters align-items-center">
                    <h5 align="justify">Cuando revisamos los releases (Aproximadamente 205 al 17 de Mayo) 
                        nos dimos cuenta de que en un principio la aplicación estuvo desarrollada en Java,
                        sin embargo con el paso del tiempo se empezaron a añadir archivos Kotlin.
                        Así que nos pareció interesante mostrar ese cambio gradual que tuvo la aplicación.
                        Para eso se realizó un script que para cada release contara las líneas de código 
                        de los lenguajes que había, el numero de archivos y líneas en blanco y que guardara
                        la información en un archivo Json.
                     </h5>
                     <h5>El script se encuentra en el siguiente</h5>&nbsp;
                     <a href="https://github.com/JuanOrtega10/ScriptCLOCbyReleases" > <h5>enlace.</h5> </a>
                </div>
                <div className="text-lg font-weight-bold text-primary mb-1">Análisis:</div>
                <div className="row no-gutters align-items-center">
                <div className="col-6">
                <h5>Estructura del proyecto:</h5>
                <ul> 
                    <li>
                        <h5>Extension-api : Application extensions SDK</h5>
                    </li>
                    <li>
                        <h5>Application:código fuente de la aplicación organizado por módulos.</h5>
                    </li>
                    <li>
                        <h5>Libvlc: módulo gradle de LibVLC, el código fuente de VLC se clonará en vlc / a nivel raíz.</h5>
                    </li>
                    <li>
                        <h5>Medialibrary: módulo de gradle Medialibrary.</h5>
                    </li>
                    </ul>
                    </div>
                    <div className="col-6">
                    <iframe title="Estructura" width="366" height="668" src="https://www.youtube.com/embed/bYZ9fZpKD1s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-12">
                    <h5 align="justify" >Como se puede apreciar en la gráfica que compara el número de archivos, 
                    en los ultimos releases predominan los archivos Kotlin. Se puede ver el crecimiento de estos 
                    a partir de la versión 3 y en contraste se evidencia la disminucíon de los archivos Java, 
                    que en un punto estuvieron en 260 y ahora no hay más de 90. De manera similar ocurre con
                    los archivos C/C++ Header, los cuales tuvieron también una considerable disminución 
                    cuando se empezó a implementar Kotlin en el proyecto. Cabe recalcar que si se buscan archivos
                    Java en el explorador de archivos, se encontrarán alrededor de 800, sin embargo estos 
                    corresponden casi en su totalidad a archivos generados al buildear la aplicación. Nuestro script
                    no tiene en cuenta archivos de códico generado y por esto en la gráfica se observan las 
                    cantidades que mencioamos enteriormente.</h5>
                    
                    <h5 align="justify" > Después del anterior análisis revisamos cuáles archivos son los que no se 
                    cambiaron a Kotlin, notamos que los archivos Java se encuentran distribuidos 
                    en 4 carpetas, a continuación se mencionan cuales son y las razones por las que creemos que no
                    las convirtieron a Kotlin</h5> 
                    <ul>
                    <li>
                        <h5>Extension-api: Debido a que en esta carpeta se encuentra el SDK que utilizan otras aplicaciones
                            sus archivos deben estar en Java ya que si estuvieran en Kotlin se tendrían que convertir
                            obligatoriamente.
                        </h5>
                    </li>
                    <li>
                        <h5>Medialibrary: Acá no hay archivos .kt porque se trata de cosas a bajo nivel</h5>
                    </li>
                    <li>
                        <h5>LibVLC y la carpeta extensions dentro del codigo fuente de la app: Como LibVLC es la 
                            librería de Android que incorpora el motor VLC, que ofrece muchas funciones multimedia, 
                            creemos que todos sus archivos se encuentran en java porque debe ser muy demorado realizar
                            el cambio. Con los archivos dentro del codigo fuente pasa algo similar a lo que pasa
                            con los de Extension-api.</h5>
                    </li>
                    </ul>

                    <img src={lib}  style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  className="img-fluid" alt="versionesStyles"/>   

                    </div>
                    </div>
            </div>
        </div>
        )
    }
}