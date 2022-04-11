import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Item from "./components/Item"

function Router(props) {
  const { cart, setCart } = props;

  const addToCart = (game) => {
    const tempCart = cart;
    const length = tempCart.length;
    //check if game is already in cart - if yes increase quantity and return
    for (let i = 0; i < length; i++) {
        if (tempCart[i].game.name === game.name) {
            tempCart[i].quantity++
            setCart(tempCart);
            return
        }
    }
    //add game to cart with quantity 1
    const item = {game, quantity: 1};
    tempCart.push(item);
    setCart(tempCart);
  }

  return (
    <BrowserRouter>
    <Navbar cart={cart}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>}/>
        <Route path="/shop/:id" element={<Item />}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
