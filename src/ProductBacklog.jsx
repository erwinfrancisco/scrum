import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductBacklog(){
  return(
    <React.Fragment>
      <h2 class="titulo-contenido">Product Backlog</h2>

      <div class='table table-striped tabla-historia'>
          <table>
            <thead class='table-primary'>
              <th colspan="8">PRODUCT BACKLOG - ESTÉTICA DIVINAS CHIC</th>
            </thead>
            
            <th scope="col">Identificador (ID)</th>
            <th scope="col">Enunciado de la Historia</th>
            <th scope="col">Alias</th>
            <th scope="col">Estado</th>
            <th scope="col">Esfuerzo</th>
            <th scope="col">Interacción (Sprint)</th>
            <th scope="col">Prioridad</th>
            <th scope="col">Comentarios</th>
            <tbody class="table-striped">
              
              <tr scope="row">
                <td>IH01</td>
                <td>Como cliente quiero que las secciones del sitio web sean accesibles, para que permitan una navegación fluida y de fácil acceso.</td>
                <td>Navegación</td>
                <td>Planificado</td>
                <td>5</td>
                <td>1</td>
                <td>1</td>
                <td>Secciones: (home, servicios, contacto, portafolio, a cerca de…)</td>
              </tr>

              <tr scope="row">
                <td>IH02</td>
                <td>Como cliente me gustaría conocer las promociones vigentes del negocio y los servicios que ofrecen para conocer los costos de los servicios que se ofertan.</td>
                <td>Sección de promociones y servicios</td>
                <td>Planificado</td>
                <td>6</td>
                <td>1</td>
                <td>2</td>
                <td>Mostrar carrusel de promociones y catálogo de servicios</td>
              </tr>

              <tr scope="row">
                <td>IH03</td>
                <td>Como cliente me interesaría ver fotografías de los trabajos realizados por la empresa y conocer las opiniones de las clientas.</td>
                <td>Portafolio de trabajos realizados</td>
                <td>Planificado</td>
                <td>7</td>
                <td>7</td>
                <td>4</td>
                <td>Portafolio de servicios ofrecidos</td>
              </tr>

              <tr scope="row">
                <td>IH04</td>
                <td>Como cliente quiero conocer la ubicación de la empresa y datos de contacto para poder pedir mayor información o agendar una cita.</td>
                <td>Sección de ubicación y contacto</td>
                <td>Planificado</td>
                <td>7</td>
                <td>6</td>
                <td>4</td>
                <td>Sección con mapa de ubicación del local y sección de opiniones de clientas.</td>
              </tr>

              <tr scope="row">
                <td>IH05</td>
                <td>Como administrador quiero tener una base de datos de clientas que me permitan conocer datos específicos para brindar promociones y servicios enfocados al segmento de clientas del negocio.</td>
                <td>Base de datos de clientes</td>
                <td>Planificado</td>
                <td>15</td>
                <td>4</td>
                <td>5</td>
                <td>Implementación de base de datos relacional para la gestión de clientas.</td>
              </tr>

              
  
            
            </tbody>
          </table>
        </div>




      
    </React.Fragment>

  )
}

export { ProductBacklog };