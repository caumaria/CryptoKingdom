"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "@/components/Coin";
import styled from "styled-components";

const Div = styled.div`
  color: white;
`;

const Input = styled.input`
  border-radius: 20px;
  border-color: transparent;
  background-color: #27342D;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 1rem 2rem;
  width: 738px;
`;

const Table = styled.table`
  border-collapse: collapse;
  display: flex;
  max-width: 600px;
  color: white;
  table-layout: fixed;
  margin: 1rem 4.5rem;
  color: grey;

  td {
    width: 106px;
  }

  @media (max-width: 650px) {    
    display: none;
  }
`;

const Homepage = () => {
  const [coins, setCoins] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.warn(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Div>
      <form>
        <Input
          type="text"
          placeholder="Search a currency"
          onChange={handleChange}
        />
      </form>

      <Table>
        <tbody>
          <tr>
            <td>Img</td>
            <td>Coin</td>
            <td>Symbol</td>
            <td>Price</td>
            <td>24h%</td>
            <td>MKT cap</td>
          </tr>
        </tbody>
      </Table>

      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </Div>
  );
};

export default Homepage;
