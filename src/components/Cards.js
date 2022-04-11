import React from 'react';
import games from './GamesList';
import { Link } from "react-router-dom";
import styles from '../style/Cards.module.css';

function MainShop(props) {
    const { addToCart } = props;
    return (
        <div>
            <div className={styles.cardsWrapper}>
                {games.map((game => {
                    const id = games.indexOf(game)
                    return (
                        <div className={styles.card} key={game.name}>
                            <div>
                                <Link to={`${id}`}>
                                    <img src={game.src} alt={game.name} className={styles.cardImg}/>
                                </Link>
                                <div className={styles.infoWrapper}>
                                    <p>{game.name}</p>
                                    <div>
                                        <p>£{game.price}</p>
                                        <div>
                                            <button onClick={() => addToCart(game)} className={styles.addToCart}>Add to Cart</button>
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