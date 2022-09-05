import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tabs() {
  return (
    <React.Fragment>
      <div class="contenido-principal">
        <ul class="nav nav-tabs">
          <li class="nav-item botones-tab">
            <a class="nav-link" href={"../index.html"}>Inicio</a>
          </li>
          <li class="nav-item botones-tab">
            <a class="nav-link" href={"../historias.html"}>Historias de usuario</a>
          </li>
          <li class="nav-item botones-tab">
            <a class="nav-link" href={"../product-backlog.html"}>Product Backlog</a>
          </li>
          <li class="nav-item botones-tab">
            <a class="nav-link" href={"../fichas-backlog.html"}>Fichas Backlog</a>
          </li>
          <li class="nav-item botones-tab">
            <a class="nav-link" href={"../sprints.html"}>Calendarización</a>
          </li>
        </ul>


      </div>



    </React.Fragment>

  )
}

export { Tabs };