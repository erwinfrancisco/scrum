import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegacion } from './Navegacion';
import { Tabs } from './Tabs';
import { ProductBacklog } from './ProductBacklog'


export default function App_Product_Backlog() {
  return (
    <React.Fragment>
      <Navegacion />
      <Tabs />

      <ProductBacklog />

      
    </React.Fragment>

  )
}