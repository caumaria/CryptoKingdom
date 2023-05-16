import React from 'react';

const Coin = ({ name, image, symbol, price, priceChange, marketcap}) => {
  return (
    <div>
      <div>
        <img src={image} as="image" alt="" />
        <h1>{name}</h1>
        <p>{symbol}</p>
      </div>
      <div>
        <p>${price}</p>
        {
            priceChange < 0 ? 
            ( <p style={{color: 'red'}}>{priceChange.toFixed(2)}%</p>)
            : 
            (<p style={{color: 'green'}}>{priceChange.toFixed(2)}%</p>)
            //add css colors 
        }
        <p>Mkt cap: ${marketcap.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Coin
