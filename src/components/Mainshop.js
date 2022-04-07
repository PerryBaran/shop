import React from 'react';
import games from './GamesList';

function MainShop(props) {
    const { cart, setCart } = props;

    const addToCart = (game) => {
        const tempCart = cart;
        const length = tempCart.length;
        for (let i = 0; i < length; i++) {
            if (tempCart[i].game.name === game.name) {
                tempCart[i].quantity++
                setCart(tempCart);
                return
            }
        }
        const item = {game, quantity: 1};
        tempCart.push(item);
        setCart(tempCart);
    }

    return (
        <div>
            <h2 className="allGames">ALL GAMES</h2>
            <div className='cards'>
                {games.map((game => {
                    return (
                        <div className='cardWrapper' key={game.name}>
                            <div className='card'>
                                <img src={game.src} alt={game.name}/>
                                <div className='infoWrapper'>
                                    <p>{game.name}</p>
                                    <div>
                                        <p>£{game.price}</p>
                                        <div>
                                            <button onClick={() => addToCart(game)}>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }))}
            </div>
        </div>
    );
}

export default MainShop;