"use client";
import styled from "styled-components";

const FlexCoin = styled.div`
  display: flex;
  margin-bottom: .8rem;
`;
const DivC = styled.div`
  display: flex;
  width: 100%;
`;

const DivI = styled.div`
  width: 0;
  img {
    display: none;

    @media (max-width: 850px) {
      display: block;
      width: 6rem;
      height: 6rem;
      margin-top: 4rem;
      background: transparent;
      position: relative;
      top: 18px;
      left: 60px;
    }
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  display: flex;
  color: white;
  table-layout: fixed;
  border-color: transparent;
  width: 100%;
  

  tr {
    background: inherit;
  }

  tbody {
    border-radius: 20px;
    background: #27342d;
    padding: 0.4rem;
    border-color: transparent;
    display: flex;
    width: 100%;
  }

  td {
    background: #27342d;
    width: 160px;
    font-size: 1.2rem;
  }
  @media (max-width: 850px) {
    width: 100%;
    tbody {
      width: 100%;
    }
    td {
      display: block;
      margin: 1rem;
      margin-left: 12rem;
      width: fit-content;
    }

    td::before {
      content: attr(data-cell) ": ";
      font-weight: 600;
      text-transform: capitalize;
      color: grey;
      padding-right: 0.5rem;
    }
    tr {
      overflow: hidden;
    }
  
  }
`;

const Coin = ({ name, image, symbol, price, priceChange, marketcap }) => {
  return (
    <FlexCoin>
      <DivC>
        <DivI>
          <img src={image} as="image" />
        </DivI>

        <Table>
          <tbody>
            <tr>
              <td data-cell="img" style={{ textAlign: "center"}}>
                <img
                  src={image}
                  as="image"
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 6,
                    background: "inherit",
                  }}
                />
              </td>
              <td data-cell="name">{name}</td>
              <td data-cell="symbol">{symbol.toUpperCase()}</td>
              <td data-cell="price">${price}</td>

              {priceChange < 0 ? (
                <td data-cell="24h%" style={{ color: "red" }}>
                  {priceChange.toFixed(2)}%
                </td>
              ) : (
                <td data-cell="24h%" style={{ color: "green" }}>
                  {priceChange.toFixed(2)}%
                </td>
              )}

              <td data-cell="mktcap">{marketcap.toLocaleString()}</td>
            </tr>
          </tbody>
        </Table>
      </DivC>
    </FlexCoin>
  );
};

export default Coin;
