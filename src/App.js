import logo from "./logo.svg";
import "./App.css";

import ProductDisplay from "./Product/Product";
import Navbar from "./Navbar/Navbar";
import Sidenav from "./Sidenav/Sidenav";
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

function App() {
  return (
    <div className="App">
      <ProductDisplay productCount={10} />
    </div>
  );
}

export default App;
