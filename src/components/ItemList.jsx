import React from 'react';
import { Link } from 'react-router-dom';

function ItemList({ products }) {
  return (
    <div>
      <h2>Productos</h2>
      <div className="card-container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <Link to={`/detalles/${product.id}`} className="btn btn-primary">
                Ver Detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
