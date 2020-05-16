import React from 'react';
import '../styles/navbar.css'

export default class Navbar extends React.Component{
    render(){
        return(
          <div id="wrapper">
              <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion fixed-top" id="accordionSidebar"  
>
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#descripcion">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Reporte VLC- Android</div>
                </a>
                <hr className="sidebar-divider my-0"/>
                <li className="nav-item  ">
                    <a className="nav-link" href="#features">
                        <i className="fa fa-play"></i>
                        <span>Features</span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#design">
                        <i className="fa fa-eye"></i>
                        <span>UI / UX Design </span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#repo">
                        <i className="fa fa-list"></i>
                        <span>Repositorio y Análisis código estático </span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#conectividad">
                        <i className="fa fa-plug"></i>
                        <span>Conectividad Eventual </span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#threads">
                        <i className="fa fa-tasks"></i>
                        <span>Manejo de threads </span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#performance">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Performance</span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#storage">
                        <i className="fa fa-database"></i>
                        <span>Storage y Manejo de Caché  </span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#seguridad">
                        <i className="fa fa-lock"></i>
                        <span>Seguridad</span></a>
                    </li>
                     </ul>
                     </div>
        )
      }
}