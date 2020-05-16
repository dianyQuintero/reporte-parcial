import React from 'react';



export default class Storage extends React.Component{
    render(){
        return(
            <div className="card  shadow h-100 py-2" id="storage">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col-12">
                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">Manejo de Storage y Caché</div>
                </div>
                </div>
                <div className="row no-gutters align-items-center">
                <div className="text-lg font-weight-bold text-primary mb-1">Storage</div></div>
                <iframe title="video1" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }} width="840" height="472" src="https://www.youtube.com/embed/j189c4OT-Qg" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>
        </div>
        )
    }
}