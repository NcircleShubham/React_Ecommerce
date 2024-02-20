// Ecart.js
import React from 'react';
import { useProductContext } from '../productContext';

const Ecart = () => {
    const { products } = useProductContext();
  return (
    <div >
      <h2>Cart List</h2>
          <div  style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}> 
          {products.filter((product) => product.selected === true).map((product,index) => (
              <div style={{
                  width: "250px",
                  height: "350px",
                  margin: "30px",
                  backgroundColor: "#c4c6c9",
                  textAlign: "center",
                  borderRadius: "10px",
                  cursor: "pointer", // Add cursor style for better user experience
                }}
                key={index}>
                  <img
                  style={{ width: "200px", height: "200px" }}
                  src={product.image}
                  alt={`Product ${index + 1}`}
                />
                <p style={{ fontSize: "20px" }}>Price: {product.price}</p>
                <p style={{ fontSize: "10px" }}>Type: {product.type}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default Ecart;
