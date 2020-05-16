import React from 'react';



export default class Threads extends React.Component{
    render(){
        return(
            <div className="card  shadow h-100 py-2" id="threads">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                <div className="col-12">
                    <div className="text-lg font-weight-bold text-primary text-uppercase mb-1">Manejo de Threads</div>
                </div>
                </div>
                <br></br>
                <h5>Debido a la gran cantidad de archivos que conforman en proyecto, 
                    se nos dificultó revisar si se creaban threads en todos. Así que 
                    nos enfocamos en revisar los archivos de VideoViewModel.kt y VideoPlayerActivity.kt
                    que consideramos más relevantes ya que es donde se encuentran los principales 
                    features de la app:</h5>
                <br></br>
                
                        <iframe  style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }} width="560" height="315" src="https://www.youtube.com/embed/6LMcPG3iuHs" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <br></br>


                        <iframe style={{"display": "block", "margin-left": "auto", "margin-right": "auto" }}  width="560" height="315" src="https://www.youtube.com/embed/y1RQkd5rHOo" frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        )
    }
}