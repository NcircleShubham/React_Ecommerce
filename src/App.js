import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ECartPage from './Ecart/Ecart'; // Create this component for the E-cart page
import ProductDisplay from "./Product/Product";
import { ProductProvider } from './productContext';
function App() {
  return (
    <ProductProvider>
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <ProductDisplay productCount={10} />} />
          <Route path="/ecart" element={<ECartPage />} />
        </Routes>
      </div>
    </Router>
    </ProductProvider>
  );
}

export default App;
