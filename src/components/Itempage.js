import React from 'react';
import { useParams } from 'react-router-dom';
import games from './GamesList';
import Item from './itempage/Item'
import Suggestions from './itempage/Suggestions'

function Itempage(props) {
    const { addToCart } = props;
    const id = useParams().id;
    const game = games[id];

    return (
        <div className='backgroundContainer'>
            <Item game={game} addToCart={addToCart} />
            <Suggestions id={id}/>
        </div>
    );
}

export default Itempage;