import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacion } from './Navegacion';
import { Tabs } from './Tabs';
import { HistoriaUsuario } from './HistoriaUsuario'


export default function AppHistorias() {
  return (
    <React.Fragment>
      <Navegacion />
      <Tabs />

      <HistoriaUsuario />

      
    </React.Fragment>

  )
}