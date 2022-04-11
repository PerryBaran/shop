import React from 'react';
import featured from './FeatureGames';
import games from '../GamesList';
import { Link } from "react-router-dom";
import styles from '../../style/Featured.module.css';

function Featured(props) {
    const { addToCart } = props;
    const [x, setx] = React.useState(0);
    const scroll = React.useRef(true);

    const maxTranslate = ((featured.length - 1) * 100)
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
                {featured.map((game => {
                    const id = games.indexOf(game);
                    return (
                        <div key={game.name} className={styles.featuredGames} style={translate}>
                            <div>
                                <Link to={`${id}`}>
                                    <img src={game.featured} alt={game.name} className={styles.featuredImg}></img>
                                </Link>
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