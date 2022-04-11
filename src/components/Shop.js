import React from 'react';
import Featured from './featured/Featured';
import Cards from './Cards';

function Shop(props) {
    const { addToCart } = props;

    return (
        <div>
            <Featured addToCart={addToCart}/>
            <Cards addToCart={addToCart}/>
        </div>
    );
}

export default Shop;