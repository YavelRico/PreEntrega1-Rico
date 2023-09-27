import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/NavBar';
import WelcomeToCart from './assets/components/ItemListContainer';
import Detalles from './assets/components/ItemListDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/product" element={<WelcomeToCart />} />
          <Route path="/detalles/:productId" element={<Detalles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;