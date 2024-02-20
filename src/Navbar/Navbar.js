import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../productContext";

const Navbar = ({ products }) => {
  const { updateSearchQuery } = useProductContext();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    updateSearchQuery(query);
  };

  let count = products
    .map((i) => i.selected === true)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="navbar">
      <Link style={{ color: "white" }} to="/ecart" className="ecart">
        E-cart
      </Link>
      <div className="cart">Cart</div>
      <div>{count}</div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
    </div>
  );
};

export default Navbar;
