import React from 'react';

const Coin = ({ name, image, symbol, price, priceChange, marketcap}) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
        <h1>{name}</h1>
        <p>{symbol}</p>
      </div>
      <div>
        <p>${price}</p>       
        {
            priceChange < 0 ? 
            ( <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>)
            : 
            (<p className='coin-percent green'>{priceChange.toFixed(2)}%</p>)
            //add css colors 
        }
        <p>Mkt cap: ${marketcap.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Coin
