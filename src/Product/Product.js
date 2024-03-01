import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Sidenav from "../Sidenav/Sidenav";
import "../App.css";
import Navbar from "../Navbar/Navbar";
import { updateProducts, setSearchQuery, setSortOrder } from "../Productslice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
/**
 * Generates an array of fake products with the specified count.
 *
 * @param {number} count - The number of fake products to generate
 * @return {Array} An array of fake products
 */
function generateFakeProducts(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    image: faker.image.image(),
    price: faker.commerce.price(),
    type: faker.commerce.productName(),
    selected: false, // Added selected state
  }));
}
/**
 * Renders the ProductDisplay component with the given products and search functionality.
 *
 * @param {object} productCount - The number of products to be displayed
 * @return {JSX.Element} The rendered ProductDisplay component
 */
const ProductDisplay = ({ productCount }) => {
    const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const searchQuery = useSelector((state) => state.products.searchQuery);
  const [sortOrder, setSortOrder] = useState("");
  useEffect(() => {
    if (searchQuery === "") {
      dispatch(updateProducts(generateFakeProducts(productCount)));
      return;
    }
    const filteredProducts = products.filter((product) =>
      product.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
        dispatch(updateProducts(filteredProducts));
  }, [searchQuery]);

  useEffect(() => {
    // Assuming generateFakeProducts is a function that generates fake products
    const newProducts = generateFakeProducts(productCount);
    dispatch(updateProducts(newProducts));
  }, [productCount]);

  useEffect(() => {
    const newProducts = generateFakeProducts(productCount);

    // Apply sorting based on the current sortOrder
    if (sortOrder === "desc") {
      const sortedProducts = [...newProducts].sort((a, b) => b.price - a.price);
      dispatch(updateProducts(sortedProducts));
    } else if (sortOrder === "asc") {
      const sortedProductsAsc = [...newProducts].sort(
        (a, b) => a.price - b.price
      );
      dispatch(updateProducts(sortedProductsAsc));
    } else {
      // If sortOrder is not set, just update with the new products without sorting
      dispatch(updateProducts(newProducts));
    }
  }, [sortOrder]);
  /**
   * This function filters the data and updates the products.
   */
  const filterdata = () => {
    const filteredProducts = products.filter((product) => product.price > 403);
    dispatch(updateProducts(filteredProducts));
  };
  /**
   * A function that clears the products and sets the sort order to an empty string.
   */
  const ClearSort = () => {
    dispatch(updateProducts([...generateFakeProducts(productCount)]));
    setSortOrder("");
  };

  return (
    <div>
      <div className="AppNavbar">
        <Navbar products={products} />
      </div>
      <div className="AppBody">
        <div className="Appsidenav">
          <Sidenav
            ClearSort={ClearSort}
            filterdata={filterdata}
            setSortOrder={setSortOrder}
          ></Sidenav>
        </div>
        <div className="AppProduct">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {products.map((product, index) => (
              <div
                style={{
                  width: "250px",
                  height: "380px",
                  margin: "30px",
                  backgroundColor: "#c4c6c9",
                  textAlign: "center",
                  borderRadius: "10px",
                  cursor: "pointer", // Add cursor style for better user experience
                }}
                key={index}
              >
                <img
                  style={{ width: "200px", height: "200px" , marginTop:"10px",borderRadius:"10px"}}
                  src={product.image}
                  alt={`Product ${index + 1}`}
                />
                <p style={{ fontSize: "20px" }}>Price: {product.price}</p>
                <p style={{ fontSize: "10px" }}>Type: {product.type}</p>
                <button
                  style={{
                    width: "80%",
                    height: "10%",
                    backgroundColor: product.selected ? "red" : " #333",
                    borderRadius: "10px",
                  }}
                  onClick={() => {
                    const updatedProducts = products.map((p, i) => {
                      if (i === index) {
                        return { ...p, selected: !p.selected }; // Toggle selected state
                      }
                      return p;
                    });
                    dispatch(updateProducts(updatedProducts));
                  }}
                >
                  {product.selected ? "Remove from cart" : "Add to cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
