import React from 'react';

const Basket = (props) => {

  const { cartItems, onAdd, onRemove } = props;

  const clearCart = () => {
    cartItems = []

  }

  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.12;
  const totalPrice = itemsPrice + taxPrice;


  return (

    <aside className="row">
      <h2>Cart Items : </h2>
      <div>
        {cartItems.length === 0 && <div>empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>

            </div>

            <div className="col-2 text-center">
              {item.qty} x Rs.{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-center">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-center">${taxPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-center">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
           
            

            <hr />
            <div >
              <button className="btn btn-primary" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}


export default Basket;
