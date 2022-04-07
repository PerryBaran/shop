import React from 'react';
import Featured from './featured/Featured';
import MainShop from './Mainshop';

function Shop(props) {
    const { cart, setCart } = props;
    return (
        <div>
            <Featured />
            <MainShop cart={cart} setCart={setCart}/>
        </div>
    );
}

export default Shop;