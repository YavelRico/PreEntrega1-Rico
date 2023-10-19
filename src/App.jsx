import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemListDetails';
import Checkout from './components/Checkout'; // Agregar componente Checkout
import Brief from './components/Brief'; // Agregar componente Brief

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categories" element={<ItemListContainer />} />
          <Route path="/detalles/:productId" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/brief" element={<Brief />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
