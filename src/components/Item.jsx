import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function Item({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <ItemCount />
        <Link to={`/detalles/${product.id}`} className="btn btn-primary mt-2">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
}

export default Item;

