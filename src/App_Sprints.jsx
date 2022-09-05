import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacion } from './Navegacion';
import { Tabs } from './Tabs';
import { Sprints_ } from './Sprints_'


export default function App_Sprints() {
  return (
    <React.Fragment>
      <Navegacion />
      <Tabs />

      <Sprints_ />

      
    </React.Fragment>

  )
}