import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductsByCategory } from './asyncMock';

function ItemListContainer() {
  const { category: initialCategory } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [category, setCategory] = useState(initialCategory || '');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProductsByCategory(category); 
        setProducts(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products by category:', error);
        navigate('/error');
      }
    }

    fetchProducts();
  }, [category, navigate]);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    navigate(`/product/${selectedCategory}`);
    setCategory(selectedCategory);
  };

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h1>Productos en la categoría {category}</h1>
      <form>
        <label htmlFor="category">Selecciona una categoría:</label>
        <select id="category" name="category" value={category} onChange={handleCategoryChange}>
          <option value="">Todas</option>
          <option value="Arte Tridimensional">Arte Tridimensional</option>
          <option value="Arte Tradicional">Arte Tradicional</option>
          <option value="Arte Digital">Arte Digital</option>
          <option value="Servicios">Servicios</option>
        </select>
      </form>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron productos en esta categoría.</p>
      )}
    </div>
  );
}

export default ItemListContainer;
