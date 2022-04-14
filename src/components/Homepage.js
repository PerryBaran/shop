import React from 'react';
import games from './GamesList';
import { Link } from 'react-router-dom';
import styles from '../style/Homepage.module.css';

function Homepage(props) {
    const game = promoted(games, 'Elden Ring');
    const id = games.indexOf(game);
    return (
        <div className="backgroundContainer">
            <img src={game.featured} alt={game.name} className={styles.background} />
            <div className={styles.wrapper}>
                <p>ELDEN RING</p>
                <p>OUT NOW</p>
                <Link to={`/shop/${id}`}>
                    <button className={styles.nav}>Click for details</button>
                </Link>
                <Link to="/shop">
                    <button className={styles.nav}>Continue to Shop</button>
                </Link>
            </div>    
        </div>
    );
}

const promoted = (games, game) => {
    const length = games.length
    for (let i = 0; i < length; i++) {
        if (games[i].name === game) {
            return games[i]
        }
    }
}

export default Homepage;