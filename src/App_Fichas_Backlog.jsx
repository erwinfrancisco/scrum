import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacion } from './Navegacion';
import { Tabs } from './Tabs';
import { FichasBacklog } from './FichasBacklog'


export default function App_Fichas_Backlog() {
  return (
    <React.Fragment>
      <Navegacion />
      <Tabs />

      <FichasBacklog />

      
    </React.Fragment>

  )
}