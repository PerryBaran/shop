import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../style/Navbar.module.css';

function Navbar(props) {
    const { cart } = props;

    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.logo}>SteysKeys</div>
                <div className={styles.navButtons}>
                    <Link to="/home">
                        <button className={`${styles.navButton} ${styles.borderRight}`}>Home</button>
                    </Link>
                    <Link to="/shop">
                        <button className={`${styles.navButton} ${styles.borderMiddle}`}>Shop</button>
                    </Link>
                    <Link to="/cart">
                        <button className={`${styles.navButton} ${styles.borderLeft}`}>Cart</button>      
                    </Link>  
                </div>
                <Quantity cart={cart}/> 
            </div>
            <div className={styles.fakeNav}></div>
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
            <div className={styles.cartQuantity}>{quantity}</div>
        )
    }
}

export default Navbar;