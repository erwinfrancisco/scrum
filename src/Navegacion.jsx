import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navegacion() {
  return (
    <React.Fragment>
    <div class="barra-navegacion">
      <div class="contenedor-logo">
        <img class="logo-navbar" src={'../public/scrum.png'} />
      </div>

      <div class="contenedor-titulos">
        <h1 class="titulo-navbar">Sistema de Seguimiento a Proyectos con Scrum + React</h1>
      
        <h2 class="subtitulo-navbar">Unidad 1. Actividad integradora. Sprint, el corazón de SCRUM</h2>
        <h3>Alumno: Erwin Francisco Flores Martínez</h3>
      </div>
    </div>
      
    </React.Fragment>

  )
}

export { Navegacion };