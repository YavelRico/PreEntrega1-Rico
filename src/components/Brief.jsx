import React from 'react';
import { useCart } from './CartContext';

function Brief() {
  const { cart } = useCart();

  return (
    <div>
      <h1>Resumen de Compra</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Brief;
