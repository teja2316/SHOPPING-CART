import React from 'react';
import Basket from './Basket'
import data from './data';
import { useState } from 'react';

import Main from './Main';


const Checkout = () => {


    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {

        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        }
        else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        }
        else {

            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    return (
        <div className="App">

            <div className="row">
                <Main products={products} onAdd={onAdd}></Main> </div>

            <center>
                <div className="cardB">
                    <Basket
                        cartItems={cartItems}
                        onAdd={onAdd}
                        onRemove={onRemove}
                    // clearCart={clearCart}
                    ></Basket>
                </div>
            </center>

        </div>
    );
}


export default Checkout;
