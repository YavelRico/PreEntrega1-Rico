import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from './asyncMock';

function ItemListContainer() {
  const { categories } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const categoriesArray = categories.split(',');
        const productsByCategory = [];

        for (const cat of categoriesArray) {
          const response = await getProductsByCategory(cat.trim());
          productsByCategory.push(...response);
        }

        setProducts(productsByCategory);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    }

    fetchProducts();
  }, [categories]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>Productos en la categoría {categories}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
