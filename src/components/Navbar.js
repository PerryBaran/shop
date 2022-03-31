import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className='nav'>
            <div className="logo">Elden Bling</div>
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
        </nav>
    );
}

export default Navbar;