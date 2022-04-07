import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    const { cart } = props;


    return (
        <div>
            <div className='nav'>
                <div className="logo">PCGRU</div>
                <div className="buttons">
                    <Link to="/">
                        <button className="navButton borderRight">Home</button>
                    </Link>
                    <Link to="/shop">
                        <button className="navButton borderMiddle">Shop</button>
                    </Link>
                    <Link to="/cart">
                        <button className="navButton borderLeft">Cart</button>      
                    </Link>  
                </div>
                <Quantity cart={cart}/> 
            </div>
            <div className='fakeNav'></div>
        </div>
    );
}

function Quantity(props) {
    const { cart } = props
    let quantity = 0;
    const length = cart.length;
    for (let i = 0; i < length; i++) {
        quantity = quantity + cart[i].quantity
    }

    if (quantity > 0) {
        return (
            <div className="cartQuantity">{quantity}</div>
        )
    }
}

export default Navbar;