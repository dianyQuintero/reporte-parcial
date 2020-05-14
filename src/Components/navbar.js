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
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Features</span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#design">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>UI / UX Design </span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#repo">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Repositorio </span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#conectividad">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Conectividad Eventual </span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#codigo">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Análisis código estático </span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#threads">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Manejo de threads </span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#performance">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Performance</span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#storage">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Storage y Manejo de Caché  </span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#permisos">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Permisos</span></a>
                    </li>
                <li className="nav-item  ">
                    <a className="nav-link" href="#seguridad">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Seguridad</span></a>
                    </li>
                     </ul>
                     </div>
        )
      }
}