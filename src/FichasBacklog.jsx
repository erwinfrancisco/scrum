import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function FichasBacklog() {
  return (
    <React.Fragment>
      <h2 class="titulo-contenido">Fichas del Backlog</h2>
      <h2 class="titulo-contenido">Sprint # 1</h2>

      <div class='table table-striped tabla-historia'>
        <table>
          <thead class='table-warning'>
            <th colspan="6">MAQUETADO Y DEFINICIÓN DE NAVEGACIÓN DEL SITIO WEB</th>
          </thead>

          <th scope="col">ID</th>
          <th scope="col">Requerimiento / Tarea</th>
          <th scope="col">Prioridad</th>
          <th scope="col">Responsable</th>
          <th scope="col">Estimación de Esfuerzo (Horas)</th>
          <th scope="col">No. Sprint</th>


          <tbody class="table-striped">

            <tr scope="row">
              <td>IH01-01</td>
              <td>Definir paleta de colores y tipografías</td>
              <td id="horas">1</td>
              <td>Norberto Treviño - (Diseñador gráfico)</td>
              <td id="horas">6</td>
              <td id="horas">1</td>
            </tr>

            <tr scope="row">
              <td>IH01-02</td>
              <td>Maquetación y diseño UI/UX</td>
              <td id="horas">2</td>
              <td>Norberto Treviño - (Diseñador gráfico)</td>
              <td id="horas">8</td>
              <td id="horas">1</td>
            </tr>

            <tr scope="row">
              <td>IH01-03</td>
              <td>Elaboración de prototipo web</td>
              <td id="horas">3</td>
              <td>Norberto Treviño - (Diseñador gráfico)</td>
              <td id="horas">8</td>
              <td id="horas">1</td>
            </tr>

            <tr scope="row">
              <td>IH01-04</td>
              <td>Diseño de barra de Navegación</td>
              <td id="horas">4</td>
              <td>Norberto Treviño - (Diseñador gráfico)</td>
              <td id="horas">4</td>
              <td id="horas">1</td>
            </tr>

          </tbody>
          <tfoot>
            <td id="suma-tabla" colspan="4"><b>Esfuerzo Total (hrs)</b></td>
            <td id="horas">26</td>
            <td></td>
          </tfoot>
        </table>
      </div>

      <h2 class="titulo-contenido">Sprint # 2</h2>

      <div class='table table-striped tabla-historia'>
        <table>
          <thead class='table-success'>
            <th colspan="6">SECCIÓN DE PROMOCIONES Y SERVICIOS</th>
          </thead>

          <th scope="col">ID</th>
          <th scope="col">Requerimiento / Tarea</th>
          <th scope="col">Prioridad</th>
          <th scope="col">Responsable</th>
          <th scope="col">Estimación de Esfuerzo (Horas)</th>
          <th scope="col">No. Sprint</th>


          <tbody class="table-striped">

            <tr scope="row">
              <td>IH02-01</td>
              <td>Desarrollar la sección de promociones</td>
              <td id="horas">1</td>
              <td>Miguel Domínguez - (Programador Front End)</td>
              <td id="horas">8</td>
              <td id="horas">2</td>
            </tr>

            <tr scope="row">
              <td>IH02-02</td>
              <td>Elaborar los diseños de los promocionales</td>
              <td id="horas">2</td>
              <td>Norberto Treviño - (Diseñador gráfico)</td>
              <td id="horas">8</td>
              <td id="horas">2</td>
            </tr>

            <tr scope="row">
              <td>IH02-03</td>
              <td>Elaborar la sección de catálogo de servicios</td>
              <td id="horas">3</td>
              <td>Miguel Domínguez - (Programador Front End)</td>
              <td id="horas">8</td>
              <td id="horas">2</td>
            </tr>

          </tbody>
          <tfoot>
            <td id="suma-tabla" colspan="4"><b>Esfuerzo Total (hrs)</b></td>
            <td id="horas">24</td>
            <td id="horas"></td>
          </tfoot>
        </table>
      </div>

      <h2 class="titulo-contenido">Sprint # 3</h2>

      <div class='table table-striped tabla-historia'>
        <table>
          <thead class='table-danger'>
            <th colspan="6">PORTAFOLIO DE SERVICIOS REALIZADOS</th>
          </thead>

          <th scope="col">ID</th>
          <th scope="col">Requerimiento / Tarea</th>
          <th scope="col">Prioridad</th>
          <th scope="col">Responsable</th>
          <th scope="col">Estimación de Esfuerzo (Horas)</th>
          <th scope="col">No. Sprint</th>


          <tbody class="table-striped">

            <tr scope="row">
              <td>IH03-01</td>
              <td>Recabar y editar fotografías de trabajos realizados por la empresa</td>
              <td id="horas">1</td>
              <td>Norberto Treviño - (Diseñador gráfico)</td>
              <td id="horas">8</td>
              <td id="horas">3</td>
            </tr>

            <tr scope="row">
              <td>IH03-02</td>
              <td>Desarrollar la sección de portafolio de servicios</td>
              <td id="horas">2</td>
              <td>Miguel Domínguez (Programador Front End)</td>
              <td id="horas">8</td>
              <td id="horas">3</td>
            </tr>

          </tbody>
          <tfoot>
            <td id="suma-tabla" colspan="4"><b>Esfuerzo Total (hrs)</b></td>
            <td id="horas">16</td>
            <td id="horas"></td>
          </tfoot>
        </table>
      </div>

      <h2 class="titulo-contenido">Sprint # 4</h2>

      <div class='table table-striped tabla-historia'>
        <table>
          <thead class='table-primary'>
            <th colspan="6">SECCIÓN DE UBICACIÓN Y CONTACTO</th>
          </thead>

          <th scope="col">ID</th>
          <th scope="col">Requerimiento / Tarea</th>
          <th scope="col">Prioridad</th>
          <th scope="col">Responsable</th>
          <th scope="col">Estimación de Esfuerzo (Horas)</th>
          <th scope="col">No. Sprint</th>


          <tbody class="table-striped">

            <tr scope="row">
              <td>IH04-01</td>
              <td>Elaborar sección de ubicación </td>
              <td id="horas">1</td>
              <td>Miguel Domínguez (Programador Front End)</td>
              <td id="horas">8</td>
              <td id="horas">4</td>
            </tr>

            <tr scope="row">
              <td>IH04-02</td>
              <td>Elaborar sección de datos de contacto</td>
              <td id="horas">2</td>
              <td>Miguel Domínguez (Programador Front End)</td>
              <td id="horas">6</td>
              <td id="horas">4</td>
            </tr>

            <tr scope="row">
              <td>IH04-03</td>
              <td>Elaborar sección de opiniones de clientes</td>
              <td id="horas">3</td>
              <td>Miguel Domínguez (Programador Front End)</td>
              <td id="horas">8</td>
              <td id="horas">4</td>
            </tr>

          </tbody>
          <tfoot>
            <td id="suma-tabla" colspan="4"><b>Esfuerzo Total (hrs)</b></td>
            <td id="horas">22</td>
            <td id="horas"></td>
          </tfoot>
        </table>
      </div>

      <h2 class="titulo-contenido">Sprint # 5</h2>

      <div class='table table-striped tabla-historia'>
        <table>
          <thead class='table-info'>
            <th colspan="6">IMPLEMENTACIÓN DE BASE DE DATOS</th>
          </thead>

          <th scope="col">ID</th>
          <th scope="col">Requerimiento / Tarea</th>
          <th scope="col">Prioridad</th>
          <th scope="col">Responsable</th>
          <th scope="col">Estimación de Esfuerzo (Horas)</th>
          <th scope="col">No. Sprint</th>


          <tbody class="table-striped">

            <tr scope="row">
              <td>IH05-01</td>
              <td>Maquetación y diseño estructura de tablas de base de datos</td>
              <td id="horas">1</td>
              <td>Erwin Flores (Programador Backend)</td>
              <td id="horas">6</td>
              <td id="horas">5</td>
            </tr>

            <tr scope="row">
              <td>IH05-02</td>
              <td>Elaboración de base de datos relacional</td>
              <td id="horas">2</td>
              <td>Erwin Flores (Programador Backend)</td>
              <td id="horas">8</td>
              <td id="horas">5</td>
            </tr>

            <tr scope="row">
              <td>IH05-03</td>
              <td>Crear CRUD para la implementación de base de datos</td>
              <td id="horas">3</td>
              <td>Erwin Flores (Programador Backend)</td>
              <td id="horas">24</td>
              <td id="horas">5</td>
            </tr>


          </tbody>
          <tfoot>
            <td id="suma-tabla" colspan="4"><b>Esfuerzo Total (hrs)</b></td>
            <td id="horas">26</td>
            <td id="horas"></td>
          </tfoot>
        </table>
      </div>


    </React.Fragment>
  )
}

export { FichasBacklog };