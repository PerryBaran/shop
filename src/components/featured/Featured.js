import React from 'react';
import games from './FeatureGames';
import styles from '../../style/Featured.module.css';

function Featured(props) {
    const { addToCart } = props;
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
        <div className ={styles.wrapper}>
            <h2>FEATURED</h2>
            <div className={styles.feature}>
                {games.map((game => {
                    return (
                        <div key={game.name} className={styles.featuredGames} style={translate}>
                            <div>
                                <img src={game.featured} alt={game.name} className={styles.featuredImg}></img>
                                <div className={styles.featuredGameInfo}>
                                    <p>{game.name}</p>
                                    <p>£{game.price}</p>
                                    <div>
                                        <button onClick={() => addToCart(game)} className={styles.addToCart}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )   
                }))}
                <button className={`${styles.featuredNav} ${styles.backward}`} onClick={clickLeft}>{left}</button>
                <button className={`${styles.featuredNav} ${styles.forward}`} onClick={clickRight}>{right}</button>    
            </div>
        </div>
    )
}

export default Featured;