import React from 'react';
import style from '../style/Bottombar.module.css';
import { Link } from 'react-router-dom';

function Bottombar(props) {

    return (
        <div className={style.wrapper}>
            <div className={style.subContainer}>
                <h3>Join Us</h3>
                <p>Sign up for our Newsletter to never miss out on our amazing fake deals</p>
                <input placeholder='Enter your email'></input>
                <button onClick={() => alert("ye, sorry, this doesn't actually do anything")}>Subscribe</button>
            </div>
            <div className={style.container}>
                <h3>SteysKeys</h3>
                <Link to="/" >
                    <p className={style.link}>Home</p>
                </Link>
                <Link to="/shop">
                <p className={style.link}>Shop</p>
                </Link>
                <Link to="/cart">
                <p className={style.link}>Cart</p>
                </Link>
            </div>
            <div className={style.container}>
                <h3 className={style.whyIsTheMarginTop10NotWorkingFora}>Contact</h3>
                <a href="https://github.com/PerryBaran" className={style.link}>Github</a>
                <p onClick={() => alert('not an actual link')} className={style.link}>Email</p>
                <p onClick={() => alert('you really do just click on everything')} className={style.link}>Carrier Pigeon</p>
            </div>
        </div>
    );
}

export default Bottombar;