import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Sidenav from "../Sidenav/Sidenav";
import "../App.css";
import Navbar from "../Navbar/Navbar";

function generateFakeProducts(count) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    image: faker.image.image(),
    price: faker.commerce.price(),
    type: faker.commerce.productName(),
    selected: false, // Added selected state
  }));
}

const ProductDisplay = ({ productCount }) => {
  const [products, setProducts] = useState(generateFakeProducts(productCount));
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    if (sortOrder === "desc") {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    } else {
      setProducts(generateFakeProducts(productCount));
    }
  }, [sortOrder]);

  const filterdata = () => {
    const filteredProducts = products.filter((product) => product.price > 403);
    setProducts(filteredProducts);
  };

  const ClearSort = () => {
    setProducts([...generateFakeProducts(productCount)]);
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
                height: "350px",
                margin: "30px",
                backgroundColor:"#c4c6c9",
                textAlign: "center",
                borderRadius: "10px",
                cursor: 'pointer', // Add cursor style for better user experience
              }}
              key={index}
            
            >
              <img
                style={{ width: "200px", height: "200px" }}
                src={product.image}
                alt={`Product ${index + 1}`}
              />
              <p style={{ fontSize: "20px" }}>Price: {product.price}</p>
              <p style={{ fontSize: "10px" }}>Type: {product.type}</p>
              <button style={{width: "80%",height:"10%",backgroundColor: product.selected ? 'red' : " #333",borderRadius: "10px"}}  onClick={() => {
                const updatedProducts = products.map((p, i) => {
                  if (i === index) {
                    return { ...p, selected: !p.selected }; // Toggle selected state
                  }
                  return p;
                });
                setProducts(updatedProducts);
              }}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDisplay;
