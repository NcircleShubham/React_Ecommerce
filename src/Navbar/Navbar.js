import React from "react";

const Navbar = ({products}) => {
  let count = products.map((i)=>i.selected==true ).reduce((a,b)=>a+b,0)
  return (
    <div class="navbar">
      <div class="ecart">E-cart</div>
      <div class="cart">Cart</div>
      <div>{count}</div>
      <div class="search-box">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};
export default Navbar;
