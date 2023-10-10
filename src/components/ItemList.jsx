import React from 'react';
import { Link } from 'react-router-dom';

function ItemList({ products }) {
  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/detalles/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
