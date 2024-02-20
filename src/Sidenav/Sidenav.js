import React from "react";

const Sidenav = ({ ClearSort, filterdata, setSortOrder }) => {
  return (
    <div className="sidenav">
      <div>
        <h1 style={{fontSize:"18px"}}>Filters</h1>
        <div style={{ display: "flex",alignItems:"center",justifyContent:"space-between",fontSize:"15px"}}>
          <input type="checkbox" onChange={filterdata} />
          <p>Fast Delivery only</p>
        </div>
      </div>
      <div>
        <h1 style={{fontSize:"18px"}}>Sort by</h1>

        <div  style={{ display: "flex",alignItems:"center",justifyContent:"space-between",fontSize:"15px"}}>
          <input type="checkbox" onChange={() => setSortOrder("asc")} />
          <p>Price: low to high</p>
        </div>

        <div style={{ display: "flex",alignItems:"center",justifyContent:"space-between",fontSize:"15px"}}>
          <input type="checkbox" onChange={() => setSortOrder("desc")} />
          <p>price: high to low</p>
        </div>
      </div>
      <button style={{width: "100%", height: "4vh",backgroundColor:" #333",borderRadius: "10px"}} onClick={() => ClearSort()}>Clear</button>
    </div>
  );
};
export default Sidenav;
