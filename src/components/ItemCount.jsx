import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-danger" onClick={handleDecrement}>
          -
        </button>
        <p className="mx-3">{count}</p>
        <button className="btn btn-success" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button className="btn btn-primary mt-3" onClick={() => onAdd(count)}>
        Agregar al Carrito
      </button>
    </div>
  );
}

export default ItemCount;
