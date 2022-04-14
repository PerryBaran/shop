import React from 'react';
import { Link } from 'react-router-dom';
import games from '../GamesList';
import style from '../../style/Suggestions.module.css';

function Suggestions(props) {
    const { id } = props;

    const randomSuggestions = () => {
        const tempArray = Array.from(games);
        //remove game from item page
        tempArray.splice(id, 1);
        const suggestions = [];
        while (suggestions.length < 4) {
            const randomNumber = Math.floor(Math.random() * tempArray.length);
            suggestions.push(tempArray[randomNumber]);
            tempArray.splice(randomNumber, 1)
        }
        return suggestions
    }

    const suggestions = randomSuggestions();

    return (
        <div className={style.suggestions}>
            <h2>BEST PICKS FOR YOU</h2>
            <div className={style.cardsWrapper}>
                <div className={style.cards}>
                    {suggestions.map((game => {
                        const id = games.indexOf(game)
                        return (
                            <div key={game.name} className={style.card}>
                                <Link to={`../shop/${id}`}>
                                    <img src={game.src} alt={game.name} className={style.image}/>
                                    <p className={style.name}>{game.name}</p>
                                </Link>    
                            </div>   
                        )
                    }))}
                </div>
            </div>
        </div>
    );
}

export default Suggestions;