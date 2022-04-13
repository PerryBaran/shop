import React from 'react';
import styles from '../style/Cart.module.css';

function Cart(props) {
    const { cart, setCart } = props

    const total = (cart) => {
        const length = cart.length
        let total = 0;
        for(let i = 0; i < length; i++) {
            total = total + (cart[i].game.price * cart[i].quantity)
        }
        return total.toFixed(2);
    }
    
    const reduceQuantity = (index) => {
        const tempCart = cart;
        if (tempCart[index].quantity > 1) {
            tempCart[index].quantity--
        }
        setCart(tempCart);
    }

    const increaseQuantity = (index) => {
        const tempCart = cart;
        tempCart[index].quantity++
        setCart(tempCart);
    }

    const deleteItem = (index) => {
        const tempCart = cart;
        tempCart.splice(index, 1);
        setCart(tempCart);
    }

    const checkOut = () => {
        alert('Not an actual store you big dummy')
    }

    return (
        <div className={`backgroundContainer ${styles.cart}`}>
            {cart.map((item => {
                return (
                    <div key={item.game.name} className={styles.item}>
                        <img src={item.game.src} alt={item.game.name}></img>
                        <div className={styles.itemName}>
                            <p>{item.game.name}</p>
                            <p>PC | Steam</p>
                        </div>
                        <div className={styles.quantity}>
                            <button onClick={() => reduceQuantity(cart.indexOf(item))}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => increaseQuantity(cart.indexOf(item))}>+</button>
                        </div>    
                        <p>£{item.game.price}</p>
                        <button onClick={() => deleteItem(cart.indexOf(item))} className={styles.cartButtons}>Delete</button>
                    </div>
                )
            }))}
            <div className={styles.checkOut}>
                <div></div>
                <div></div>
                <div>Total: </div>
                <p>£{total(cart)}</p>
                <button onClick={checkOut} className={styles.cartButtons}>Check Out</button>
            </div>
        </div>
    );
}

export default Cart;