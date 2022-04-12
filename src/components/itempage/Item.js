import React from 'react';
import style from '../../style/Item.module.css';

function Item(props) {
    const { game, addToCart } = props;
    return (
        <div className={style.wrapper}>
            <div className={style.ImgWrapper}>
                <img src={game.src} alt={game.name}/>
            </div>    
            <div className={style.info}>
                <div className={style.top}>
                    <div className={style.header}>
                        <h2>{game.name}</h2>
                        <p>PC | Steam</p>
                    </div>
                    <p>{game.description}</p>
                </div>    
                <div className={style.bottom}>
                    <p>£{game.price}</p>
                    <div>
                        <button onClick={() => addToCart(game)} className={style.addToCart} >Add to Cart</button>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Item;