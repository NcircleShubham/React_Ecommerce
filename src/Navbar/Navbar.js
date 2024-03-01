import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, updateSearchQuery } from "../Productslice/ProductSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.products.searchQuery);
  const products = useSelector((state) => state.products.data);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    dispatch(setSearchQuery(query));
    dispatch(updateSearchQuery(query));
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
