import React from 'react';

const Coin = ({ name, image, symbol, price, volume}) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
        <h1>{name}</h1>
        <p>{symbol}</p>
      </div>
      <div>
        <p>{price}</p>
        <p>{volume.toLocalString()}</p>
      </div>
    </div>
  )
}

export default Coin
