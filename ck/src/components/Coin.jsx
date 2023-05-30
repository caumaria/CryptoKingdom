"use client";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  display: flex;
  max-width: 700px;
  color: white;
  background-color: #1a1a1a;
  table-layout: fixed;
  margin: 1rem;
  border-bottom: 2px solid black;

  td {
    padding: .6rem;
    width: 100px;
  }

  @media (max-width: 650px) {
    td {
      display: block;
      margin: 0 8rem;
      width: fit-content;
    }

    td::before {
      content: attr(data-cell) ": ";
      font-weight: 700;
      text-transform: capitalize;
    }
  }
`;

const Coin = ({ name, image, symbol, price, priceChange, marketcap }) => {
  return (
    <Table>
      <tbody>
        <tr>
          <td data-cell="img">
            <img src={image} as="image" style={{ width: 20, height: 20, marginLeft: 6 }} />
          </td>
          <td data-cell="name">{name}</td>
          <td data-cell="symbol">{symbol}</td>
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
  );
};

export default Coin;
