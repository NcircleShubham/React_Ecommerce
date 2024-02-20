import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const contextValue = { products, updateProducts, searchQuery, updateSearchQuery };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
