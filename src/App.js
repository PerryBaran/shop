import React, { Component } from 'react';
import Router from './Router';

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
                <Router cart={this.state.cart} setCart={this.state.setCart}/>
            </div>
        );
    }
}

export default App;