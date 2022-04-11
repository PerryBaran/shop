import React from 'react';
import { useParams } from 'react-router-dom';
import games from './GamesList';

function Item(props) {
    const id = useParams().id;
    const game = games[id];
    return (
        <div>
            <img src={game.src} alt={game.name} />
            <div>
                <h2>{game.name}</h2>
                <p>£{game.price}</p>
                <p>{game.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default Item;