import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Detalles from './ItemListDetails';
import Tradicional from './assets/tradicional.jpg'
import Digital from './assets/digital.png'
import Modelaje from './assets/modelaje.png'
import Serv from './assets/serv.png'

const products = [
  {
    id: 'Tradicional',
    name: 'Dibujo Tradicional',
    description: 'USD$ 15',
    image: Tradicional
  },
  {
    id: 'Digital',
    name: 'Dibujo Digital',
    description: 'USD$ 20',
    image: Digital
  },
  {
    id: 'Modelaje',
    name: 'Modelaje 3D',
    description: 'USD$120',
    image: Modelaje
  },
  {
    id: 'Serv',
    name: 'Contratar por hora',
    description: 'USD$ 20',
    image: Serv
  },
];

function Bienvenido() {
  return (
    <div>
      <h1>YavelStore</h1>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <Detalles product={product} />
            <Link to={'/detalles/${product.id}'}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bienvenido;