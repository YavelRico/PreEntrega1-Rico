import React, { useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ product }) {
  const [count, setCount] = useState(0);

  const handleAddToCart = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} ${product.name}`);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
      </div>
    </div>
  );
}

export default ItemDetail;
