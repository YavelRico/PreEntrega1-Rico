import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from './asyncMock';

function ItemList(props) {
  return (
    <div>
      <h1>YavelStore</h1>
      <div className="row">
        {props.productos.map((product) => (
          <div className="col-md-3" key={product.id}>
            <Detalles product={product} />
            <Link to={`/detalles/${product.id}`}>Ver Detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    async function fetchProductsByCategory() {
      try {
        const filteredProducts = await getProductsByCategory(category);
        setProductos(filteredProducts);
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    }

    fetchProductsByCategory();
  }, [category]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
