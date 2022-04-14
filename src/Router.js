import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Itempage from "./components/Itempage"
import Bottombar from "./components/Bottombar";

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
    <BrowserRouter basename="/shopping-cart">
    <Navbar cart={cart}/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/shop" element={<Shop addToCart={addToCart}/>}/>
        <Route path="/shop/:id" element={<Itempage addToCart={addToCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
    <Bottombar />
    </BrowserRouter>
  );
}

export default Router;
