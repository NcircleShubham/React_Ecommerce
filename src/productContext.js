import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

/**
 * ProductProvider component that provides product-related context to its children.
 *
 * @param {Object} children - The child components to be wrapped by the context provider.
 * @return {JSX.Element} The wrapped child components with product-related context.
 */
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  /**
   * Updates the products with the new products.
   *
   * @param {array} newProducts - The new products to be set
   * @return {void}
   */
  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };
  /**
   * Updates the search query with the given value.
   *
   * @param {type} query - the new search query
   * @return {type}
   */
  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const contextValue = {
    products,
    updateProducts,
    searchQuery,
    updateSearchQuery,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
/**
 * Returns the product context using the useContext hook.
 *
 * @return {type} the product context
 */
export const useProductContext = () => {
  return useContext(ProductContext);
};
