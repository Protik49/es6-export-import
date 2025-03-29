import React from 'react';
import "./Cart.css"

const Cart = ({ cart, handleRemovefromCart }) => {
  return (
    <div className="cart-container">
      {cart.map((bottle) => (
        <div key={bottle.id}>
          <img src={bottle.img} />
          <button onClick={() => handleRemovefromCart(bottle.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;