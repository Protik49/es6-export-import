import React from 'react';
import "./Bottle.css";

const Bottle = ({bottle}) => {
    const {img,name,price,stock}=bottle
    return (
        <div className='bottle card'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{stock} Remaining</p>
            <button>Buy Now</button>
        </div>
    );
};

export default Bottle;