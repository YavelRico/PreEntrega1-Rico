import React, { useState } from 'react';

function Detalles({ product }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <li key={product.id}>
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p>Cantidad: {count}</p>
        <button className="btn btn-primary" onClick={handleIncrement}>
          Sumar
        </button>
        <button className="btn btn-danger" onClick={handleDecrement}>
          Restar
        </button>
      </div>
    </li>
  );
}

export default Detalles;
