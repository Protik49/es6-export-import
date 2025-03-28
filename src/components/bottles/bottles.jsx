import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle';
import "./bottles.css"
import { addToStoreCart, getStoreCart } from '../../utilities/localStorage';

const Bottles = ({ bottlePromise }) => {
  const bottles = use(bottlePromise)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCartIDs = getStoreCart()
    const storedCart = []
    for (const id of storedCartIDs) {
      const cartBottle = bottles.find(bottle => bottle.id ===id)
      if (cartBottle) {
        storedCart.push(cartBottle)
      }
    }

    setCart(storedCart)
  },[bottles])

  const handleAddtoCart = (bottle) => {
    const newCart = [...cart, bottle]
    setCart(newCart)

    addToStoreCart(bottle.id)
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