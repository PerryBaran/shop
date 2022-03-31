import React from 'react';
import home from './images/home.jpg'

function Homepage(props) {
    return (
        <div>
            <div className='homeImageContainer'>
                <img src={home} alt="elden bling" className="homeimage"></img>
            </div>
            <p className="about">
                Tired of being called maidenless?<br></br>
                Feeling tarnished?<br></br>
                Look like you just woke up in the bottom of a dungeon?<br></br>
                Get yourself some style at Elden Bling<br></br>
                <button>Shop Now</button>
            </p>
        </div>
    );
}

export default Homepage;