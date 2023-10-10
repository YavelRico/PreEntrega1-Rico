const products = [
    {
      id: '1',
      name: 'Producto 1',
      category: 'Arte Tridimensional',
      description: 'USD$ 15',
    },
    {
      id: '2',
      name: 'Producto 2',
      category: 'Arte Tradicional',
      description: 'USD$ 20',
    },
    {
      id: '3',
      name: 'Producto 3',
      category: 'Arte Digital',
      description: 'USD$ 120',
    },
    {
      id: '4',
      name: 'Producto 4',
      category: 'Servicios',
      description: 'USD$ 20',
    },
  ];
  
  export default products;
  
  export async function getProducts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  }
  
  export async function getProductsByCategory(category) {
    const filteredProducts = products.filter((product) => product.category === category);
  
    if (filteredProducts.length === 0) {
      throw new Error('No se encontraron productos en esta categoría.');
    }
  
    return filteredProducts;
  }
  
  export async function getProductsById(productId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = products.find((p) => p.id === productId);
        if (product) {
          resolve(product);
        } else {
          reject(new Error('Producto no encontrado.'));
        }
      }, 1000);
    });
  }
  