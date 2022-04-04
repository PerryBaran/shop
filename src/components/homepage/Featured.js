import React from 'react';
import games from '../GamesList';

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

    React.useEffect(() => {
        setTimeout(() => {translateLeft()}, 10000);
    });
    
    return (
        <div>
            <h2>Featured Games</h2>
            <div className='feature' >
                {games.map((game => {
                    if (game.featured) {
                        return (
                            <div key={game.name} className="games" style={translate}>
                                <div className="gameWrapper">
                                    <img src={game.featured} alt={game.name}></img>
                                    <div className='gameInfo'>
                                        <p>{game.name}</p>
                                        <p>{game.price}</p>
                                    </div>
                                </div>
                            </div>
                        )   
                    } 
                }))}
                <button className='navFeatured left' onClick={translateRight}>{left}</button>
                <button className='navFeatured right' onClick={translateLeft}>{right}</button>    
            </div>
        </div>
    )
}

export default Featured;