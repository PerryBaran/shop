import React, { Component } from 'react';
import Main from './Main';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cart: [],
            setCart: this.setCart
        }
    }

    setCart = (input) => {
        this.setState({
            cart: input
        })
    }

    render() {
        return (
            <div>
                <Main cart={this.state.cart} setCart={this.state.setCart}/>
            </div>
        );
    }
}

export default App;