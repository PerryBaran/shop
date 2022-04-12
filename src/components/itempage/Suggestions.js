import React from 'react';
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
            <h2>Similar Games</h2>
            <div className={style.cards}>
                {suggestions.map((game => {
                    return (
                        <div key={game.name} className={style.card}>
                            <img src={game.src} alt={game.name} />
                            <p>{game.name}</p>
                        </div>
                    )
                }))}
            </div>
        </div>
    );
}

export default Suggestions;