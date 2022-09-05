import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function HistoriaUsuario(){
    return(
    <React.Fragment>
      <h2 class="titulo-contenido">Historias de Usuario</h2>
      <div class="contenido-historia">

        
        <div class='table table-striped tabla-historia'>
          <table>
            <thead class='table-primary'>
              <th colspan="2">HU01 - NAVEGACIÓN</th>
            </thead>
            
            <th scope="col">Sección</th>
            <th scope="col">Descripción</th>
            <tbody class="table-striped">
              <tr scope="row">
                <td>COMO</td>
                <td>Como cliente</td>
              </tr>
  
              <tr scope="row">
                <td>QUIERO</td>
                <td>Quiero que las secciones del sitio web esten accesibles</td >
              </tr>
  
              <tr scope="row">
                <td>PARA</td>
                <td>Que permitan una navegación fluida y de fácil acceso</td>
              </tr>
  
              <tr>
                <td>CONDICIONES</td>
                <td>Incluir una barra de navegación que permita navegar dentro de las secciones principales del sitio web (home, servicios, contacto, portafolio, a cerca de...)</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div class='table table-striped tabla-historia'>
          <table>
            <thead class='table-primary'>
              <th colspan="2">HU02 - SECCIÓN DE PROMOCIONES Y SERVICIOS</th>
            </thead>
            
            <th scope="col">Sección</th>
            <th scope="col">Descripción</th>
            <tbody class="table-striped">
              <tr scope="row">
                <td>COMO</td>
                <td>Como cliente</td>
              </tr>
  
              <tr scope="row">
                <td>QUIERO</td>
                <td>Me gustaría conocer las promociones vigentes del negocio y los servicios adicionales que ofrecen.</td >
              </tr>
  
              <tr scope="row">
                <td>PARA</td>
                <td>Para conocer el rango de precios que manejan, si existen, paquetes y promociones vigentes, así como los servicios adicionales de la estética.</td>
              </tr>
  
              <tr>
                <td>CONDICIONES</td>
                <td>- Incluir una sección de la página principal, que deberá mostrar un carrusel de promociones vigentes.
-  Incluir una sección para mostrar el catálogo de servicios que ofrece la empresa.
</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='table table-striped tabla-historia'>
          <table>
            <thead class='table-primary'>
              <th colspan="2">HU03 - PORTAFOLIO DE TRABAJOS REALIZADOS</th>
            </thead>
            
            <th scope="col">Sección</th>
            <th scope="col">Descripción</th>
            <tbody class="table-striped">
              <tr scope="row">
                <td>COMO</td>
                <td>Como cliente</td>
              </tr>
  
              <tr scope="row">
                <td>QUIERO</td>
                <td>Me interesaría ver los trabajos realizados por la empresa y conocer las opiniones de sus clientes</td >
              </tr>
  
              <tr scope="row">
                <td>PARA</td>
                <td>Para conocer la calidad de los trabajos realizados del negocio, y los comentarios que pudieran darme confianza para contratar los servicios ofrecidos. </td>
              </tr>
  
              <tr>
                <td>CONDICIONES</td>
                <td>- Se deberá considerar crear una sección tipo portafolio dentro de la página principal, que muestre una galería de fotos de reales de la estética de los trabajos realizados (maquillajes, peinados y diseño de uñas.)

- Incluir una sección sobre recomendaciones y opiniones de los clientes actuales.
</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='table table-striped tabla-historia'>
          <table>
            <thead class='table-primary'>
              <th colspan="2">HU04 - SECCIÓN DE UBICACIÓN Y CONTACTO</th>
            </thead>
            
            <th scope="col">Sección</th>
            <th scope="col">Descripción</th>
            <tbody class="table-striped">
              <tr scope="row">
                <td>COMO</td>
                <td>Como cliente</td>
              </tr>
  
              <tr scope="row">
                <td>QUIERO</td>
                <td>Conocer la ubicación de la empresa, y datos de contacto y conocer si el negocio cuenta con redes sociales.</td >
              </tr>
  
              <tr scope="row">
                <td>PARA</td>
                <td>Para poder agendar una cita ya sea vía telefónica, por mensaje o vía inbox de redes sociales. </td>
              </tr>
  
              <tr>
                <td>CONDICIONES</td>
                <td>- Incluir sección en la página principal, que muestre la ubicación del negocio, y datos de contacto para que puedan realizar una cita.

- Se puede incluir en el footer, enlaces a redes sociales con iconografía de fácil identificación.

- Incluir un enlace de preguntas frecuentes que le den una idea clara al cliente de que esperar al contratar algún servicio.

- Incluir un enlace de términos y condiciones.

</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class='table table-striped tabla-historia'>
          <table>
            <thead class='table-primary'>
              <th colspan="2">HU05 - BASE DE DATOS DE CLIENTES</th>
            </thead>
            
            <th scope="col">Sección</th>
            <th scope="col">Descripción</th>
            <tbody class="table-striped">
              <tr scope="row">
                <td>COMO</td>
                <td>Como administrador</td>
              </tr>
  
              <tr scope="row">
                <td>QUIERO</td>
                <td>Tener una base de datos las clientas</td >
              </tr>
  
              <tr scope="row">
                <td>PARA</td>
                <td>Para poder conocer datos que ayuden a brindar promociones y servicios enfocados al tipo de segmento de clientas.</td>
              </tr>
  
              <tr>
                <td>CONDICIONES</td>
                <td>Elaborar una base de datos para archivar información de las clientas existentes y potenciales que pidan información, sobre citas o servicios ofertados.</td>
              </tr>
            </tbody>
          </table>
        </div>



        
      </div>
      
    </React.Fragment>
  )
}

export { HistoriaUsuario };