import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import data from './data';
import { useState } from 'react';
import Checkout from './checkout';



const Layout = () => {

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

            <Header countCartItems={cartItems.length}></Header>

            <div className="row">
                <Main products={products} onAdd={onAdd}></Main> </div>

            <br /><hr /><center>

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

export default Layout;