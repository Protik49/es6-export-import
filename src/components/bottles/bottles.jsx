import React, { use, useState } from 'react';
import Bottle from '../Bottle';
import "./bottles.css"

const Bottles = ({ bottlePromise }) => {
  const bottles = use(bottlePromise)
  const [cart, setCart] = useState([])

  const handleAddtoCart = (bottle) => {
    const newCart = [...cart, bottle]
    setCart(newCart)
  }
    
    return (
      <div>
        {/* <h3>{bottles.length}</h3> */}
        <p>Added to Cart {cart.length}</p>
        <div className="bottle-container">
          {bottles.map((bottle) => (
            <Bottle
              bottle={bottle}
              key={bottle.id}
              handleAddtoCart={handleAddtoCart}
            ></Bottle>
          ))}
        </div>
      </div>
    );
};

export default Bottles;