import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = React.useState([]);

  return (
    <BrowserRouter>
    <Navbar cart={cart}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
