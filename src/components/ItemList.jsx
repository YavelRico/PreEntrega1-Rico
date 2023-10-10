import React from 'react';

function ItemList({ productos }) {
  return (
    <div>
      <h1>YavelStore</h1>
      <div className="row">
        {productos.map((product) => (
          <div className="col-md-3" key={product.id}>
            <Detalles product={product} />
            <Link to={`/detalles/${product.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
