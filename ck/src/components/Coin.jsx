"use client";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
`;

const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 700px;
`;



const Coin = ({ name, image, symbol, price, priceChange, marketcap}) => {
  return (
    <ContainerFlex>
      <Container>
        <img src={image} as="image" style={{ width: 20, height: 20 }} />
        <h3>{name}</h3>
        <p style={{ fontSize: 10, fontWeight: 200 }}>{symbol}</p>
      </Container>

      <Container>
        <p>${price}</p>
        {
            priceChange < 0 ? 
            ( <p style={{color: 'red'}}>{priceChange.toFixed(2)}%</p>)
            : 
            (<p style={{color: 'green'}}>{priceChange.toFixed(2)}%</p>)
            //add css colors 
        }
        <p>Mkt cap: ${marketcap.toLocaleString()}</p>
      </Container>
    </ContainerFlex>
  )
}

export default Coin
