import React, { use } from 'react';
import Bottle from '../Bottle';
import "./bottles.css"

const Bottles = ({ bottlePromise }) => {
    const bottles = use (bottlePromise)
    
    return (
      <div>
        <h3>{bottles.length}</h3>
        <div className="bottle-container">
          {bottles.map((bottle) => (
            <Bottle bottle={bottle} key={bottle.id}></Bottle>
          ))}
        </div>
      </div>
    );
};

export default Bottles;