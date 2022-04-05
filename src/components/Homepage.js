import React from 'react';
import Featured from './homepage/Featured';

function Homepage(props) {
    return (
        <div>
            <Featured />
            <div className='about'>
                <h2>ABOUT</h2>
                <p>
                    PCGRU is a fake online storefront created by Perry Baran as part of my React projects for the Oden Project. 
                    PCGRU aims to simulate an online retail storefront for pc games.
                    If this was a real storefront I would write something about how all are games are sold as steam keys unless otherwise stated.
                    Something about our return policy and other imporant infomation for the customer.
                    Honestly, I'm just trying to fill space and don't want to sit here coming up with a fake about section when it isn't really relavent to the project.
                </p>
            </div>
        </div>
    );
}

export default Homepage;