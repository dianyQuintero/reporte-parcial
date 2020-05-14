import React from 'react';



export default class Reporitorio extends React.Component{
    render(){
        return(
            <div className="card  shadow h-100 py-2" id="repo">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col-12">
                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">Repositorio</div>
                </div>
                <p>- Grafica de los lenguajes de programación utilizados y el cambio gradual de estos (en proceso)
                </p>
                <p>- Análisis de la gráfica
                </p>
                </div>
            </div>
        </div>
        )
    }
}