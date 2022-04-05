import React from 'react';
import games from './FeatureGames';

function Featured(props) {
    const [x, setx] = React.useState(0);
    const scroll = React.useRef(true);

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

    const clickRight = () => {
        translateLeft();
        scroll.current = false;
    }

    const clickLeft = () => {
        translateRight();
        scroll.current = false;
    }

    const autoScroll = () => {
        setTimeout(() => {
            if(scroll.current) {
               translateLeft() 
            }
        }, 10000);
    }

    React.useEffect(() => {
        autoScroll()
    });

    //arrow text for buttons, put here to avoid conflict with JSX
    const left = '<'
    const right = '>'

    return (
        <div className ='featuredWrapper'>
            <h2>FEATURED GAMES</h2>
            <div className='feature'>
                {games.map((game => {
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
                }))}
                <button className='navFeatured left' onClick={clickLeft}>{left}</button>
                <button className='navFeatured right' onClick={clickRight}>{right}</button>    
            </div>
        </div>
    )
}

export default Featured;