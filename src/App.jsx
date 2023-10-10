import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import WelcomeToCart from './components/ItemListContainer';
import Detalles from './components/ItemListDetails';

const ErrorComponent = () => (
  <div>
    <h1>No se encontraron productos en esta categoría.</h1>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomeToCart />} />
          <Route path="/category/:categories" element={<WelcomeToCart />} />
          <Route path="/detalles/:productId" element={<Detalles />} />
          <Route path="/error" element={<ErrorComponent />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
