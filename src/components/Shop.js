import React from 'react';
import Featured from './featured/Featured';
import Cards from './Cards';

function Shop(props) {
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
        <div>
            <Featured addToCart={addToCart}/>
            <Cards addToCart={addToCart}/>
        </div>
    );
}

export default Shop;