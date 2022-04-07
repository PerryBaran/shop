import React from 'react';

function Cart(props) {
    const { cart, setCart } = props
    const [update, setUpdate] = React.useState(0)

    const forceUpdate = () => {
        setUpdate(update + 1)
    }

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
        forceUpdate();
    }

    const increaseQuantity = (index) => {
        const tempCart = cart;
        tempCart[index].quantity++
        setCart(tempCart);
        forceUpdate();
    }

    const deleteItem = (index) => {
        const tempCart = cart;
        tempCart.splice(index, 1);
        setCart(tempCart);
        forceUpdate();
    }

    const checkOut = () => {
        alert('Not an actual store you big dummy')
    }

    return (
        <div className="bigCart">
            {cart.map((item => {
                return (
                    <div key={item.game.name} className="item">
                        <img src={item.game.src} alt={item.game.name}></img>
                        
                        <div className="itemName">
                            <p>{item.game.name}</p>
                            <p>PC | Steam</p>
                        </div>
                        <div className="quantity">
                            <button onClick={() => reduceQuantity(cart.indexOf(item))}><div >-</div></button>
                            <p>{item.quantity}</p>
                            <button onClick={() => increaseQuantity(cart.indexOf(item))}><div>+</div></button>
                        </div>    
                        <p>£{item.game.price}</p>
                        <button onClick={() => deleteItem(cart.indexOf(item))}>Delete</button>
                    </div>
                )
            }))}
            <div className="checkOut">
                <div></div>
                <div></div>
                <div>Total: </div>
                <p>£{total(cart)}</p>
                <button onClick={checkOut}>Check Out</button>
            </div>
        </div>
    );
}

export default Cart;