import React from 'react';



export default class Arquitectura extends React.Component{
    render(){
        return(
            <div className="card  shadow h-100 py-2" id="arquitectura">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col-12">
                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">Arquitectura</div>
                </div>                
                </div>
                <div className="text-lg font-weight-bold text-primary  mb-1">Arquitectura de la aplicación</div>
                <br></br>
                <div> 
                <iframe title="video" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }} width="840" height="472" src="https://www.youtube.com/embed/VGqh1npQAUE"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                </div>
                <br></br>
                <div className="text-lg font-weight-bold text-primary  mb-1">Patrones</div>
                <br></br>
                <div> 
                <br></br>
                <iframe title="video2" style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }} width="840" height="472" src="https://www.youtube.com/embed/ZmftKe6NVUw"
                 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                </div>
            </div>
        </div>
        )
    }
}