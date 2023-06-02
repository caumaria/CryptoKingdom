"use client";
import styled from "styled-components";

const DivC = styled.div`
  display: flex;
  width: 800px;
`;

const DivI = styled.div`
  width: 0;
  img {
    display: none;

    @media (max-width: 650px) {
      display: block;
      width: 6rem;
      height: 6rem;
      margin-top: 4rem;
      background: transparent;
      position: relative;
      top: 25px;
      left: 100px;
    }
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  display: flex;
  color: white;
  table-layout: fixed;
  margin: 0.4rem 2rem;
  border-color: transparent;

  tr {
    background: inherit;
    padding-right: 2rem;
  }

  tbody {
    border-radius: 20px;
    background: #27342d;
    padding: 0.4rem;
    max-width: 800px;
    border-color: transparent;
    display: flex;
  }

  td {
    background: #27342d;
    width: 140px;
  }

  @media (max-width: 650px) {
    width: 100%;
    tbody {
      width: 100%;
    }
    td {
      display: block;
      margin: 1rem 14rem;
      width: fit-content;
    }

    td::before {
      content: attr(data-cell) ": ";
      font-weight: 600;
      text-transform: capitalize;
      color: grey;
      padding-right: 0.5rem;
    }
  }
`;

const Coin = ({ name, image, symbol, price, priceChange, marketcap }) => {
  return (
    <DivC>
      <DivI>
        <img src={image} as="image" />
      </DivI>

      <Table>
        <tbody>
          <tr>
            <td data-cell="img" style={{ textAlign: 'center'}}>
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
  );
};

export default Coin;
