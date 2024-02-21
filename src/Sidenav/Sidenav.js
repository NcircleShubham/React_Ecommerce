import React, { useState } from "react";

const Sidenav = ({ ClearSort, filterdata, setSortOrder }) => {
    const [isChecked, setIsChecked] = useState(false);
 const [isShortasc, setIsShortasc] = useState(false);
 const [isShortdesc, setIsShortdesc] = useState(false);
  const Setfilterdata = () => {
     setIsChecked(!isChecked)
    if (!isChecked) {
     filterdata()
    } else {
      // Handle clearing or using previous data when checkbox is unchecked
      ClearSort()
    }
  };
  const handleClick = () => {
    setIsShortasc(!isShortasc)
      if (!isShortasc) {
      setSortOrder("asc");
    } else {
      ClearSort();
    }
}
  const handleClickdesc = () => {
    setIsShortdesc(!isShortdesc)
      if (!isShortdesc) {
      setSortOrder("desc");                 
    } else {
      ClearSort();
    }
}
const ClearData = () => {
  ClearSort()
   setIsShortasc(false)
   setIsShortdesc(false)
  setIsChecked(false)
}
  return (
    <div className="sidenav">
      <div>
        <h1 style={{fontSize:"18px"}}>Filters</h1>
        <div style={{ display: "flex",alignItems:"center",justifyContent:"space-between",fontSize:"15px"}}>
          <input type="checkbox"  onChange={Setfilterdata} checked={isChecked}/>
          <p>Fast Delivery only</p>
        </div>
      </div>
      <div>
        <h1 style={{fontSize:"18px"}}>Sort by</h1>

        <div  style={{ display: "flex",alignItems:"center",justifyContent:"space-between",fontSize:"15px"}}>
          <input type="checkbox" onChange={handleClick} checked={isShortasc}/>
          <p>Price: low to high</p>
        </div>

        <div style={{ display: "flex",alignItems:"center",justifyContent:"space-between",fontSize:"15px"}}>
          <input type="checkbox" onChange={handleClickdesc} checked={isShortdesc}/>
          <p>price: high to low</p>
        </div>
      </div>
      <button style={{width: "100%", height: "4vh",backgroundColor:" #333",borderRadius: "10px"}} onClick={ClearData}>Clear</button>
    </div>
  );
};
export default Sidenav;
