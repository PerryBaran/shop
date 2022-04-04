import React from 'react';
import games from './featuredGames';

function Featured(props) {
    const [x, setx] = React.useState(0);

    const maxTranslate = ((games.length - 1) * 100)
    const translate = {
        transform: `translate(-${x}vw)`
    }

    const translateLeft = () => {
        if (x < maxTranslate) {
            setx(x + 100)
        } else {
            setx(0)
        }
    }

    const translateRight = () => {
        if (x > 0) {
            setx(x - 100)
        } else {
            setx(maxTranslate)
        }
    }

    const left = '<'
    const right = '>'
    
    return (
        <div>
            <h2>Featured Games</h2>
            <div className='feature' >
                {games.map((game => {
                    return (
                        <div key={game.name} className="games" style={translate}>
                            <div className="gameWrapper">
                                <img src={game.src} alt={game.name}></img>
                                <p>{game.name}</p>
                                <p>{game.price} <button>add to cart</button></p>
                                
                            </div>
                        </div>
                    )
                }))}
                <button className='navFeatured' onClick={translateRight}>{left}</button>
                <button className='navFeatured right' onClick={translateLeft}>{right}</button>    
            </div>
        </div>
    )
}

export default Featured;