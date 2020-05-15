import React from 'react';
import json from '../assets/files/data.json'
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var blanksJava=[];
var codeJava=[];
var filesJava=[];
var blanksKotlin=[];
var codeKotlin=[];
var filesKotlin=[];
var blanksC=[];
var codeC=[];
var filesC=[];
var blanksC_=[];
var codeC_=[];
var filesC_=[];
var blanksC_header=[];
var codeC_header=[];
var filesC_header=[];
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
                var archivosC_header = 0;

                value.Registro[0].lineas.forEach(line =>{
                    if(line.language === "C/C++ Header"){
                        //Asigno valores
                        codC_header=line.code
                        blancosC_header = line.blank
                        archivosC_header= line.files
                    }
                    if(line.language === "Java"){
                        //Asigno valores
                        codJava=line.code
                        blancosJava = line.blank
                        archivosJava = line.files
                    }
                    if(line.language === "C"){
                        //Asigno valores
                        codC = line.code
                        blancosC = line.blank
                        archivosC = line.files
                    }
                    if(line.language === "C++"){
                        //Asigno valores
                        codC_=line.code
                        blancosC_ = line.blank
                        archivosC_ = line.files
                    }
                    if(line.language === "Kotlin"){
                        //Asigno valores
                        codKotlin=line.code
                        blancosKotlin = line.blank
                        archivosKotlin = line.files
                    }
                } )
                blanksKotlin.push({"y":blancosKotlin, "label": value.Registro[0].tag});
                filesKotlin.push({"y":archivosKotlin, "label": value.Registro[0].tag});
                codeKotlin.push({"y":codKotlin, "label": value.Registro[0].tag})
                blanksC_.push({"y":blancosC_, "label": value.Registro[0].tag});
                codeC_.push({"y":codC_, "label": value.Registro[0].tag});
                filesC_.push({"y":archivosC_, "label": value.Registro[0].tag});
                blanksC.push({"y":blancosC, "label": value.Registro[0].tag});
                codeC.push({"y":codC, "label": value.Registro[0].tag});
                filesC.push({"y":archivosC, "label": value.Registro[0].tag});
                blanksJava.push({"y":blancosJava, "label": value.Registro[0].tag});
                codeJava.push({"y":codJava, "label": value.Registro[0].tag});
                filesJava.push({"y":archivosJava, "label": value.Registro[0].tag});
                blanksC_header.push({"y":blancosC_header, "label": value.Registro[0].tag});
                codeC_header.push({"y":codC_header, "label": value.Registro[0].tag});
                filesC_header.push({"y":archivosC_header, "label": value.Registro[0].tag});
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
                <CanvasJSChart options = {optionsBlancos} />
                </div>
                <br></br>
                <div className="row no-gutters align-items-center">
                <CanvasJSChart options = {optionsFiles} />
                </div>
                <br></br>
                <div className="row no-gutters align-items-center">
                    <h5>Cuando revisamos los releases (Aproximadamente 202 al 13 de Mayo) 
                        nos dimos cuenta de que en un principio la aplicación estuvo desarrollada en Java,
                        sin embargo con el paso del tiempo se empezaron a añadir archivos Kotlin.
                        Así que nos pareció interesante mostrar ese cambio gradual que tuvo la aplicación.
                        Para eso se realizó un script que para cada release contara las líneas de código 
                        de los lenguajes que había, el numero de archivos y líneas en blanco y que guardara
                        la información en un archivo Json. El script lo corrimos el 13 de Mayo y obtuvimos 
                        los datos necesarios para realizar las gráficas que se pueden comparar por lenguajes.
                     </h5>
                     <h5>El script se encuentra en el siguiente</h5>&nbsp;
                     <a href="#" > <h5>enlace.</h5> </a>
                </div>
                <div className="text-lg font-weight-bold text-primary mb-1">Análisis:</div>
                <br></br>
                <div className="row no-gutters align-items-center">
                <div className="col-12">
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
                    <h5 align="justify" >Como se puede apreciar en la gráfica que compara el número de archivos, 
                    en los ultimos releases predominan los archivos Kotlin. Se puede ver el crecimiento de estos 
                    a partir de la versión 3 en contraste se evidencia la disminucín de los archivos Java, 
                    que en un punto estuvieron en 260 y ahora no hay más de 90. Revisamos cuáles archivos son 
                    los que no se cambiaron a Kotlin, notamos que los archivos Java se encuentran distribuidos 
                    en su mayoría en las carpetas de Extension-api y Medialibrary, dentro del código fuente de 
                    la app solo existen 4 archivos correspondientes a extensiones.(JUSTIFICAR ESO). 
                    Adicionalmente, en las 3 gráficas se observa que los archivos C/C++ Header tuvieron
                    una considerable disminucióon también cuando se empezó a implementar Kotlin en el proyecto.</h5>
                    </div>
                    </div>
            </div>
        </div>
        )
    }
}